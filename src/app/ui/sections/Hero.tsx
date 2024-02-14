import Image from "next/image";
import Button from "../components/Button";

const Hero = () => {

    return (
        <section className="relative h-screen overflow-hidden">
            <video controls preload="auto" loop={true} muted={true} autoPlay={true} className="object-cover min-w-full min-h-full opacity-50">
                <source src="/gpt-4-92586ac_1080p60.mp4" type="video/mp4" />

                Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 mb-8 mx-4 w-full flex justify-center">
                <div className=" flex flex-col gap-16 xl:max-w-[1608px]">
                    <h1 className="text-4xl md:text-[55px] xl:text-[73px] leading-tight">Creating safe AGI that benefits all of humanity</h1>
                    <div className="">
                        <Button label="Learn about OpenAI" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;