import React, {useState} from "react";

import {Board} from "./components/Board"
import {ScoreBoard} from "./components/ScoreBoard"
import './App.css';

const App = () => {

  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [xPlaying, setXPlaying] = useState(true);
  const [history, setHistory] = useState(Array(9).fill(null))
  const [wins, setWins] = useState({xWins : 0, oWins : 0})
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxIdx) => {
    const updatedHistory = history.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    })

    setHistory(updatedHistory);
    
    const winner = checkWinner(updatedHistory);

    if (winner) {
      if(winner === "O") {
        let {oWins} = wins;
        oWins += 1;
        setWins({...wins, oWins})
      } else {
        let {xWins} = wins;
        xWins += 1;
        setWins({...wins, xWins})
      }
    }

    setXPlaying(!xPlaying);
  }

  const checkWinner = (history) => {
    for(let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if(history[x] && history[x] === history[y] && history[y] === history[z]) {
        setGameOver(true);
        return history[x];
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setHistory(Array(9).fill(null));
  }

  return (
    <div className="App">
      <ScoreBoard scores={wins} xPlaying={xPlaying}/>
      <Board board={history} handleBoxClick={gameOver ? resetBoard : handleBoxClick}/>
      <button className="reset-btn" onClick={resetBoard}>Reset</button>
    </div>
  );
}

export default App;
