import './button.css';

export const Button = ({ children, ...props }) => {
    return (
        <button className='button' onClick={props.onClick} type={props.type}>{children}</button>
    )
};