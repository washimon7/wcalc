import React from 'react';
import { solveOperation } from '../helpers';

const Symbol = ({ val, setOperation }) => {
    
    function write() {
        setOperation(data => data + val);
    }
    
    return (
        <div
            onClick={write}
            className="btn"
        >
            <span>{val}</span>
        </div>
    );
}

export default Symbol;