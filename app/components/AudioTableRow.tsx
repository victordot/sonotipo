// AudioTableRow.tsx
"use client";  // Esto convierte este archivo en un componente de cliente

import { FC, useState } from "react";

interface AudioTableRowProps {
  audioName: string;
  description: string;
  habitat: string;
  tipo: string;
  audioSrc: string;
}

const AudioTableRow: FC<AudioTableRowProps> = ({ audioName, description, habitat, tipo, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(audioSrc));

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
      <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-white">{audioName}</td>
      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{description}</td>
      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{habitat}</td>
      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{tipo}</td>
      <td className="px-6 py-4 text-sm">
        <button
          onClick={togglePlay}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-all"
        >
          {isPlaying ? "Pausar" : "Reproducir"}
        </button>
      </td>
    </tr>
  );
};

export default AudioTableRow;

