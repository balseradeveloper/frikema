import { useEffect, useState } from 'react';
import { fetchTrendingMovies, fetchGenres, fetchMoviesByGenre } from '../services/tmdbApi';
import { Link } from 'react-router-dom';

export default function Catalog() {
  const [movies, setMovies] = useState<any[]>([]);
  const [genres, setGenres] = useState<any[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchGenres().then(data => setGenres(data.genres));
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetch = selectedGenre
      ? fetchMoviesByGenre(selectedGenre, page)
      : fetchTrendingMovies(page);
    fetch
      .then(data => {
        setMovies(data.results);
        setTotalPages(Math.min(data.total_pages, 500)); // TMDB limita a 500 páginas
      })
      .catch(() => setMovies([]))
      .finally(() => setLoading(false));
  }, [selectedGenre, page]);

  return (
    <div>
      <h2 id="catalogo" className="text-2xl mb-4 text-center" style={{ color: '#1a2238' }}>
        Catálogo de películas 🎞️
      </h2>
      {/* Submenú de géneros */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <button
          className={`px-3 py-1 rounded ${selectedGenre === null ? 'bg-yellow-300 text-gray-800' : 'bg-white text-black'}`}
          onClick={() => { setSelectedGenre(null); setPage(1); }}
        >
          Todos
        </button>
        {genres.map((genre: any) => (
          <button
            key={genre.id}
            className={`px-3 py-1 rounded ${selectedGenre === genre.id ? 'bg-yellow-300 text-gray-800' : 'bg-white text-black'}`}
            onClick={() => { setSelectedGenre(genre.id); setPage(1); }}
          >
            {genre.name}
          </button>
        ))}
      </div>
      {/* Grid de películas */}
      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie: any) => (
            <div key={movie.id} className="bg-white rounded shadow p-2 flex flex-col items-center">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="mb-2 rounded"
              />
              <h3 className="text-lg font-semibold text-center">{movie.title}</h3>
              <p className="text-xs text-gray-600 text-center mb-2">{movie.release_date}</p>
              <Link
                to={`/film/${movie.id}`}
                className="text-blue-600 hover:underline text-sm"
              >
                Ver más
              </Link>
            </div>
          ))}
        </div>
      )}
      {/* Paginación */}
      <div className="flex justify-center mt-8 gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="px-4 py-1">{page} / {totalPages}</span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}