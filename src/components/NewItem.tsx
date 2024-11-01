import Image from 'next/image'

export const NewItem = () => {
  return (
    <li className="flex gap-4 mb-5 text-left">
      <div>
        <button><Image src="/icon-new-item.svg" alt="checked icon to add a new task" width={24} height={24} /></button>
      </div>
      <div className="font-bold text-[16px] leading-6">this is a new task</div>
    </li>
  )
}