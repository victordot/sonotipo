// AudioTable.tsx
import { FC } from "react";
import AudioTableRow from "./AudioTableRow"; // Importamos el AudioTableRow que ahora es un componente de cliente

interface AudioTableProps {
  audioData: { audioName: string; description: string; habitat: string; tipo: string; audioSrc: string }[];
}

const AudioTable: FC<AudioTableProps> = ({ audioData }) => {
  return (
    <table className="min-w-full bg-white dark:bg-gray-800">
      <thead>
        <tr>
          <th className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Nombre</th>
          <th className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Descripción</th>
          <th className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Hábitat</th>
          <th className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Tipo</th>
          <th className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Acción</th>
        </tr>
      </thead>
      <tbody>
        {audioData.map((audio, index) => (
          <AudioTableRow
            key={index}
            audioName={audio.audioName}
            description={audio.description}
            habitat={audio.habitat}
            tipo={audio.tipo}
            audioSrc={audio.audioSrc}
          />
        ))}
      </tbody>
    </table>
  );
};

export default AudioTable;
