import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ ticket }) {
    return (
        <div className="ticket">
            {ticket.map((ticketNum, index) =>
                <TicketNum key={index} ticketNum={ticketNum} index={index} />
            )}
        </div>
    )
} 