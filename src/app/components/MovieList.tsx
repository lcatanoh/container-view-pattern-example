// MovieList.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }: MovieListProps) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movie/${movie.id}`}>
            <span>
              <Image 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                width={500}
                height={300}
                unoptimized
              />
              <p>{movie.title}</p>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
