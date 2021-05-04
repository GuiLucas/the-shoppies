import React from 'react';
import './MovieItem.css';
import Button from '../ui/Button';

const MovieItem = (props) => {
	return (
		<>
			<li className='movie-item'>
				<p>
					{props.title} <strong>{props.year}</strong>
				</p>
				<Button
					className='nominate'
					disabled={props.disabled}
					onClick={props.handleNomination}
				>
					{props.disabled ? 'Nominated' : 'Nominate'}
				</Button>
			</li>
		</>
	);
};

export default MovieItem;
