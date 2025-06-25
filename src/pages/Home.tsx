import { Link, useNavigate } from 'react-router-dom';
import Catalog from './Catalog';
import FeaturedMovies from './FeaturedMovies';
export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50 min-h-screen">
      

      {/** Featured Movies */}

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <FeaturedMovies />
      </section>

      {/* Call to Action */}
      <section
        className="py-10 px-4 text-center"
        style={{
          background: 'linear-gradient(135deg, #1a2238 0%, #3a506b 100%)',
          color: 'white',
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          ¿Listo para tu próxima película?
        </h2>
        <p className="mb-6 text-lg">
          Explora la cartelera, y disfruta del cine.
        </p>
      </section>

      {/* Catálogo en la home */}
      <section className="mt-12">
        <Catalog />
      </section>
    </main>
  );
}