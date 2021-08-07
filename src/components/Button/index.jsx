import './styles.css';

export const Button = (props) => (

    <button 
    className="btn" 
    onClick={props.onClick}
    disabled={props.disabled}
    >
        {props.text}
    </button>
);