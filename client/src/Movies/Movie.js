import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import MovieCard from './MovieCard';

export default function Movie(props) {
  const [movie, setMovie] = useState();
  const params = useParams();

  let id = params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`) // Study this endpoint with Postman
      .then(response => {
        setMovie(response.data)
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, []);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard movie={movie} params={id}/>
  );
}
