import React from 'react';

const SearchInput = (props) => {
	return (
		<div className='search-input'>
			<input
				type='text'
				placeholder='Search for a movie'
				value={props.searchQuery}
				onChange={(e) => props.handleSearch(e.target.value)}
			></input>
		</div>
	);
};

export default SearchInput;
