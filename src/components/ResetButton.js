import React from 'react';

import "./ResetButton.css";

export const ResetButton = ({ resetBoard }) => {
    return (
        <button className="reset-btn" onClick={resetBoard}>Reset</button>
    )
}
