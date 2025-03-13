import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { products, newArrivals, featuredProducts } from './products';
import Product from '../models/productModel';
import User from '../models/userModel';

dotenv.config();

const importData = async () => {
  try {
    // Conectar ao MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce');

    // Limpar dados existentes
    await Product.deleteMany({});
    await User.deleteMany({});

    // Criar usuário admin
    const adminUser = await User.create({
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin123',
      isAdmin: true,
    });

    // Adicionar referência do admin aos produtos
    const productsWithUser = products.map(product => {
      return { ...product, user: adminUser._id };
    });

    // Inserir produtos
    await Product.insertMany(productsWithUser);

    console.log('Dados importados com sucesso!');
    process.exit();
  } catch (error) {
    console.error(`Erro: ${error}`);
    process.exit(1);
  }
};

// Executar o script
importData();