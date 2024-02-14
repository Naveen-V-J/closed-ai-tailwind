
const ExploreItem = ({ label, linkLabel }: { label: string, linkLabel: string }) => {

    return (
        <div className="cursor-pointer group sm:w-[350px] md:w-[420px] xl:w-[350px]">
            <h2 className="font-semibold text-[21px] sm:text-[24px] xl:text-[28px] leading-snug">{label}</h2>
            <p className="mt-2 underline underline-offset-[3px] group-hover:no-underline">{linkLabel}</p>
        </div>

    )
}

export default ExploreItem;