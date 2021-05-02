import React from 'react';

const MovieItem = (props) => {
	return (
		<div>
			<li>
				{props.title}, {props.year}
			</li>
			<button disabled={props.disabled} onClick={props.handleNomination}>
				{props.disabled ? 'Already Nominated' : 'Nominate'}
			</button>
		</div>
	);
};

export default MovieItem;
