import Image from "next/image";
import Search from "../../public/assets/Search.svg"
import Colombia from "../../public/assets/Colombia.svg"
import UdeA from "../../public/assets/UdeA.svg"
import WWF from "../../public/assets/WWF.svg"
import Link from "next/link";

export function Hero() {
    return(
        <div className="pt-4">
            <div className="px-[20px]">
                <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[40px]">
                    Sonotipos Bioacústicos:
                </h1>

                <h2 className="text-center pt-[2px] text-[28px] leading-[40px] font-medium text-[#172026]">
                    Explora la Diversidad de Sonidos en la Naturaleza
                </h2>

                <p className="text-center pt-[22px] text-[20px] leading-[40px] font-medium text-[#36485C]">
                    Nuestra plataforma te permite descubrir y explorar sonotipos bioacústicos de diferentes
                    ecosistemas y especies colombianas. Cada sonotipo representa un conjunto único de sonidos
                    característicos de un hábitat natural. ¡Descrubre, estudia y escucha el medio ambiente y
                    sus habitantes con nosotros!
                </p>

                <h2 className="text-center pt-[2px] text-[28px] leading-[40px] font-medium text-[#172026]">
                    ¿Qué es un Sonotipo Bioacústico?
                </h2>

                <p className="text-center pt-[22px] text-[20px] leading-[40px] font-medium text-[#36485C]">
                    Un sonotipo es un patrón único de sonidos que se encuentra en un ambiente natural y
                    representa la identidad acústica de un ecosistema. Estos sonidos incluyen cantos de aves,
                    sonidos de insectos, viento y agua. Todos los cuales son cruciales para el equilibrio del
                    ecosistema.
                </p>

                <div className="flex w-full pt-8 gap-4 flex-wrap">
                    <Link href={"/ecosistemas"}>
                        <button className="bg-[#FF9913] w-full py-4 px-8 text-white rounded-[4px] text-[18px]">
                        Quiero buscar en una zona geográfica
                        </button>
                    </Link>
                    <Link href={"/especies"}>
                        <button className="w-full text-[#FF9913] text-[18px] flex items-center justify-center gap-x-4">
                        Busco una especie particular
                        <span>
                            <Image src={Search} alt="Search" width={28} height={28}/>
                        </span>
                        </button>
                    </Link>
                </div>




                <div className="flex h-full w-full justify-center pt-10">
                    <div className="flex-col items-center">
                        <Image src={Colombia} alt="Map"/>

                        <div className="flex w-full flex-col items-center">
                            <p className="pt-4 text-[28px] leading-[40px] font-medium text-[#FF9913] text-medium text-center">
                                Nuestros Aliados
                            </p>

                            <div className="grid grid-cols-2 items-center justify-center justify-items-center">
                                <Image src={UdeA} alt="UdeA" width={500} height={500}/>
                                <Image src={WWF} alt="WWF" width={500} height={500}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
