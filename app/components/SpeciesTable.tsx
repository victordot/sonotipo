"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

// Define una interfaz para las props
interface SpeciesTableProps {
  speciesName: string;
  cientificName: string;
  habitat: string;
  tipo: string;
  imageSrc: StaticImageData;
  link: string;
  details: string; // Información adicional
   // Enlace a los audios de la especie
}

export const SpeciesTable: FC<SpeciesTableProps> = ({
  speciesName,
  cientificName,
  habitat,
  tipo,
  imageSrc,
  details,
  
}) => {
  const [showDetails, setShowDetails] = useState(false); // Estado para mostrar detalles
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para mostrar el modal

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
        <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-white flex items-center gap-3">
          <Image
            src={imageSrc}
            alt={speciesName}
            width={50}
            height={50}
            className="rounded-full cursor-pointer"
            onClick={openModal} // Abre el modal al hacer clic en la imagen
          />
          {speciesName}
        </td>
        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{cientificName}</td>
        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{habitat}</td>
        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{tipo}</td>
        <td className="px-6 py-4 text-sm">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-all"
          >
            {showDetails ? "Ocultar detalles" : "Ver detalles"}
          </button>
        </td>
      </tr>

      {/* Sección con detalles */}
      {showDetails && (
        <tr>
          <td colSpan={5} className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mt-2">
              <p><strong>Detalles:</strong> {details}</p>
              <div className="mt-4">
                <Link href={"/grabaciones"}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                    Sonotipo
                  </button>
                </Link>
              </div>
            </div>
          </td>
        </tr>
      )}

      {/* Modal para ampliar la imagen */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={closeModal} // Cierra el modal al hacer clic fuera de la imagen
        >
          <div className="bg-white p-4 rounded-lg">
            <Image
              src={imageSrc}
              alt={speciesName}
              width={500}
              height={500}
              className="rounded-lg"
            />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SpeciesTable;


