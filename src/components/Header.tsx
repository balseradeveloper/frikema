import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow">
     {/* Hero Section */}
      <section
        className="relative py-16 px-4 flex flex-col items-center justify-center text-center"
        style={{
          background: 'linear-gradient(135deg, #1a2238 0%, #3a506b 100%)',
          color: 'white',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none rounded-lg" />
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="/FrikemaLogo.png"
            alt="Frikema Logo"
            className="h-24 w-auto mb-4 mx-auto"
            style={{ objectFit: 'contain', filter: 'drop-shadow(0 2px 8px #0008)' }}
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            ¡Bienvenido a Frikema!
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
            Tu portal para descubrir los mejores estrenos, horarios y cines cerca de ti. Vive la experiencia del cine como nunca antes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
          const section = document.getElementById('catalogo');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          } else {
            navigate('/');
          }
              }}
              className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded shadow hover:bg-yellow-300 transition"
            >
              Ver Cartelera
            </button>
            <Link
              to="/cinemas"
              className="bg-white bg-opacity-20 border border-white text-white font-semibold px-8 py-3 rounded shadow hover:bg-opacity-40 transition"
              style={{ backdropFilter: 'blur(2px)' }}
            >
              Buscar Cines
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
}