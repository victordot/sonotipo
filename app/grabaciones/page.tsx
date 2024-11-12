import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import AudioTable from "../components/AudioTable"; // Importar AudioTable

export default function Home() {
  const audioData = [
    {
      audioName: "Canto de la Urraca",
      description: "Audio de una urraca en su hábitat natural",
      habitat: "Bosques tropicales",
      tipo: "Aves",
      audioSrc: "../../assets/Audios/Urraca.mp3",
    },
    {
      audioName: "Canto de la Guacamalla",
      description: "Audio de una Guacamalla en su hábitat natural",
      habitat: "Selva",
      tipo: "Aves",
      audioSrc: "../../assets/Audios/Guacamaya.mp3",
    },
    {
      audioName: "Croar de ranita",
      description: "Audio de una Ranita Listada en su hábitat natural",
      habitat: "Selva",
      tipo: "Aves",
      audioSrc: "../../assets/Audios/Ranita.wav",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Audios de Especies
        </h1>
        <AudioTable audioData={audioData} /> {/* Pasa los datos a AudioTable */}
      </main>
      <Footer />
    </div>
  );
}
