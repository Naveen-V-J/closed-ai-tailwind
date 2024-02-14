import Image from "next/image";
import UpdateItem from "../components/UpdateItem";


const Products = () => {
    return (
        <section className="flex flex-col mx-4 xl:mx-6 2xl:mx-4 mb-9 sm:mt-2 gap-20">
            <div className="gap-3 flex flex-col sm:flex-row">
                <h2 className="text-2xl leading-loose sm:basis-1/2">Products</h2>

                <div className="sm:basis-1/2">
                    <p className="text-xl sm:text-2xl">Our API platform offers our latest models and guides for safety best practices.</p>
                    <p className="underline underline-offset-[3px] hover:no-underline leading-loose cursor-pointer mt-2">Explore our products</p>
                </div>
            </div>
            <div className="flex sm:flex-wrap max-sm:flex-col gap-4 xl:gap-6 w-full" >
                <UpdateItem label={"New embedding models and API updates"} date={"Jan 25, 2024"} imageUrl={"/update-1.avif"} />

                <UpdateItem label={"Introducing ChatGPT Team"} date={"Jan 10, 2024"} imageUrl={"/update-4.avif"} />
                <UpdateItem label={"Introducing ChatGPT Store"} date={"Jan 10, 2024"} imageUrl={"/product-3.avif"} />
                <UpdateItem label={"Introducing GPTs"} date={"Nov 6, 2023"} imageUrl={"/product-4.avif"} />
            </div>
        </section>
    )
}

export default Products;