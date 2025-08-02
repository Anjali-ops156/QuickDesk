import { useEffect, useState } from 'react';
import TicketCard from '../components/TicketCard';
import axios from 'axios';
const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/tickets')
      .then(res => setTickets(res.data));
  }, []);
  return (
    <div>
      <h2>My Tickets</h2>
      {tickets.map(ticket => <TicketCard key={ticket._id} ticket={ticket} />)}
    </div>
  );
};
export default Dashboard;