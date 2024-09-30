import './button.css';

export const Button = ({ children, ...rest }) => {
    return (
        <button 
            className='button' 
            onClick={rest.onClick} 
            type={rest.type}>
                {children}
        </button>
    );
};