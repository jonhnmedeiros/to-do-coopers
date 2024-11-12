import { Dispatch, SetStateAction } from "react";
import { TodoItemTypeWithouId } from "@/models/Todo";
import NewItem from "./NewItem";

export interface TodoToolbarProps {
  addTodoItem: (newTodoItem: TodoItemTypeWithouId) => Promise<void>;
  queryString: string;
  setQueryString: Dispatch<SetStateAction<string>>;
}

const Toolbar = (props: TodoToolbarProps) => {
  const { 
    addTodoItem, 
    //setQueryString, 
    //queryString 
  } = props;
  return (
    <div className="flex justify-between flex-wrap mb-5">
      {/* <Searchbar
        queryString={queryString}
        setQueryString={setQueryString}
      ></Searchbar> */}
      <NewItem addTodoItem={addTodoItem}></NewItem>
    </div>
  );
};

export default Toolbar;
