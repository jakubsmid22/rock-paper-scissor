  import { useState } from "react";
  import Button from "./Button";

  const App = () => {
    const [playerChoice, setPlayerChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
  
    const icons = {
      rock: "fa-hand-back-fist",
      paper: "fa-hand",
      scissors: "fa-scissors",
    };
  
    const determineWinner = (player, computer) => {
      if (player === computer) {
        return "draw";
      } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
      ) {
        return "player";
      } else {
        return "computer";
      }
    };
  
    const playGame = (choice) => {
      const choices = ["rock", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoice = choices[randomIndex];
  
      setPlayerChoice(choice);
      setComputerChoice(computerChoice);
  
      const winner = determineWinner(choice, computerChoice);
  
      if (winner === "player") {
        setPlayerScore(playerScore + 1);
      } else if (winner === "computer") {
        setComputerScore(computerScore + 1);
      }
    };
  
    return (
      <main className="bg-[#444444] text-white p-5 flex flex-col items-center gap-5 rounded-md">
        <h1 className="text-[#4CAF50] text-3xl font-bold">
          ROCK, PAPER, SCISSORS
        </h1>
        <div className="flex gap-2">
          <Button onClick={playGame} text={"Rock"} icon={icons.rock} />
          <Button onClick={playGame} text={"Paper"} icon={icons.paper} />
          <Button onClick={playGame} text={"Scissors"} icon={icons.scissors} />
        </div>
  
        <div className="text-center h-40 space-y-2">
          <div className="h-[50%] space-y-5">
            {playerChoice && <p>Your choice: {playerChoice.toUpperCase()}</p>}
            {computerChoice && (
              <p>Computer's choice: {computerChoice.toUpperCase()}</p>
            )}
          </div>
          <div className="h-[50%] space-y-5">
            <p>Your Score: {playerScore}</p>
            <p>Computer Score: {computerScore}</p>
          </div>
        </div>
      </main>
    );
  };

  export default App;
