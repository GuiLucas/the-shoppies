import React from 'react';
import styles from './SearchInput.module.css';

const SearchInput = (props) => {
	return (
		<section className={styles.search}>
			<h1 className={styles.searchHeading}>Nominate your favorite movies</h1>
			<input
				className={styles.searchInput}
				type='text'
				placeholder='Search for a movie'
				value={props.searchQuery}
				onChange={(e) => props.handleSearch(e.target.value)}
			></input>
		</section>
	);
};

export default SearchInput;
