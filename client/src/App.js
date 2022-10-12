import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import axios from 'axios';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          console.log(response.data);
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Switch>
        <Route exact path="/">
          <MovieList movies={movieList} />
        </Route>
        <Route path="/movies/:id">
          <Movie />
        </Route>

      </Switch>
      
      {/* <Link to="/movies/:id"></Link> */}
      
    </div>
  );
}
