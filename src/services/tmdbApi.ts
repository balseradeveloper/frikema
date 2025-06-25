const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies(page = 1) {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=es-ES&page=${page}`);
  if (!res.ok) throw new Error('Error al obtener películas');
  return res.json();
}
export async function fetchGenres() {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=es-ES`);
  if (!res.ok) throw new Error('Error al obtener géneros');
  return res.json();
}

export async function fetchMoviesByGenre(genreId: number, page = 1) {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=${genreId}&language=es-ES&page=${page}`);
  if (!res.ok) throw new Error('Error al obtener películas por género');
  return res.json();
}

export async function fetchMovieDetails(movieId: string) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=es-ES`);
  if (!res.ok) throw new Error('Error al obtener detalles de la película');
  return res.json();
}