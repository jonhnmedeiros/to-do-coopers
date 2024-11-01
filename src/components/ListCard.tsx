import Image from 'next/image'
import { Button } from './Button';
import { NewItem } from './NewItem';
import { ListItem, ItemProps } from './ListItem';



interface TodoCardProps {
  title: string;
  message: string;
  count?: number;
  allowNew?: boolean;
  color: string;
  items: Array<ItemProps>;
  children?: React.ReactElement;
}

export const ListCard = ({title, color, message, count, items, allowNew = false, children}: TodoCardProps) => {
  return (
    <div className="flex flex-col w-[380px] max-w-[380px] shadow-lg bg-white">
      <div className={`h-5 w-full ${color}`}></div>
      <section id="card-content" className="text-2xl flex flex-col items-center mb-[30px]">
        <header className="w-full px-[23px] mb-[30px] flex flex-col items-center">
          <h3 className="font-bold text-[40px] leading-6 mt-10 mb-5">{title}</h3>
          <p id="message" className="w-[180px]">{message}</p>
          {
            count ? (<p><strong>You have done {count} tasks</strong></p>) : null
          }
        </header>
        <div id="itens-list" className="w-full px-[23px]">
          <ul>
            {
              allowNew ? (<NewItem />) : null
            }
            {
              items.map((item: ItemProps) => {
                return <ListItem key={item.id} title={item.title} done={item.done} id={item.id} />
              })
            }
            {children}
          </ul>
          <Button text="erase all" extraClasses="mt-2 md:mt-[18px] bg-black" onClick={()=>{}} />
        </div>
      </section>

    </div>
  )
}