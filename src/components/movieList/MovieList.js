import React from 'react';
import './MovieList.css';

const MovieList = (props) => {
	return (
		<section className='movie-list'>
			{props.searchQuery ? (
				<h2 className='results-heading'>
					Results for
					<span> {props.searchQuery}</span>
				</h2>
			) : null}
			<ul className='content'>{props.searchList}</ul>
		</section>
	);
};

export default MovieList;
