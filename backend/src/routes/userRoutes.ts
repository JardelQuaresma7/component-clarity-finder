import express from 'express';
import { protect, admin } from '../middleware/authMiddleware';

const router = express.Router();

// Rota para futuros endpoints de administração de usuários
router.get('/', protect, admin, (req, res) => {
  res.json({ message: 'Admin access only' });
});

export default router;