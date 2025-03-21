
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import NotFound from './pages/NotFound';

function AdminApp() {
  return (
    <Router>
      <Routes>
        {/* Rotas administrativas */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        
        {/* Rota 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AdminApp;
