import CategoryTag from "./category-tag";
import Image from 'next/image'

const ContentColumn = () => {
    return (
        <div className="flex flex-col w-[401px] gap-4">
            <CategoryTag categoryName="Next.js" kind={true}/>
            <span className="font-semibold text-[25px]">
                Set Video Playback Speed With javascript
            </span>

            <Image
                src={"/landing.png"}
                width={401}
                height={200}
                alt="img"
            />
        </div>
    )
}

export default ContentColumn;