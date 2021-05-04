import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/UseDebounce';

import SearchInput from '../search/SearchInput';
import MovieItem from '../movieList/MovieItem';
import MovieList from '../movieList/MovieList';
import NominationList from '../nominations/NominationList';
import NominationItem from '../nominations/NominationItem';
import Modal from '../ui/Modal';

import './AppController.css';

const AppController = () => {
	const [isSearching, setIsSearching] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [nominations, setNominations] = useState([]);
	const [nominationFinal, setNominationFinal] = useState(false);

	const debouncedSearchQuery = useDebounce(searchQuery, 500);

	useEffect(() => {
		setIsSearching(true);
		//Cancel if there's no input
		if (!searchQuery) {
			return;
		}

		if (debouncedSearchQuery) {
			fetchData(debouncedSearchQuery).then((data) => {
				setSearchResults(data);
				setIsSearching(false);
			});
		} else {
			setSearchResults([]);
		}
	}, [debouncedSearchQuery, searchQuery]);

	//Clean up localStorage logic
	useEffect(() => {
		const savedNominations = JSON.parse(localStorage.getItem('nominations'));

		if (savedNominations) {
			setNominations(savedNominations);
		}
	}, []);

	// When it reaches 5 nominations show banner
	useEffect(() => {
		localStorage.setItem('nominations', JSON.stringify(nominations));
		//TODO: Implement modal instead of alert and don't show more results?
		if (nominations.length >= 5) {
			setNominationFinal(true);
		} else {
			setNominationFinal(false);
		}
	}, [nominations]);

	const fetchData = (query) => {
		const apiKey = 'bcba87b7';
		const url = `https://www.omdbapi.com/?s=${query}&type=movie&apikey=${apiKey}`;
		return fetch(url)
			.then((response) => response.json())
			.then((data) => data.Search)
			.catch((error) => {
				console.error(error);
				return [];
			});
	};

	const handleSearch = (value) => {
		// If user clears searchQuery after the search results have already been populated
		if (value === '') {
			setSearchResults([]);
		}
		setSearchQuery(value);
	};

	const handleNomination = (movie) => {
		if (nominations.length >= 5) {
			return;
		} else if (!nominations.some((result) => result.imdbID === movie.imdbID)) {
			setNominations([...nominations, movie]);
			setSearchResults([]);
			setSearchQuery('');
		}
	};

	const removeNomination = (movie) => {
		if (nominations.some((result) => result.imdbID === movie.imdbID)) {
			setNominations(
				nominations.filter((result) => result.imdbID !== movie.imdbID)
			);
		}
	};

	let searchList = null;

	if (searchResults && searchResults.length > 0) {
		searchList =
			searchResults &&
			searchResults.map((movie) => {
				const isNominated = nominations.some(
					(result) => result.imdbID === movie.imdbID
				);

				return (
					<MovieItem
						key={movie.imdbID}
						title={movie.Title}
						year={movie.Year}
						disabled={isNominated}
						handleNomination={() => handleNomination(movie)}
					/>
				);
			});
	}

	let nominationList = null;

	if (nominations) {
		nominationList = nominations.map((movie) => {
			return (
				<NominationItem
					key={movie.imdbID}
					title={movie.Title}
					year={movie.Year}
					removeNomination={() => removeNomination(movie)}
				/>
			);
		});
	}

	return (
		<main className='app-controller'>
			<SearchInput searchQuery={searchQuery} handleSearch={handleSearch} />

			{!searchList && !isSearching ? (
				<h2 className='no-results'>There's no results for {searchQuery}</h2>
			) : null}
			{searchList && (
				<MovieList searchQuery={searchQuery} searchList={searchList} />
			)}

			{nominationList && <NominationList nominationList={nominationList} />}

			{nominationFinal && (
				<Modal info={'You have nominated all your movies!'} />
			)}
		</main>
	);
};

export default AppController;

//TODO add message when there's no search results
// kinda done, see if there's other way
// Style H2
//TODO Remove buttons when nomination = 5
