const TicketCard = ({ ticket }) => (
  <div className="border p-3 mb-2">
    <h3>{ticket.subject}</h3>
    <p>{ticket.description}</p>
    <p>Status: {ticket.status}</p>
  </div>
);
export default TicketCard;