import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./Helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n=3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));

    let isWinning = winCondition(ticket);
    let buyNewTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyNewTicket}>Buy new ticket</button>
            <br></br>
            <h3>{isWinning && "Congratulations, You won!"}</h3>
        </div>
    )
}