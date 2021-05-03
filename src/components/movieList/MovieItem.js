import React from 'react';
import './MovieItem.css';

const MovieItem = (props) => {
	return (
		<>
			<li>
				{props.title}, {props.year}
				<button disabled={props.disabled} onClick={props.handleNomination}>
					Nominate
				</button>
			</li>
		</>
	);
};

export default MovieItem;
