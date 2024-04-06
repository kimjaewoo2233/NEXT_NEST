import { ClassNameWithProps } from "@/@types/global";


interface Props{
    categoryName: string;
    kind: boolean;
}

const CategoryTag = ({ categoryName, kind }: ClassNameWithProps<Props>) => {
    return (
        <span className={`w-[50px] h-[20px] rounded-md z-20 text-[12px] p-2 flex items-center justify-center
                 ${kind ? 'bg-[#f4f9f8] text-[#5b7066]' : 'bg-[#00AAA1] text-[#FFF]'}`}>
            {categoryName}
        </span>
    )
}

export default CategoryTag;