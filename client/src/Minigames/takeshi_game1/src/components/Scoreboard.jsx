// src/components/Scoreboard.jsx
import React from 'react';

const Scoreboard = ({ score, currentRound }) => {
    return (
    <div className="flex justify-between mb-4 text-xl font-semibold">
        <div>Score: {score}</div>
        <div>Round: {currentRound}</div>
    </div>
    );
};

export default Scoreboard;
