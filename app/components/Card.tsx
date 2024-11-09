// components/Card.tsx
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";


// Define una interfaz para las props
interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  link: string;
}

// El tipo `CardProps` se utiliza en las props del componente
export const Card: FC<CardProps> = ({ title, imageSrc, description, link }) => {
  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg justify-center">
      <Image
        className="w-full"
        src={imageSrc}
        alt={title}
        width={400}
        height={250}
        //placeholder="blur"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href={link}>
          <span className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Acceder
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
