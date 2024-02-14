import Image from "next/image";
import { RefObject, useEffect, useState } from "react";


const Footer = ({ reff }: { reff: RefObject<HTMLDivElement> }) => {

    return (
        <footer ref={reff} className="flex flex-col mt-20">
            <div className="mx-4 xl:mx-6 2xl:mx-4">
                <div className="w-full md:w-full sm:max-xl:block hidden mb-12">
                    <Image src={"/openai-white-lockup.svg"} width={120} height={30} alt="logo" />
                </div>
                <div className="flex flex-col gap-10 justify-start items-start md:flex-row mb-36">
                    <div className="w-full md:w-full sm:max-xl:hidden">
                        <Image src={"/openai-white-lockup.svg"} width={120} height={30} alt="logo" />
                    </div>
                    <div className="flex flex-row gap-10 w-full md:justify-between"> {/* Added justify-between class */}
                        <div className="w-full">
                            <h4 className="font-bold ">Research</h4>
                            <ul>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Overview</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Index</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">GPT-4</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">DALL-E 3</li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold">API</h4>
                            <ul>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Overview</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Pricing</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Docs</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 w-full md:justify-between"> {/* Added justify-between class */}
                        <div className="w-full">
                            <h4 className="font-bold">ChatGPT</h4>
                            <ul>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Overview</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Team</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Enterprise</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Pricing</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Try ChatGPT</li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold">Company</h4>
                            <ul>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">About</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Blog</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Careers</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Charter</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Security</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Customer stories</li>
                                <li className="hover:underline underline-offset-[3px] cursor-pointer">Safety</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className=" border-t border-white w-full" />
                <div className="flex flex-row justify-between md:justify-start gap-10 w-full mt-2"> {/* Added justify-between class */}
                    <div className="w-full">
                        <h4 className="font-bold">OpenAI © 2015 – 2024</h4>
                        <ul>
                            <li className="hover:underline underline-offset-[3px] cursor-pointer">Overview</li>
                            <li className="hover:underline underline-offset-[3px] cursor-pointer">Terms & policies</li>
                            <li className="hover:underline underline-offset-[3px] cursor-pointer">Privacy policy</li>
                            <li className="hover:underline underline-offset-[3px] cursor-pointer">Brand guidelines</li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h4 className="font-bold md:hidden">Social</h4>
                        <ul className="md:flex flex-row gap-6">
                            <li className="hover:underline underline-offset-[3px] cursor-pointer">Twitter</li>
                            <li className="hover:underline underline-offset-[3px] cursor-pointer">Youtube</li>
                            <li className="hover:underline underline-offset-[3px] cursor-pointer">GitHub</li>
                            <li className="hover:underline underline-offset-[3px] cursor-pointer">SoundCloud</li>
                            <li className="hover:underline underline-offset-[3px] cursor-pointer">LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className=" mt-5 mb-16">
                    <p className="hover:underline underline-offset-[3px] cursor-pointer">Back to top</p>
                </div>
            </div>
            <div style={{ marginTop: '-23px' }} className="bg-white">
                {[...Array(24)].map((_, index) => (
                    <div key={index} className="bg-black" style={{ marginTop: `${index}px`, height: `${23 - index}px` }}></div>
                ))}
                <div className="py-7"></div>
            </div>

        </footer>


    )
}

export default Footer;