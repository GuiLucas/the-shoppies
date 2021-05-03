import React from 'react';
import './MovieList.css';

const MovieList = (props) => {
	return (
		<section className='movie-list'>
			{props.searchQuery ? (
				<h2>
					Results for
					<span> {props.searchQuery}</span>
				</h2>
			) : null}
			<ul>
				{props.searchList ? (
					props.searchList
				) : (
					<li>No results for that title</li>
				)}
			</ul>
		</section>
	);
};

export default MovieList;
