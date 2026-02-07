import "./TicketNum.css";

export default function TicketNum({ticketNum, index}){
    return (
        <span key={index}>{ticketNum}</span>
    )
} 