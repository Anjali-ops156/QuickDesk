import { Link } from 'react-router-dom';
const Navbar = () => (
  <nav>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/agent">Agent Panel</Link>
    <Link to="/admin">Admin Panel</Link>
  </nav>
);
export default Navbar;
