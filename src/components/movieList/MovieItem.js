import React from 'react';

const MovieItem = (props) => {
	return (
		<>
			<li>
				{props.title}, {props.year}
				<button disabled={props.disabled} onClick={props.handleNomination}>
					{props.disabled ? 'Already Nominated' : 'Nominate'}
				</button>
			</li>
		</>
	);
};

export default MovieItem;
