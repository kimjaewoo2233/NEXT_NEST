

interface Props {
    children: React.ReactNode;
    categoryName: string;
}

const CategoryCard = ({ children, categoryName }: Props) => {
    return (
        <div className="w-[220px] h-[280px] bg-[#FFF] rounded-md z-10 relative shadow-lg transition-transform duration-400 ease-in-out hover:scale-110 transition-colors duration-1000 ease-in-out hover:bg-purple-500">
            <span className="absolute left-6 top-14">
                {children}
            </span>
            <span className="text-black text-[24px] font-semibold absolute left-9 top-[140px]">
                    {categoryName}
            </span>
        </div>
    );
}

export default CategoryCard;