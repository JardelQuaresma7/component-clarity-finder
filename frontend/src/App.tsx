
import { Toaster } from "@/components/UI/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import About from "./pages/About";
import TermsConditions from "./pages/TermsConditions";
import Privacy from "./pages/Privacy";
import ReturnPolicy from "./pages/ReturnPolicy";
import Collection from "./pages/Collection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Rotas de Produto */}
      <Route path="/produto/:id" element={<Product />} />
      
      {/* Rotas de Categoria */}
      <Route path="/novidades" element={<Category />} />
      <Route path="/outlet" element={<Category />} />
      <Route path="/categoria/:category" element={<Category />} />
      <Route path="/categoria/:category/:subcategory" element={<Category />} />
      
      {/* Rotas de Coleção */}
      <Route path="/colecao/:collectionId" element={<Collection />} />
      
      {/* Rotas de Conta */}
      <Route path="/conta" element={<Account />} />
      <Route path="/favoritos" element={<Wishlist />} />
      <Route path="/carrinho" element={<Cart />} />
      
      {/* Páginas Informativas */}
      <Route path="/sobre" element={<About />} />
      <Route path="/trocas-e-devolucoes" element={<ReturnPolicy />} />
      <Route path="/termos-e-condicoes" element={<TermsConditions />} />
      <Route path="/politica-de-privacidade" element={<Privacy />} />
      
      {/* Rota 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </QueryClientProvider>
);

export default App;
