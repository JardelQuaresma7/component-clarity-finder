import { Router } from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

// Rotas públicas - corrigidas
router.route('/register').post(registerUser as any);
router.route('/login').post(loginUser as any);

// Rotas protegidas - corrigidas
router.route('/profile')
  .get(protect as any, getUserProfile as any)
  .put(protect as any, updateUserProfile as any);

export default router;