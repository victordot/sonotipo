// pages/index.tsx o el archivo principal de la página
import SpeciesTable from "../components/SpeciesTable";
import { Navbar } from "../components/Navbar";
import Guacamaya from "../../public/assets/Guacamaya.webp"
import Urraca from "../../public/assets/Urraca.jpeg";
import Ranita from "../../public/assets/Ranita.jpg";

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
    {
      speciesName: "Urraca verde",
      cientificName: "Cyanocorax yncas",
      habitat: "Bosque",
      tipo: "Ave",
      imageSrc: Urraca,
      details: "La urraca verde (Cyanocorax yncas) es una especie de ave paseriforme de la familia Corvidae. Su plumaje es predominantemente verde, con la cabeza negra y un notable anillo ocular de color azul brillante. También presenta un pecho blanco y una cola larga, lo que le da un aspecto elegante y distintivo. Habitando principalmente en bosques tropicales y subtropicales. Se alimenta de frutas, insectos y pequeños animales, y es conocida por ser una ave social e inteligente que se desplaza en grupos ruidosos.",
      audioLink: "",
    },
    {
      speciesName: "Ranita listada",
      cientificName: "Scinax ruber",
      habitat: "Selva",
      tipo: "Ave",
      imageSrc: Ranita,
      details: "Es una rana pequeña de la familia Hylidae. Su coloración varía entre tonos de marrón, gris y a veces rojizo, con manchas oscuras o patrones irregulares en su cuerpo. Es una especie arbórea que suele habitar cerca de cuerpos de agua, como charcas y arroyos, donde se reproduce durante la temporada de lluvias. Scinax ruber es nocturna y se alimenta de pequeños insectos. Además, es conocida por sus llamados distintivos, que suelen escucharse al anochecer.",
      audioLink: "",
    },
   
  ];

  return (
    <div className="p-4">
      <Navbar />
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
  );
}
