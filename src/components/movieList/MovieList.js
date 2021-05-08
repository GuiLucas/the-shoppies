import React from 'react';
import styles from './MovieList.module.css';

const MovieList = (props) => {
	return (
		<section className={styles.movieList}>
			{props.searchQuery ? (
				<h2 className={styles.resultsHeading}>
					Results for
					<span> {props.searchQuery}</span>
				</h2>
			) : null}
			<ul className={styles.content}>{props.searchList}</ul>
		</section>
	);
};

export default MovieList;
