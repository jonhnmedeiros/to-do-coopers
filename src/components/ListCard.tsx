import { useEffect, useState } from 'react';
import { Button } from './Button';
//import { ItemProps } from './ListItem';
// import { NewItem } from './NewItem';
// import { ListItem, ItemProps } from './ListItem';
import TodoManager from './todo-list/TodoManager';
import TodoCrudMethods 
      //{ CRUDState } 
from "@/app/hooks/todo-list-crud";
import { TodoItemType } from '@/models/Todo';
import { useSession } from 'next-auth/react';
import TodoItemApi from '@/app/hooks/todo-item-update';



interface TodoCardProps {
  title: string;
  message: string;
  count?: number;
  allowNew?: boolean;
  color: string;
  //items: Array<ItemProps>;
  children?: React.ReactElement;
}

export const ListCard = ({
  title, 
  color, 
  message, 
  count, 
  allowNew = false}: TodoCardProps) => {

  const { data } = useSession();

  const {
    crudData,
    getTodoListApi,
  } = TodoCrudMethods();

  const { deleteTodoAllItensApi } =  TodoItemApi();

  const [filteredTodoList, setFilteredTodoList] = useState(
    [] as TodoItemType[]
  );
  const [
    query, 
  //  setQuery
  ] = useState("");

  useEffect(() => {
    try {
      fetchTodoItems();
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    const filtered = crudData.filter((todoItem) => {
      if (!data || !data.user || typeof data.user.email !== 'string') {
        return false;
      }
      return todoItem.userId === data.user.email;
    });
    //const filtered = crudData;
    setFilteredTodoList(filtered);
  }, [query, crudData, data]);

  async function fetchTodoItems() {
    await getTodoListApi();
  }

  async function deleteAllItems() {
    if ( allowNew ) {
      await deleteTodoAllItensApi(data?.user?.email ?? "", false);
    } else { 
      await deleteTodoAllItensApi(data?.user?.email ?? "", true);
    }
    await fetchTodoItems();
    window.location.reload();
  }

  function findDoneItems() {
    return filteredTodoList.filter((todo) => todo.done);
  }



  return (
    <div className="flex flex-col w-[380px] max-w-[380px] shadow-lg bg-white">
      <div className={`h-5 w-full ${color}`}></div>
      <section id="card-content" className="text-2xl flex flex-col items-center mb-[30px]">
        <header className="w-full px-[23px] mb-[30px] flex flex-col items-center">
          <h3 className="font-bold text-[40px] leading-6 mt-10 mb-5">{title}</h3>
          <p id="message" className="w-[180px]">{message}</p>
          {
            count ? (<p><strong>You have done {findDoneItems().length} tasks</strong></p>) : null
          }
        </header>
        <div id="itens-list" className="w-full px-[23px]">
          <ul>
            {
              allowNew ? 
              // (<NewItem />) : null
              
              <TodoManager showTodos={allowNew} /> : <TodoManager/>
            }
            {/* {

              items.map((item: ItemProps) => {
                return <ListItem key={item.id} title={item.title} done={item.done} id={item.id} />
              })
            } */}
            {/* {children} */}
          </ul>
          <Button text="erase all" extraClasses="mt-2 md:mt-[18px] bg-black" onClick={()=>{deleteAllItems()}} />
        </div>
      </section>

    </div>
  )
}