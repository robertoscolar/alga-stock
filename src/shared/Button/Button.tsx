import React from "react";
import './Button.css'

declare interface ButtonProps {
    content?: string;
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button 
    className="AppButton"
    onClick={props.onClick}>
        {props.children || 'Nameless Button'}
    </button>
}

export default Button;