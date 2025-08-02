import { useParams } from 'react-router-dom';
const TicketDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Ticket Detail - {id}</h2>
      {/* Show full conversation thread here */}
    </div>
  );
};
export default TicketDetail;