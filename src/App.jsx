import './App.css'
import Lottery from "./Lottery.jsx";
import {sum} from "./Helper.js";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15; //when sum equals to 15
    // return ticket.every((num) => num === ticket[0]); //when all numbers same
    // return ticket[0] === 0; //when first numbers is '0'
  }

  return (
    <>
      <Lottery n={3} winCondition = {winCondition}/>
    </>
  )
}

export default App
