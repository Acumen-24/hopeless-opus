
import React from 'react';

const Timer = ({ time }) => {
    return (
        <div className="text-2xl font-semibold mb-4">
            Time Remaining: {time}s
        </div>
    );
};

export default Timer;
