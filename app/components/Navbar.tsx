import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/Logo.svg"
import Profile from "../../public/assets/Profile.svg"
import Menu from "../../public/assets/Menu.svg"

export function Navbar() {
    return(
        <nav>
            <div className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
                <div className="flex items-center">
                    <Link href={"/"}><Image src={Logo} alt="Logo" width={35} height={35}/></Link>

                    <div className="hidden lg:flex pl-[74px] gap-x-[56]">
                        <Link href={"/ecosistemas"} className="text-[#36485C] font-medium">Ecosistemas</Link>
                        <Link href={"/especies"} className="text-[#36485C] font-medium">Especies</Link>
                        <Link href={"/grabaciones"} className="text-[#36485C] font-medium">Grabaciones</Link>
                    </div>
                </div>

                <div className="flex gap-x-5">
                    <p className="hidden font-medium text-[#36485C] lg:block pr-[56px]">Registrarse</p>
                    <div className="flex items-center gap-x-2">
                        <Image src={Profile} alt="Profile" width={24} height={24}/>
                        <span className="hidden font-medium text-[#36485C] lg:block">Login</span>
                    </div>
                <Image src={Menu} alt="Menu" width={32} height={32} className="lg:hidden"/>
                </div>
            </div>
        </nav>
    );
}