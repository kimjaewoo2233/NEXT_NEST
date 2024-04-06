import Image from "next/image";

const HeaderLogo = () => {
    return (
        <div className="relative w-[99px]">
            <span className="bg-[#00AAA1] text-[#FFF] px-2 py-1 font-bold">
                Dev
            </span>
            <span className="absolute top-1 right-2 font-semibold ">
                Book
            </span>
            <Image src="/dots.png" width={5} height={1} alt="." className="absolute right-0 top-4"></Image>
        </div>
    )
}

export default HeaderLogo;

