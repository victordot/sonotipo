"use client"
import Image from "next/image";
import Link from "next/link";
import X from "../../public/assets/X.svg"
import Logo from "../../public/assets/Logo.svg"
import Profile from "../../public/assets/Profile.svg"
import Menu from "../../public/assets/Menu.svg"
import React, {useEffect, useState} from "react";

export function Navbar() {
        const [header, setHeader] = useState(false)

        const scrollHeader = () => {
            if(window.scrollY > 20) {
                setHeader(true)
            }
            else {
                setHeader(false)
            }
        }

        useEffect(() => {
            window.addEventListener("scroll", scrollHeader)

            return () => {
                window.addEventListener("scroll", scrollHeader) 
            }
        },[])

        const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={header ? "fixed w-[100%] bg-[white]": "bg-[transparent]"}>
            <nav className=" container flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
                <div className="flex items-center">
                    <Link href={"/"}><Image src={Logo} alt="Logo" width={35} height={35}/></Link>

                    <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                        <Link href={"/ecosistemas"} className="text-[#36485C] font-medium hover:text-[#FF9913]">Ecosistemas</Link>
                        <Link href={"/especies"} className="text-[#36485C] font-medium hover:text-[#FF9913]">Especies</Link>
                        <Link href={"/grabaciones"} className="text-[#36485C] font-medium hover:text-[#FF9913]">Grabaciones</Link>
                    </div>
                </div>

                <div className="flex gap-x-5">
                    <p className="hidden font-medium text-[#36485C] lg:block pr-[56px]">Registrarse</p>

                    <div className="flex items-center gap-x-2">
                        <Image src={Profile} alt="Profile" width={24} height={24}/>
                        <span className="hidden font-medium text-[#36485C] lg:block">Login</span>
                    </div>

                    <button onClick={() => {
                        setIsOpen(!isOpen)
                    }}>
                        <Image src={Menu} alt="Menu" width={32} height={32} className={`${isOpen ? "hidden" : "flex"} lg:hidden`}/>
                        <Image src={X} alt="X" width={24} height={24} className={`${isOpen ? "flex" : "hidden"} lg:hidden`}/>
                    </button>
                </div>
            </nav>

            <div className={`${isOpen ? "flex" : "hidden"} lg:hidden text-right flex-col flex-row bg-gray-800`}>
                <Link href={"/ecosistemas"} className="text-white font-medium hover:text-[#FF9913]">Ecosistemas</Link>
                <Link href={"/especies"} className="mt-1 text-white font-medium hover:text-[#FF9913]">Especies</Link>
                <Link href={"/grabaciones"} className="mt-1 text-white font-medium hover:text-[#FF9913]">Grabaciones</Link>

                <Link href={"/grabaciones"} className="mt-4 text-white font-medium hover:text-[#FF9913]">Registrarse</Link>
                <Link href={"/grabaciones"} className="mt-1 text-white font-medium hover:text-[#FF9913]">Login</Link>
            </div>
        </div>
    );
}
