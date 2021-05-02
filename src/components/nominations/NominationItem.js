import React from 'react';

const NominationItem = (props) => {
	return (
		<>
			<li>
				{props.title}, {props.year}
				<button onClick={props.removeNomination}>Remove</button>
			</li>
		</>
	);
};

export default NominationItem;
