// pages/index.js
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import Selva from "../../public/assets/selva.jpeg"
import Paramo from "../../public/assets/Paramo.jpg"
import Desierto from "../../public/assets/Desierto.jpg"
import Bosque from "../../public/assets/Bosque.jpeg"
import Manglar from "../../public/assets/Manglar.jpg"
import Sabana from "../../public/assets/Sabana.jpg"
import { Footer } from "../components/Footer";

// Importa las imágenes como rutas de la carpeta public
// Asegúrate de que las imágenes estén en la carpeta `public/assets`
export default function Home() {
  const resources = [
    {
      title: "Selva",
      imageSrc: Selva,
      description: "La selva colombiana es un ecosistema exuberante y diverso, caracterizado por una rica vegetación tropical y una fauna única. Ubicada principalmente en las regiones amazónica, chocoana y pacífica, estas selvas son hogar de una amplia variedad de especies de plantas, animales e insectos. El clima cálido y húmedo, junto con la abundante precipitación, favorece el crecimiento de bosques densos y la proliferación de vida silvestre.",
      link: "/selva",
    },
    {
      title: "Paramo",
      imageSrc: Paramo,
      description: "El páramo colombiano es un ecosistema único que se encuentra a gran altura, entre los 3,000 y 4,000 metros sobre el nivel del mar, y es conocido por su clima frío y su vegetación especializada. Este ecosistema está presente en varias zonas montañosas de los Andes colombianos y es hogar de una flora adaptada a las bajas temperaturas y la escasez de oxígeno, como las frailejones, plantas de hojas gruesas que almacenan agua.",
      link: "/paramo",
    },
    {
      title: "Desierto",
      imageSrc: Desierto,
      description: "El desierto colombiano, se caracteriza por su clima árido y escasas precipitaciones. A pesar de la aridez, el desierto alberga una variedad de flora y fauna adaptada a su entorno. Entre las especies de plantas predominan los cactus, arbustos espinosos y plantas xerófitas que tienen la capacidad de retener agua en su interior para sobrevivir a las altas temperaturas. En cuanto a la fauna, destaca la presencia de reptiles, insectos, aves como halcones y búhos, y mamíferos pequeños, como zorros y conejos.",
      link: "/desierto",
    },
    {
      title: "Bosque",
      imageSrc: Bosque,
      description: "El bosque colombiano es un ecosistema rico en biodiversidad que abarca diferentes tipos de vegetación, desde bosques húmedos tropicales hasta bosques andinos y secos. Estos bosques son el hogar de una gran variedad de flora y fauna, incluyendo especies endémicas y en peligro de extinción. En el bosque tropical, la densa vegetación se entrelaza para formar un hábitat ideal para aves, mamíferos, reptiles e insectos. Los bosques andinos, situados en las montañas, presentan una vegetación adaptada a las alturas y climas frescos.",
      link: "/bosque",
    },
    {
      title: "Manglar",
      imageSrc: Manglar,
      description: "El manglar colombiano es un ecosistema costero único que se encuentra en zonas tropicales, especialmente en las costas del Caribe y el Pacífico. Este ecosistema está caracterizado por la presencia de árboles de raíces aéreas, los cuales crecen en aguas salobres y cumplen un rol fundamental en la protección de las costas frente a la erosión y las tormentas. Los manglares son refugio de numerosas especies marinas y terrestres, incluyendo peces, crustáceos y aves migratorias.",
      link: "/manglar",
    },
    {
      title: "Sabana",
      imageSrc: Sabana,
      description: "La sabana colombiana es un ecosistema extenso y abierto, ubicado principalmente en la región de los Llanos Orientales, al este del país. Este paisaje se caracteriza por vastas praderas y llanuras, con vegetación herbácea y arbustos dispersos, aunque también alberga bosques de galería a lo largo de los ríos. El clima en la sabana es cálido y tiene dos estaciones bien marcadas: una temporada de lluvias y otra de sequía. La fauna de la sabana es diversa, incluyendo especies emblemáticas como el chigüiro (capibara), el venado, y el jaguar, así como numerosas aves, reptiles y anfibios. ",
      link: "/sabana",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Header /> {/* Aquí insertamos el Header */}
        <div className="max-w-5xl mx-auto mt-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {resources.map((resource, index) => (
            <Card
              key={index}
              title={resource.title}
              imageSrc={resource.imageSrc}  // Usamos la ruta de la imagen
              description={resource.description}
              link={resource.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
