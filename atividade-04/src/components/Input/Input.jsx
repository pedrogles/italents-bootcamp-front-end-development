import { forwardRef } from 'react';

import './input.css';

export const Input = forwardRef(({ id, ...rest }, ref) => {
    return (
        <div className="input-container">
            <label className="input-label" htmlFor={id}>{rest.label}</label>
            <input 
                className="input"
                id={id} 
                type={rest.type} 
                placeholder={rest.placeholder} 
                ref={ref} 
                onChange={rest.onChange}
            />
        </div>
    );
});