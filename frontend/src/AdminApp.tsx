
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Category from './pages/Category';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import TermsConditions from './pages/TermsConditions';
import ReturnPolicy from './pages/ReturnPolicy';
import Privacy from './pages/Privacy';
import Wishlist from './pages/Wishlist';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/colecao/:slug" element={<Collection />} />
        <Route path="/categoria/:slug" element={<Category />} />
        <Route path="/produto/:slug" element={<Product />} />
        <Route path="/termos-e-condicoes" element={<TermsConditions />} />
        <Route path="/politica-de-devolucao" element={<ReturnPolicy />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/lista-de-desejos" element={<Wishlist />} />
        
        {/* Rotas administrativas */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
