import { Router } from 'express';
import {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
} from '../controllers/orderController';
import { protect, admin } from '../middleware/authMiddleware';

const router = Router();

// Todas as rotas são protegidas (requerem login) - corrigidas
router.use(protect as any);

router.route('/')
  .post(createOrder as any)
  .get(getUserOrders as any);

router.route('/:id').get(getOrderById as any);
router.route('/:id/pay').put(updateOrderToPaid as any);
router.route('/:id/deliver').put(admin as any, updateOrderToDelivered as any);

export default router;