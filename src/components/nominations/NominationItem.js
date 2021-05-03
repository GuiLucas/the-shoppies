import React from 'react';
import './NominationItem.css';

const NominationItem = (props) => {
	return (
		<>
			<li>
				{props.title}, {props.year}
				<button className='remove-button' onClick={props.removeNomination}>
					X
				</button>
			</li>
		</>
	);
};

export default NominationItem;
