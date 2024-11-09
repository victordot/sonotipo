// pages/index.js
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Card } from "../components/Card";

// Importa las imágenes como rutas de la carpeta public
// Asegúrate de que las imágenes estén en la carpeta `public/assets`
export default function Home() {
  const resources = [
    {
      title: "Selva",
      imageSrc: "/assets/selva.jpeg", // Ruta relativa en la carpeta public
      description: "La selva colombiana es un ecosistema exuberante y diverso...",
      link: "/accesssss",
    },
    {
      title: "Paramo",
      imageSrc: "/assets/Paramo.jpg",
      description: "El páramo colombiano es un ecosistema único...",
      link: "/accesssss",
    },
    {
      title: "Desierto",
      imageSrc: "/assets/Desierto.jpg",
      description: "El desierto colombiano se caracteriza por su clima árido...",
      link: "/accesssss",
    },
    {
      title: "Bosque",
      imageSrc: "/assets/Bosque.jpeg",
      description: "El bosque colombiano es un ecosistema rico en biodiversidad...",
      link: "/accesssss",
    },
    {
      title: "Manglar",
      imageSrc: "/assets/Manglar.jpg",
      description: "El manglar colombiano es un ecosistema costero único...",
      link: "/accesssss",
    },
    {
      title: "Sabana",
      imageSrc: "/assets/Sabana.jpg",
      description: "La sabana colombiana es un ecosistema extenso y abierto...",
      link: "/accesssss",
    },
  ];

  return (
    <div className="p-4">
      <Navbar />
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
  );
}
