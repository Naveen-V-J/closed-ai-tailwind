import Image from "next/image";
import { useEffect, useState } from "react";


const Careers = () => {

    return (
        <section className="flex flex-col mb-9 sm:mt-2 gap-10">
            <div className="mx-4 xl:mx-6 2xl:mx-4 gap-3 flex flex-col sm:flex-row">
                <h2 className="text-2xl leading-loose sm:basis-1/2">Careers at OpenAI</h2>
                <div className="sm:basis-1/2">
                    <p className="text-xl sm:text-2xl">Developing safe and beneficial AI requires people from a wide range of disciplines and backgrounds.</p>
                    <p className="underline underline-offset-[3px] hover:no-underline leading-loose cursor-pointer mt-2">View careers</p>
                </div>
            </div>
            <div className="my-14">
                <Image src={"/careers-1.webp"} alt="update image" width={2000} height={1500} className="" layout="responsive" />
            </div>
            <div className="mx-4 xl:mx-6 2xl:mx-4 sm:flex sm:flex-row-reverse border-t border-slate-400 py-4">
                <div className=" basis-1/2">
                    <Image src={"/careers-2.webp"} alt="update image" width={2000} height={1999} className="" layout="responsive" />
                </div>
                <div className="max-sm:mt-10 basis-1/2">
                    <q className="text-3xl sm:text-4xl sm:leading-[44px] xl:text-[55px]">I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space.</q>
                    <h3 className="mt-3 leading-snug xl:text-lg"><span className="font-semibold ">Lilian Weng</span>
                        <br />Applied AI at OpenAI</h3>

                </div>
            </div>



        </section>
    )
}

export default Careers;