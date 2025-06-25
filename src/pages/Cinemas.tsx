

const cinemasByAndalucia = {
  Sevilla: [
    { name: "mk2 Cinesur Nervión Plaza", address: "Avenida Luis de Morales s/n, 41005 Sevilla", web: null },
    { name: "Los Arcos Multicines", address: "Centro Comercial Los Arcos, Avda. Andalucía s/n, 41006 Sevilla", web: null },
    { name: "Yelmo Cines Premium Lagoh", address: "Centro Comercial Palmas Altas, Parcela B01, 41014 Sevilla", web: null },
    { name: "Cinezona 3D", address: "Centro Comercial Zona Este, Av. Alcalde Luis Uruñuela s/n, 41020 Sevilla", web: null },
    { name: "Avenida 5 Cines", address: "Calle Marqués de Paradas, 15, 41001 Sevilla", web: null },
    { name: "Odeon Multicines Plaza de Armas", address: "Plaza de las Legións, 8, 41001 Sevilla", web: null },
    { name: "Cine Cervantes", address: "Calle Amor de Dios, 33, 41002 Sevilla", web: null }
  ],
  Málaga: [
    { name: "Cine Albéniz", address: "Calle Alcazabilla, Málaga", web: null },
    { name: "Cine Yelmo Plaza Mayor", address: "Centro Comercial Plaza Mayor, Málaga", web: null },
    { name: "Cine Yelmo Vialia Málaga", address: "Estación Vialia, Málaga", web: null },
    { name: "mk2 Cinesur Málaga Nostrum", address: "Centro Comercial Málaga Nostrum, Málaga", web: null }
  ],
  Granada: [
    { name: "Megarama Granada", address: "Centro Comercial Neptuno, C/ Arabial s/n, 18004 Granada", web: null },
    { name: "Ocine Serrallo", address: "Centro Comercial Serrallo Plaza, Granada", web: null },
    { name: "Cine Madrigal", address: "Carrera del Genil, 14, 18009 Granada", web: null },
    { name: "Teatro Isabel la Católica", address: "Acera del Casino s/n, 18009 Granada", web: null },
    { name: "Kinépolis Nevada", address: "Centro Comercial Nevada, Armilla", web: null },
    { name: "Kinépolis Granada (Pulianas)", address: "Pulianas, Granada", web: null }
  ],
  Córdoba: [
    { name: "Cines axion", address: "Centro Comercial Nuevo Arcángel, Córdoba", web: null },
    { name: "Cinesur tablero", address: "El Tablero, Córdoba", web: null },
    { name: "Cines el Guadalquivir", address: "Polígono del Guadalquivir, Córdoba", web: null }
  ],
  Cádiz: [
    { name: "Yelmo Premium Bahía Sur", address: "Cádiz", web: null },
    { name: "mk2 Cinesur Bahía de Cádiz", address: "Cádiz", web: null },
    { name: "Cine Yelmo Área Sur", address: "Jerez de la Frontera", web: null }
  ],
  Almería: [
    { name: "Kinépolis Almería Mediterráneo", address: "Centro Comercial Mediterráneo, Almería", web: null },
    { name: "Yelmo Cines Torrecárdenas", address: "Centro Comercial Torrecárdenas, Almería", web: null },
    { name: "Cine Albox", address: "Calle Rosario, 27, Albox", web: null },
    { name: "Cine Berja", address: "Calle Lope de Vega, 11, Berja", web: null }
  ],
  Huelva: [
    { name: "Artesiete Holea", address: "Centro Comercial Holea, Huelva", web: null },
    { name: "Cines Aqualón 4K", address: "Centro Comercial Aqualón, Huelva", web: null },
    { name: "Al‑Andalus Punta Umbría 3D", address: "Punta Umbría", web: null },
    { name: "Condado Cinemas 7", address: "La Palma del Condado", web: null }
  ],
  Jaén: [
    { name: "Cines Yelmo Premium", address: "Jaén", web: null }
  ]
};

export default function Cinemas() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
        style={{
          background: "linear-gradient(135deg, #1a2238 0%, #3a506b 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Cines
      </h2>
      <div className="space-y-20">
        {Object.entries(cinemasByAndalucia).map(([province, cinemas]) => (
          <div key={province}>
            <h3
              className="text-xl font-bold mb-5"
              style={{
                color: "#1a2238",
                letterSpacing: "0.02em",
              }}
            >
              {province}
            </h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {(cinemas as any[]).map((cine, i) => (
                <div
                  key={i}
                  className="rounded-xl shadow-md border border-[#1a2238]/10 bg-gradient-to-br from-[#1a2238] to-[#3a506b] p-6 flex flex-col min-h-[140px] transition-transform hover:scale-[1.02] w-full"
                  style={{ minWidth: "320px", maxWidth: "100%" }}
                >
                  <h4 className="text-lg font-semibold mb-2 text-white">{cine.name}</h4>
                  <p className="text-gray-200 mb-2">{cine.address}</p>
                  {cine.web && (
                    <a
                      href={cine.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5bc0be] font-semibold hover:underline mt-auto"
                    >
                      Web oficial
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  }