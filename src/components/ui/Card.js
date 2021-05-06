import React from 'react';
import Button from './Button';
import './Card.css';

const Card = (props) => {
	return (
		<li className={`card ${props.listType}`}>
			<p className='card-content'>
				{props.title} <strong>{props.year}</strong>
			</p>
			<Button
				className={props.buttonType}
				disabled={props.disabled}
				onClick={props.onClick}
			>
				{props.buttonContent}
			</Button>
		</li>
	);
};

export default Card;
