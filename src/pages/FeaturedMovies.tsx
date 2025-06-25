import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/tmdbApi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function FeaturedMovies() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const destacados = [
    { title: "Lilo y Stitch", year: "2025" },
    { title: "Cómo entrenar a tu dragón", year: "2025" },
    { title: "F1 la película", year: "2025" }
  ];

  useEffect(() => {
    setLoading(true);
    Promise.all([1, 2, 3, 4, 5].map(page => fetchTrendingMovies(page)))
      .then(results => {
        const allMovies = results.flatMap(data => data.results);
        const filtered = allMovies.filter((movie: any) =>
          destacados.some(dest =>
            dest.title.toLowerCase() === movie.title.toLowerCase() &&
            movie.release_date?.startsWith(dest.year)
          )
        );
        setMovies(filtered);
      })
      .catch(() => setMovies([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        Estrenos Destacados
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {loading ? (
          <p className="col-span-full text-center">Cargando...</p>
        ) : movies.length === 0 ? (
          <p className="col-span-full text-center">No se encontraron destacados.</p>
        ) : (
          movies.map((movie: any, i: number) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col relative"
            >
              <div className="absolute top-0 left-0 bg-yellow-400 text-gray-900 font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                Estreno
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-t-lg h-56 w-full object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{movie.overview.slice(0, 100)}...</p>
                <Link
                  to={`/film/${movie.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Ver más
                </Link>

      
            </div>
            </div>
      ))
        )}
    </div>
    </section >
  );
}

export default FeaturedMovies;