import React from 'react';
import './NominationList.css';

const NominationList = (props) => {
	return (
		<section className='nomination-list'>
			<h2 className='nominations-h2'>Nominations</h2>
			{props.nominationList.length === 0 ? (
				<h3 className='nominations-h3'>You don't have nominations, yet.</h3>
			) : (
				<ul className='nominations-content'>{props.nominationList}</ul>
			)}
		</section>
	);
};
//TODO add connditional statement when nomination List is empty send message
export default NominationList;
