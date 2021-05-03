import React from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
	return (
		<section className='search-input'>
			<h1>Nominate your favorite movies</h1>
			<input
				type='text'
				placeholder='Search for a movie'
				value={props.searchQuery}
				onChange={(e) => props.handleSearch(e.target.value)}
			></input>
		</section>
	);
};

export default SearchInput;
