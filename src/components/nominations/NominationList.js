import React from 'react';
import './NominationList.css';

const NominationList = (props) => {
	return (
		<section className='nomination-list'>
			<h2>Nominations</h2>
			<ul>{props.nominationList}</ul>
		</section>
	);
};
//TODO add connditional statement when nomination List is empty send message
export default NominationList;
