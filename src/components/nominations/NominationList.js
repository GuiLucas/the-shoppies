import React from 'react';

const NominationList = (props) => {
	return (
		<div className='nomination-list'>
			<h2>Nominations List</h2>
			<ul>
				{props.nominations.map((movie) => {
					return (
						<>
							<li key={movie.imdbID}>{movie.Title}</li>
							<button onClick={() => props.removeNomination(movie)}>
								Remove
							</button>
						</>
					);
				})}
			</ul>
		</div>
	);
};

export default NominationList;
