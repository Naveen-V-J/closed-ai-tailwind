import Image from "next/image";
import UpdateItem from "../components/UpdateItem";


const LatestUpdates = () => {
    return (
        <section className="flex flex-col mx-4 xl:mx-6 2xl:mx-4 mb-9 sm:mt-2 gap-10">
            <div className="sm:flex flex-row justify-between sm:items-center">
                <h2 className="text-2xl sm:text-4xl leading-loose">Latest updates</h2>
                <a className="underline underline-offset-[3px] hover:no-underline">View all updates</a>
            </div>
            <div className="flex sm:flex-wrap max-sm:flex-col gap-4 xl:gap-6" >
                <UpdateItem label={"New embedding models and API updates"} date={"Jan 25, 2024"} imageUrl={"/update-1.avif"} />
                <UpdateItem label={"Democratic inputs to AI grant program: lessons learned and implementation plans"} date={"Jan 16, 2024"} imageUrl={"/update-2.avif"} />
                <UpdateItem label={"How OpenAI is approaching 2024 worldwide elections"} date={"Jan 15, 2024"} imageUrl={"/update-3.avif"} />
                <UpdateItem label={"Introducing ChatGPT Team"} date={"Jan 10, 2024"} imageUrl={"/update-4.avif"} />
            </div>
        </section>
    )
}

export default LatestUpdates;