import { Request, Response } from 'express';
import Cart from '../models/cartModel';
import Product from '../models/productModel';

// Obter carrinho do usuário
export const getCart = async (req: Request, res: Response) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate({
      path: 'items.product',
      select: 'name price images stock sizes colors',
    });

    if (!cart) {
      // Criar carrinho vazio se não existir
      cart = await Cart.create({
        user: req.user._id,
        items: [],
      });
    }

    res.json({
      success: true,
      data: cart,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Adicionar item ao carrinho
export const addToCart = async (req: Request, res: Response) => {
  try {
    const { productId, quantity, size, color } = req.body;

    // Validar produto
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Produto não encontrado',
      });
    }

    // Verificar estoque
    if (product.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: 'Quantidade indisponível no estoque',
      });
    }

    // Buscar carrinho do usuário
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      // Criar novo carrinho se não existir
      cart = await Cart.create({
        user: req.user._id,
        items: [],
      });
    }

    // Verificar se o produto já está no carrinho
    const existingItemIndex = cart.items.findIndex(
      (item) => 
        item.product.toString() === productId &&
        item.size === size &&
        item.color === color
    );

    if (existingItemIndex > -1) {
      // Atualizar quantidade se já existir
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Adicionar novo item
      cart.items.push({
        product: productId,
        name: product.name,
        size,
        color,
        image: product.images[0],
        price: product.price - (product.price * product.discount / 100),
        quantity,
      });
    }

    // Salvar carrinho
    await cart.save();

    // Retornar carrinho atualizado
    res.status(201).json({
      success: true,
      data: cart,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Atualizar item do carrinho
export const updateCartItem = async (req: Request, res: Response) => {
  try {
    const { quantity } = req.body;
    const cartItemId = req.params.id;

    // Buscar carrinho
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Carrinho não encontrado',
      });
    }

    // Buscar item no carrinho
    const cartItem = cart.items.id(cartItemId);

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: 'Item não encontrado no carrinho',
      });
    }

    // Verificar estoque
    const product = await Product.findById(cartItem.product);
    if (!product || product.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: 'Quantidade indisponível no estoque',
      });
    }

    // Atualizar quantidade
    cartItem.quantity = quantity;

    // Salvar carrinho
    await cart.save();

    res.json({
      success: true,
      data: cart,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Remover item do carrinho
export const removeCartItem = async (req: Request, res: Response) => {
  try {
    const cartItemId = req.params.id;

    // Buscar carrinho
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Carrinho não encontrado',
      });
    }

    // Remover item do carrinho
    cart.items = cart.items.filter(
      (item) => item._id.toString() !== cartItemId
    );

    // Salvar carrinho
    await cart.save();

    res.json({
      success: true,
      data: cart,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Limpar carrinho
export const clearCart = async (req: Request, res: Response) => {
  try {
    // Buscar carrinho
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Carrinho não encontrado',
      });
    }

    // Limpar itens
    cart.items = [];

    // Salvar carrinho
    await cart.save();

    res.json({
      success: true,
      data: cart,
      message: 'Carrinho limpo com sucesso',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};