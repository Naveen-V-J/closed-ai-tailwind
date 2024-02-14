import Image from "next/image";
import { useEffect, useState } from "react";


const Safety = () => {

    return (
        <section className="flex flex-col mb-3 sm:mt-2 gap-10">
            <div className="mx-4 xl:mx-6 2xl:mx-4 gap-3 flex flex-col sm:flex-row">
                <h2 className="text-2xl sm:text-4xl leading-loose sm:basis-1/2">Safety & responsibility</h2>
                <div className="sm:basis-1/2">
                    <p className="text-xl sm:text-2xl">Our work to create safe and beneficial AI requires a deep understanding of the potential risks and benefits, as well as careful consideration of the impact.</p>
                    <p className="underline underline-offset-[3px] hover:no-underline leading-loose cursor-pointer mt-2">Learn about safety</p>
                </div>
            </div>
            <div className="my-14">
                <Image src={"/safety.webp"} alt="update image" width={2000} height={1500} className="" layout="responsive" />
            </div>
        </section>
    )
}

export default Safety;