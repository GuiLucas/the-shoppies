import React from 'react';

const MovieList = (props) => {
	return (
		<section className='movie-list'>
			{props.searchQuery ? (
				<h2>
					Results for:
					<span>"{props.searchQuery}"</span>
				</h2>
			) : null}
			<ul>{props.searchList}</ul>
		</section>
	);
};

export default MovieList;
