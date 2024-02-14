'use client'
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";
import Button from "../components/Button";


const NavBar = ({ reff }: { reff: RefObject<HTMLDivElement> }) => {
    const [scrolled, setScrolled] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    useEffect(() => {



        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);

            if (!navbarRef.current || !reff.current) return;




        };




        window.addEventListener("scroll", handleScroll);

        // Clean up event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav ref={navbarRef} className={`w-full fixed top-0 left-0 right-0 z-10 transition duration-300 ease-in-out ${scrolled ? 'bg-black' : ''}`}>
            <div className=" gap-36 flex flex-row justify-between items-center px-4 py-4 md:py-6 xl:px-6 2xl:py-5 2xl:px-0 2xl:max-w-[1608px] mx-auto">
                <div className="w-36 h-9 flex justify-center flex-none">
                    <Image src={"/openai-white-lockup.svg"} width={120} height={30} alt="logo" className="" />
                </div>
                <p className="hover:underline underline-offset-[3px] cursor-pointer xl:hidden">
                    Menu
                </p>
                <div className="xl:flex flex-row justify-between w-full hidden">
                    <ul className="flex flex-row gap-8 items-center">
                        <li className="text-lg font-semibold hover:underline underline-offset-[3px] cursor-pointer">Research</li>
                        <li className="text-lg font-semibold hover:underline underline-offset-[3px] cursor-pointer">API</li>
                        <li className="text-lg font-semibold hover:underline underline-offset-[3px] cursor-pointer">ChatGPT</li>
                        <li className="text-lg font-semibold hover:underline underline-offset-[3px] cursor-pointer">Safety</li>
                        <li className="text-lg font-semibold hover:underline underline-offset-[3px] cursor-pointer">Company</li>
                    </ul>
                    <ul className="flex flex-row gap-8 items-center">
                        <li className="text-lg font-semibold hover:underline underline-offset-[3px] cursor-pointer">Search</li>
                        <li className="text-lg font-semibold hover:underline underline-offset-[3px] cursor-pointer">Log in</li>
                        <li className="text-lg font-semibold hover:underline underline-offset-[3px] cursor-pointer"><Button label={"Try ChatGPT"} /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;