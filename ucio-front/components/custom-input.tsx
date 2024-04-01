

interface Props {
    placeholder: string;
}

const Input = ({ placeholder }: Props) => {
    return (
        
        <input className="h-[67px] w-[444px] bg-[#FFFF] text-black text-[25px] rounded-[8px] pl-7" placeholder={placeholder}/>
    )
}

export default Input;