import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({scores, xPlaying}) => {
    const {xWins, oWins} = scores;
    
  return (
    <div className="scoreboard">
        <span className={`score x-score ${!xPlaying && "inactive"}`}>X: {xWins}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>O: {oWins}</span>
    </div>
  )
}
