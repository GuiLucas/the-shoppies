import React from 'react';

const NominationList = (props) => {
	return (
		<section className='nomination-list'>
			<h2>Nominations List</h2>
			{props.NominationList ? (
				<ul>{props.NominationList}</ul>
			) : (
				<p>Nominate a movie</p>
			)}
		</section>
	);
};

export default NominationList;
