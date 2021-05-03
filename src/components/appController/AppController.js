import React, { useEffect, useState } from 'react';
import useDebounce from '../util/UseDebounce';

import SearchInput from '../search/SearchInput';
import MovieItem from '../movieList/MovieItem';
import MovieList from '../movieList/MovieList';
import NominationList from '../nominations/NominationList';
import NominationItem from '../nominations/NominationItem';

const AppController = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [nominations, setNominations] = useState([]);

	const debouncedSearchQuery = useDebounce(searchQuery, 500);

	useEffect(() => {
		//Cancel if there's no input
		if (!searchQuery) {
			return;
		}

		if (debouncedSearchQuery) {
			fetchData(debouncedSearchQuery).then((data) => {
				setSearchResults(data);
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
		//TODO: Implement modal instead of alert
		if (nominations.length === 5) {
			alert('You have nominated 5 movies!');
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
		setSearchQuery(value);
	};

	const handleNomination = (movie) => {
		if (nominations.length === 5) {
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

	// if (searchResults.length > 0) {
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
	// }

	let nominationList;

	if (nominations.length !== 0) {
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
		<main>
			<SearchInput searchQuery={searchQuery} handleSearch={handleSearch} />
			<MovieList searchQuery={searchQuery} searchList={searchList} />
			<NominationList nominationList={nominationList} />
		</main>
	);
};

export default AppController;
