import './checkboxinput.css';

export const CheckBoxInput = ({ checked, onChange }) => {
    return (
        <div className="input-container-checkbox">
            <input 
                className="checkbox"
                checked={checked}
                type="checkbox"
                onChange={onChange}
            />
        </div>
    );
};