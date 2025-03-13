import { Request, Response } from 'express';
import Product from '../models/productModel';
import { createSlug } from '../utils/helpers';

// Obter todos os produtos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const pageSize = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    
    // Filtros
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: 'i' } },
            { description: { $regex: req.query.search, $options: 'i' } },
          ],
        }
      : {};
      
    const categoryFilter = req.query.category
      ? { 'category.slug': req.query.category }
      : {};
      
    const isNewFilter = req.query.isNew === 'true' ? { isNew: true } : {};
    
    // Ordenação
    const sort = req.query.sort || '-createdAt';
    
    // Construir filtro total
    const filter = {
      ...keyword,
      ...categoryFilter,
      ...isNewFilter,
    };

    const count = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .sort(sort as string)
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({
      success: true,
      data: products,
      pagination: {
        page,
        pages: Math.ceil(count / pageSize),
        total: count,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Obter produto pelo slug
export const getProductBySlug = async (req: Request, res: Response) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Produto não encontrado',
      });
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Criar novo produto
export const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    
    // Gerar slug a partir do nome se não foi informado
    if (!productData.slug) {
      productData.slug = createSlug(productData.name);
    }
    
    const product = await Product.create(productData);

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Atualizar produto
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    
    // Atualizar slug se o nome foi alterado
    if (productData.name && !productData.slug) {
      productData.slug = createSlug(productData.name);
    }
    
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      productData,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Produto não encontrado',
      });
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Excluir produto
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Produto não encontrado',
      });
    }

    await product.deleteOne();

    res.json({
      success: true,
      message: 'Produto removido com sucesso',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Obter produtos em destaque
export const getFeaturedProducts = async (req: Request, res: Response) => {
  try {
    const limit = Number(req.query.limit) || 4;
    
    const products = await Product.find({ isFavorite: true })
      .limit(limit);

    res.json({
      success: true,
      data: products,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Obter novos produtos
export const getNewArrivals = async (req: Request, res: Response) => {
  try {
    const limit = Number(req.query.limit) || 4;
    
    const products = await Product.find({ isNew: true })
      .sort('-createdAt')
      .limit(limit);

    res.json({
      success: true,
      data: products,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};