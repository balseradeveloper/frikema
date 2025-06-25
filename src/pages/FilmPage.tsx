import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/tmdbApi';

function FilmPage() {
  /** Declaro el id de la pelicula */
  const {id} = useParams();
  /** Declaro el estado para los detalles de la película */
  const [movie, setMovie] = useState<any>(null);

  // Efecto para obtener los detalles de la película
  useEffect(() => {
    if (id) {
      fetchMovieDetails(id)
        .then(data => setMovie(data))
        .catch(error => console.error('Error al obtener los detalles de la película:', error));
    }
  }
    , [id]);

    // Si aún no se han cargado los detalles, muestro un mensaje de carga
    if (!movie) {
    return <p>Cargando detalles de la película...</p>;
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-lg">
        {/** Pongo un botón volver que me vuelva al catalogo */}
    <button
      onClick={() => window.location.href = '/'}
      className="bg-yellow-400 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-500 transition font-semibold"
    >
      Volver al catálogo
    </button>
    <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      className="mb-4 rounded shadow-lg" 
    />
    <p className="text-gray-700 mb-2"><strong>Fecha de estreno
:</strong> {movie.release_date}</p>
    <p className="text-gray-700 mb-2"><strong>Géneros   :</strong> {movie.genres.map((genre: any) => genre.name).join(', ')}</p>
    <p className="text-gray-700 mb-2"><strong>Duración:</strong> {movie.runtime} minutos</p>
    <p className="text-gray-700 mb-4"><strong>Resumen:</strong  > {movie.overview}</p>

    <h3 className="text-xl font-semibold mt-4 mb-2">Calificación</h3>
    <p className="text-gray-700 mb-4">⭐ {movie.vote_average} / 10</p>
    <h3 className="text-xl font-semibold mb-2">Sitio web oficial</h3>
    <p className="text-blue-600 hover:underline mb-4">

      <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
        {movie.homepage ? movie.homepage : 'No disponible'}
      </a>
    </p>    
    </div>
  )
}

export default FilmPage
