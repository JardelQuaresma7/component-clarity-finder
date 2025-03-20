import { Router } from 'express';
import {
  getProducts,
  getProductBySlug,
  createProduct,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getNewArrivals,
} from '../controllers/productController';
import { protect, admin } from '../middleware/authMiddleware';

const router = Router();

// Rotas públicas
router.route('/').get(getProducts as any);
router.route('/featured').get(getFeaturedProducts as any);
router.route('/new-arrivals').get(getNewArrivals as any);
router.route('/:slug').get(getProductBySlug as any);

// Rotas protegidas (admin)
router.route('/')
  .post(protect as any, admin as any, createProduct as any);

router.route('/id/:id')
  .put(protect as any, admin as any, updateProduct as any)
  .delete(protect as any, admin as any, deleteProduct as any);

export default router;
