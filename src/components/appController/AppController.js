import React, { useEffect, useState } from 'react';
import AppHeader from '../layout/AppHeader';
import MovieItem from '../movieList/MovieItem';
import MovieList from '../movieList/MovieList';
import NominationList from '../nominations/NominationList';
import SearchInput from '../search/SearchInput';
import useDebounce from '../util/UseDebounce';

const AppController = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [nominations, setNominations] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const [nominationsCount, setNominationsCount] = useState(0);

	const debouncedSearchQuery = useDebounce(searchQuery, 500);

	useEffect(() => {
		if (debouncedSearchQuery) {
			setIsSearching(true);

			fetchData(debouncedSearchQuery).then((data) => {
				setSearchResults(data);
				setIsSearching(false);
			});
		} else {
			setSearchResults([]);
		}
	}, [debouncedSearchQuery]);

	useEffect(() => {
		if (nominationsCount === 5) {
			alert('You have nominated 5 movies!');
		}
	}, [nominationsCount]);

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
			return; // Render Banner
		} else if (!nominations.some((result) => result.imdbID === movie.imdbID)) {
			setNominations([...nominations, movie]);
			setNominationsCount(nominationsCount + 1);
		}
	};

	const removeNomination = (movie) => {
		console.log(movie);
		if (nominations.some((result) => result.imdbID === movie.imdbID)) {
			setNominations(
				nominations.filter((result) => result.imdbID !== movie.imdbID)
			);
			setNominationsCount(nominationsCount - 1);
		}
	};

	const searchList =
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
	return (
		<main>
			<SearchInput searchQuery={searchQuery} handleSearch={handleSearch} />
			<MovieList searchQuery={searchQuery} searchList={searchList} />
			<NominationList
				nominations={nominations}
				removeNomination={removeNomination}
			/>
		</main>
	);
};

export default AppController;
