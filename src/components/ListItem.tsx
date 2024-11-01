import Image from 'next/image'
import { FaTrashAlt } from 'react-icons/fa'

export interface ItemProps {
  title: string;
  done: boolean;
  id: string;
  extraClasses?: string;
}

export const ListItem = ({title, done = false, extraClasses}: ItemProps) =>{
  return (
    <li className={`group flex flex-1 w-full gap-4 mb-5 text-left items-center justify-between ${extraClasses}`}>
      <div className="leading-6">
        <button>
          {
            !done ? <Image src="/icon-unchecked.svg" alt="orange unchecked option" width={24} height={24} /> : 
            <Image src="/icon-checked.svg" alt="green checked option mark" width={24} height={24} />
          }
        </button>
      </div>
      <div className="text-[16px] w-[220px] text-left leading-6">{title}</div>
      <div className="text-[12px] leading-6 w-[50px] text-center">
        <button className="hidden md:group-hover:block text-[#999999] text-[12px] font-bold">delete</button>
        <button className="hidden group-hover:inline-block md:group-hover:hidden text-[#999999] leading-4 text-[16px] font-bold"><FaTrashAlt /></button>
      </div>
    </li>
  )
}