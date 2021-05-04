import React from 'react';
import './NominationItem.css';
import Button from '../ui/Button';

const NominationItem = (props) => {
	return (
		<>
			<li className='nomination-item'>
				<p>
					{props.title} <strong>{props.year}</strong>
				</p>
				<Button className='remove' onClick={props.removeNomination}>
					Remove
				</Button>
			</li>
		</>
	);
};

export default NominationItem;
