import React from 'react';
import daisyui from 'daisyui';

const Switch = ({ isOn, onToggle, index }) => {
    return (
        <input type="checkbox" className="toggle toggle-success mx-2" defaultUnchecked />
        // <button
        // className={`w-16 h-8 m-2 rounded-full font-bold transition ${
        //     isOn ? 'bg-green-500' : 'bg-red-500'
        // } text-white`}
        // onClick={() => onToggle(index)}
        // >
        // {isOn ? 'ON' : 'OFF'}
        // </button>
    );
};

export default Switch;
    