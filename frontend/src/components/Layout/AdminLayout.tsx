
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings,
  LogOut
} from "lucide-react";
import { Button } from "@/components/UI/button";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === `/admin${path}` || 
           location.pathname.startsWith(`/admin${path}/`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        <nav className="p-4 space-y-2">
          <Link to="/admin">
            <Button 
              variant={isActive("/") ? "default" : "ghost"} 
              className="w-full justify-start"
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link to="/admin/produtos">
            <Button 
              variant={isActive("/produtos") ? "default" : "ghost"} 
              className="w-full justify-start"
            >
              <Package className="mr-2 h-4 w-4" />
              Produtos
            </Button>
          </Link>
          <Link to="/admin/pedidos">
            <Button 
              variant={isActive("/pedidos") ? "default" : "ghost"} 
              className="w-full justify-start"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Pedidos
            </Button>
          </Link>
          <Link to="/admin/clientes">
            <Button 
              variant={isActive("/clientes") ? "default" : "ghost"} 
              className="w-full justify-start"
            >
              <Users className="mr-2 h-4 w-4" />
              Clientes
            </Button>
          </Link>
          <Link to="/admin/configuracoes">
            <Button 
              variant={isActive("/configuracoes") ? "default" : "ghost"} 
              className="w-full justify-start"
            >
              <Settings className="mr-2 h-4 w-4" />
              Configurações
            </Button>
          </Link>
          <div className="pt-6">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
