import React from 'react';

const MovieList = (props) => {
	return (
		<div className='movie-list'>
			<h2>Results for "{props.searchQuery}"</h2>
			<ul>{props.searchList}</ul>
		</div>
	);
};

export default MovieList;
