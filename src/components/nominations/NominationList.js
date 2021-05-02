import React from 'react';

const NominationList = (props) => {
	return (
		<div className='nomination-list'>
			<h2>Nominations List</h2>
			<ul>{props.nominationList}</ul>
		</div>
	);
};

export default NominationList;
