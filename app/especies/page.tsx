// pages/index.tsx o el archivo principal de la página
import SpeciesTable from "../components/SpeciesTable";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Guacamaya from "../../public/assets/Guacamaya.webp"

export default function Home() {
  const species = [
    {
      speciesName: "Guacamaya",
      cientificName: "Ara ararauna",
      habitat: "Selva",
      tipo: "Ave",
      imageSrc: Guacamaya,
      details: "La guacamaya es un ave grande y colorida, conocida por su vibrante plumaje y su inteligencia. Se caracteriza por su tamaño, que puede superar el metro de longitud, con una cola larga y colorida. Sus plumas presentan combinaciones de colores brillantes como rojo, azul, verde y amarillo, según la especie. Son frugívoras, alimentándose principalmente de frutas, nueces, semillas y flores.",
      audioLink: "",
    },
   
  ];

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Lista Especies</h2>
          <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Especie</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Nombre cientifico</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Habitat</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Tipo</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Detalles</th>
                </tr>
              </thead>
              <tbody>
                {species.map((speciesItem, index) => (
                  <SpeciesTable link={""} key={index} {...speciesItem} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
