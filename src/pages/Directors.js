import React from 'react';
import NavBar from '../components/NavBar';

const directors = [
  { name: 'Director 1', movies: ['Movie A', 'Movie B'] },
  { name: 'Director 2', movies: ['Movie C', 'Movie D'] },
  // Add more directors as needed
];

function Directors() {
  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;
