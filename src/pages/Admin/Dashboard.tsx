import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-800">Total de Produtos</h2>
          <p className="text-3xl font-bold text-blue-600">0</p>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-green-800">Produtos Ativos</h2>
          <p className="text-3xl font-bold text-green-600">0</p>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-yellow-800">Produtos Inativos</h2>
          <p className="text-3xl font-bold text-yellow-600">0</p>
        </div>
      </div>

      <div className="mt-8">
        <Link
          to="/produtos/novo"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Adicionar Novo Produto
        </Link>
      </div>
    </div>
  );
};

export default Dashboard; 