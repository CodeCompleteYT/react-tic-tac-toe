import React from 'react'

import {Box} from "./Box"
import "./Board.css"

export const Board = ({board, handleBoxClick}) => {
  return (
    <div className="board">
        {
            board.map((boxValue, idx) => {
                return <Box value={boxValue} onClick={() => boxValue === null && handleBoxClick(idx)}/>
            })
        }
    </div>
  )
}
