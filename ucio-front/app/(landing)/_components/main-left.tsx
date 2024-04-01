
import Input from "@/components/custom-input";
import React from "react";

const MainLeft = () => {
    return (
        <div className="flex flex-col gap-2 px-3">
           <span className="text-[#2B2C34] text-[64px]">
                Hi, m Worker <br/>
                Full Stack Dev
           </span>

            <span className="border-l-4 border-black text-[darkgray] pl-4">
                On this blog I share tips and tricks, frameworks, projects, tutorials, etc <br/>
                Make sure you subscribe to get the latest updates
            </span>

            <span className="flex flex-row gap-3 mt-3">
                <Input placeholder="Enter your email here.."/>

                <button className="bg-[#8E33C6] w-[145px] h-[67px] rounded-lg"> Subscribe </button>
            </span>
        </div>
    )
}

export default MainLeft;