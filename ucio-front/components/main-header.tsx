import { LogoIcon, SearchIcon } from "@/app/_components/icon";
import React from "react";
import LoginButton from "./login-btn";

const Header = () => {
    return (
        <header className="h-[86px] bg-[#D2D6DB] px-[98px] py-[16px] flex items-center justify-between shadow-header">
                <LogoIcon/>
                <div className="flex flex-row items-center">
                    <ul className="text-black list-none flex flex-row gap-20 font-bold text-[20px]">
                        <li className="first-letter-uppercas">home</li>
                        <li className="first-letter-uppercase">category</li>
                        <li className="first-letter-uppercase">about Me</li>
                        <li className="first-letter-uppercase flex flex-row items-center gap-2"><SearchIcon/>search</li>
                    </ul>
                </div>

        </header>
    )
}

export default Header;