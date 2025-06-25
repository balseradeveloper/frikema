import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cinemas from './pages/Cinemas';
import Header from './components/Header';
import Footer from './components/Footer';
import FilmPage from './pages/FilmPage';
import FeaturedMovies from './pages/FeaturedMovies';

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cinemas" element={<Cinemas />} />
          <Route path="/film/:id" element={<FilmPage />} />
          {/* Puedes agregar más rutas aquí según sea necesario */}
          <Route path="/featured" element={<FeaturedMovies />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
