import HeaderLogo from "@/app/_components/header-logo";
import InputButton from "./input-btn";

const Header = () => {
    return (
        <section className="h-[70px] w-full bg-[#E8F3F3] flex flex-row items-center justify-end">
            <div className="w-[60%] flex flex-row justify-between items-center pr-5">
                <HeaderLogo/>

                <InputButton className="max-sm:hidden"/>
            </div>
        </section>
    )
}

export default Header;
