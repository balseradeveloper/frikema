// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      © {new Date().getFullYear()} Frikema. Todos los derechos reservados.
    </footer>
  );
}
