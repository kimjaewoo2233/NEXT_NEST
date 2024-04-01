import Header from "@/components/main-header";
import MainLeft from "./_components/main-left";
import { CSSIcon, HumanIcon, JSIcon, ReactIcon } from "../_components/icon";
import CategoryCard from "./_components/category-card";


const LandingPage = () => {
    return (
        <div>
            <Header/>

            <section className="bg-[#D2D6DB] w-full h-[900px]">
                <div className="flex flex-row justify-center space-x-24 pt-28">
                    <MainLeft/>
                    <HumanIcon/>
                </div>

                <div className="mt-20 flex flex-row gap-20 justify-center w-full ">
                    <CategoryCard categoryName="CSS">
                        <CSSIcon/>
                    </CategoryCard>
                    <CategoryCard categoryName="Javascript">
                        <JSIcon/>
                    </CategoryCard>
                    <CategoryCard categoryName="ReactJs">
                        <ReactIcon/>
                    </CategoryCard>
                    
                    
                </div> 
            
            </section>


        </div>
    )
}

export default LandingPage;