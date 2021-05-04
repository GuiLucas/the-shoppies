import React from 'react';

const Button = (props) => {
	return (
		<button
			className={props.style}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default Button;
