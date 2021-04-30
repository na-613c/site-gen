import React from 'react';
import './LeftArrow.css';

const LeftArrow = () => {
    return (
        <div className="arrow-left">
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default React.memo(LeftArrow);