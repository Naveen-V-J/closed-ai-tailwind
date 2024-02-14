import Image from "next/image";

const UpdateItem = ({ label, date, imageUrl }: { label: string, date: string, imageUrl: string }) => {

    return (
        <div className="flex-1 group cursor-pointer">
            <div className="mb-2 ">
                <Image src={imageUrl} alt="update image" width={360} height={360} className="w-full h-full" />
                <div className="mt-2 sm:max-xl:w-[360px] sm:max-xl:h-[80px]">
                    <a className="no-underline underline-offset-[3px] group-hover:underline font-semibold leading-normal">{label}</a>
                    <h2 className=" ">{date}</h2>

                </div>
            </div>

        </div>

    )
}

export default UpdateItem;