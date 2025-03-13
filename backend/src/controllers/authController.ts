import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

// Gerar token JWT
const generateToken = (id: string | any): string => {
  // Correção para o erro de JWT
  return jwt.sign(
    { id }, 
    process.env.JWT_SECRET || 'jwt_secret', 
    { expiresIn: process.env.JWT_EXPIRES_IN ? parseInt(process.env.JWT_EXPIRES_IN) : '7d' }
  );
};

// Registrar usuário
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Verificar se o usuário já existe
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'Usuário já existe',
      });
    }

    // Criar usuário
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          // Correção: convertendo _id para string
          token: generateToken(user._id.toString()),
        },
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Dados de usuário inválidos',
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login de usuário
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          // Correção: convertendo _id para string
          token: generateToken(user._id.toString()),
        },
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Email ou senha inválidos',
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Obter perfil do usuário
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        },
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Usuário não encontrado',
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Atualizar perfil do usuário
export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.json({
        success: true,
        data: {
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
          // Correção: convertendo _id para string
          token: generateToken(updatedUser._id.toString()),
        },
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Usuário não encontrado',
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};