import React, { useEffect, useState } from 'react';

//	Hooks
import useDebounce from '../hooks/UseDebounce';

//	Components
import SearchInput from '../search/SearchInput';
import MovieList from '../movieList/MovieList';
import NominationList from '../nominationList/NominationList';
import Modal from '../ui/Modal';
import Card from '../ui/Card';

//	Styling
import './AppController.css';

const AppController = () => {
	const [isSearching, setIsSearching] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [nominations, setNominations] = useState([]);
	const [nominationComplete, setNominationComplete] = useState(false);

	const debouncedSearchQuery = useDebounce(searchQuery, 500);

	useEffect(() => {
		setIsSearching(true);

		if (!searchQuery) {
			return;
		}

		if (debouncedSearchQuery) {
			fetchMovies(debouncedSearchQuery).then((data) => {
				setSearchResults(data);
				setIsSearching(false);
			});
		} else {
			setSearchResults([]);
		}
	}, [debouncedSearchQuery, searchQuery]);

	useEffect(() => {
		const savedNominations = JSON.parse(localStorage.getItem('nominations'));

		if (savedNominations) {
			setNominations(savedNominations);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('nominations', JSON.stringify(nominations));

		if (nominations.length >= 5) {
			setNominationComplete(true);
		} else {
			setNominationComplete(false);
		}
	}, [nominations]);

	/**
	 * Function to fetch movies from the OMDB API
	 * @param {String} query 			Query from search input
	 * @returns {Array of Objects} 		Movie results from the query
	 */
	const fetchMovies = (query) => {
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

	/**
	 * Function to assign the value of the input to the searchQuery state
	 * @param {String} value 	Value from input
	 */
	const handleSearch = (value) => {
		// If user clears input after search results have already been presented
		if (value === '') {
			setSearchResults([]);
		}
		setSearchQuery(value);
	};

	/**
	 * Function to add nominations
	 * @param {Object} movie 	Movie nominated
	 * @returns empty if nominations is complete
	 */
	const handleNomination = (movie) => {
		if (nominationComplete) {
			return;
		} else if (!nominations.some((result) => result.imdbID === movie.imdbID)) {
			setNominations([...nominations, movie]);
			setSearchResults([]);
			setSearchQuery('');
		}
	};

	/**
	 * Function to remove a movie from nominations
	 * @param {Object} movie	Movie to remove
	 */
	const removeNomination = (movie) => {
		if (nominations.some((result) => result.imdbID === movie.imdbID)) {
			setNominations(
				nominations.filter((result) => result.imdbID !== movie.imdbID)
			);
		}
	};

	let searchList = null;

	if (searchResults && searchResults.length > 0) {
		searchList = searchResults.map((movie) => {
			const isNominated = nominations.some(
				(result) => result.imdbID === movie.imdbID
			);

			return (
				<Card
					key={movie.imdbID}
					title={movie.Title}
					year={movie.Year}
					disabled={isNominated || nominationComplete}
					onClick={() => handleNomination(movie)}
					listType={'movie-item'}
					buttonType={'nominate'}
					buttonContent={isNominated ? 'Nominated' : 'Nominate'}
				/>
			);
		});
	}

	let nominationList = null;

	if (nominations) {
		nominationList = nominations.map((movie) => {
			return (
				<Card
					key={movie.imdbID}
					title={movie.Title}
					year={movie.Year}
					onClick={() => removeNomination(movie)}
					listType={'nomination-item'}
					buttonType={'remove'}
					buttonContent={'Remove'}
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

			{nominationComplete && (
				<Modal info={'You have nominated all your movies!'} />
			)}
		</main>
	);
};

export default AppController;
