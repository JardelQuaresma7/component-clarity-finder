import { Request, Response } from 'express';
import Order from '../models/orderModel';
import Cart from '../models/cartModel';
import Product from '../models/productModel';

// Criar novo pedido
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;

    // Buscar carrinho do usuário
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Carrinho vazio',
      });
    }

    // Calcular preços
    const itemsPrice = cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    
    // Cálculo do frete (simplificado)
    const shippingPrice = itemsPrice > 299 ? 0 : 19.90;
    
    // Desconto total
    const discount = 0;
    
    // Total do pedido
    const totalPrice = itemsPrice + shippingPrice - discount;

    // Criar pedido
    const order = await Order.create({
      user: req.user._id,
      items: cart.items,
      shippingAddress,
      paymentMethod,
      subtotal: itemsPrice,
      shippingPrice,
      discount,
      total: totalPrice,
    });

    // Atualizar estoque
    for (const item of cart.items) {
      const product = await Product.findById(item.product);
      if (product) {
        product.stock -= item.quantity;
        await product.save();
      }
    }

    // Limpar carrinho - Correção
    cart.items.splice(0, cart.items.length);
    await cart.save();

    res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Obter todos os pedidos do usuário
export const getUserOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort('-createdAt');

    res.json({
      success: true,
      data: orders,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Obter pedido pelo ID
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Pedido não encontrado',
      });
    }

    // Verificar se o pedido pertence ao usuário ou se é admin
    if (order.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'Não autorizado',
      });
    }

    res.json({
      success: true,
      data: order,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Atualizar status de pagamento
export const updateOrderToPaid = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Pedido não encontrado',
      });
    }

    // Atualizar status do pedido
    order.isPaid = true;
    order.paidAt = new Date();
    order.status = 'Pago';
    
    // Adicionar resultado do pagamento
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();

    res.json({
      success: true,
      data: updatedOrder,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Atualizar status de entrega (admin)
export const updateOrderToDelivered = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Pedido não encontrado',
      });
    }

    // Atualizar status do pedido
    order.isDelivered = true;
    order.deliveredAt = new Date();
    order.status = 'Entregue';

    const updatedOrder = await order.save();

    res.json({
      success: true,
      data: updatedOrder,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};