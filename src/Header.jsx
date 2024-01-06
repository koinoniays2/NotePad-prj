export default function Header({title}) {
    return (
    <header className="font-style w-1/3 h-12 text-[#F6F6F6] bg-[#4C4C4C] rounded-r-[50px] mt-5
    flex items-center justify-center text-[2rem]">
        {title}
    </header>
    )
}