// backend/test-db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(() => {
    console.log('Conexão bem-sucedida com o MongoDB!');
    console.log('Banco de dados pronto para uso.');
    process.exit(0);
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
    process.exit(1);
  });