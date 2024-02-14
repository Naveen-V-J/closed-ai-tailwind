import Image from "next/image";
import UpdateItem from "../components/UpdateItem";


const Research = () => {
    return (
        <section className="flex flex-col mx-4 xl:mx-6 2xl:mx-4 mb-9 sm:mt-2 gap-20">
            <div className="gap-3 flex flex-col sm:flex-row">
                <h2 className="text-2xl sm:text-4xl leading-loose sm:basis-1/2">Research</h2>

                <div className="sm:basis-1/2">
                    <p className="text-xl">We research generative models and how to align them with human values.</p>
                    <p className="underline underline-offset-[3px] hover:no-underline leading-loose cursor-pointer mt-2">Learn about our research</p>

                </div>
            </div>
            <div className="flex sm:flex-wrap max-sm:flex-col gap-4 xl:gap-6 w-full gap-y-8" >
                <UpdateItem label={"Building an early warning system for LLM-aided biological threat creation"} date={"Jan 31, 2024"} imageUrl={"/research-1.avif"} />
                <UpdateItem label={"Weak-to-strong generalization"} date={"Dec 14, 2023"} imageUrl={"/research-2.avif"} />
                <UpdateItem label={"Practices for Governing Agentic AI Systems"} date={"Dec 14, 2023"} imageUrl={"/research-3.avif"} />
                <UpdateItem label={"DALL-E 3 system card"} date={"Oct 3, 2023"} imageUrl={"/research-4.avif"} />
            </div>
        </section>
    )
}

export default Research;