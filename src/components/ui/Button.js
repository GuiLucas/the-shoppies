import React from 'react';
import './Button.css';

const Button = (props) => {
	return (
		<button
			className={`default-button ${props.buttonType}`}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default Button;
