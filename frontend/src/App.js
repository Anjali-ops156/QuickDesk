import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import AgentPanel from './pages/AgentPanel';
import AdminPanel from './pages/AdminPanel';
import TicketDetail from './pages/TicketDetail';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agent" element={<AgentPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/ticket/:id" element={<TicketDetail />} />
      </Routes>
    </Router>
  </AuthProvider>
);
export default App;