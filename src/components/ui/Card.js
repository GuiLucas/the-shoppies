import React from 'react';
import Button from './Button';
import styles from './Card.module.css';

const Card = (props) => {
	return (
		<li className={styles[props.listType]}>
			<p className={styles.cardContent}>
				{props.title} <strong>{props.year}</strong>
			</p>
			<Button
				buttonType={props.buttonType}
				disabled={props.disabled}
				onClick={props.onClick}
			>
				{props.buttonContent}
			</Button>
		</li>
	);
};

export default Card;
