import React from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
	return (
		<section className='search'>
			<h1 className='search-heading'>Nominate your favorite movies</h1>
			<input
				className='search-input'
				type='text'
				placeholder='Search for a movie'
				value={props.searchQuery}
				onChange={(e) => props.handleSearch(e.target.value)}
			></input>
		</section>
	);
};

export default SearchInput;
