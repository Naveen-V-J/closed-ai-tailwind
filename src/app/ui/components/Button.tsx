
const Button = ({ label }: { label: string }) => {

    return (
        <button className="border w-fit rounded-[2.2px] px-2.5 py-0.5 hover:text-black hover:bg-white">{label}</button>
    )
}

export default Button;