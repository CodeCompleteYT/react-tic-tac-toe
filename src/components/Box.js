import "./Box.css"

import React from 'react'

export const Box = ({value, onClick}) => {
    const style = value === "X" ? "box x" : "box o"

    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}
