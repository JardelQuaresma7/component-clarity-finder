import { Router } from 'express';
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart,
} from '../controllers/cartController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

// Todas as rotas são protegidas (requerem login) - corrigidas
router.use(protect as any);

router.route('/').get(getCart as any);
router.route('/add').post(addToCart as any);
router.route('/item/:id')
  .put(updateCartItem as any)
  .delete(removeCartItem as any);
router.route('/').delete(clearCart as any);

export default router;