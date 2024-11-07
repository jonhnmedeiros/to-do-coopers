import { Dispatch, SetStateAction } from "react";
import { TodoItemTypeWithouId } from "@/models/Todo";
import NewTodoItem from "./new-todo-item";
//import TodoSearchbar from "./todo-searchbar";

export interface TodoToolbarProps {
  addTodoItem: (newTodoItem: TodoItemTypeWithouId) => Promise<void>;
  queryString: string;
  setQueryString: Dispatch<SetStateAction<string>>;
}

const TodoToolbar = (props: TodoToolbarProps) => {
  const { 
    addTodoItem, 
    //setQueryString, 
    //queryString 
  } = props;
  return (
    <div className="flex justify-between flex-wrap mb-5">
      {/* <TodoSearchbar
        queryString={queryString}
        setQueryString={setQueryString}
      ></TodoSearchbar> */}
      <NewTodoItem addTodoItem={addTodoItem}></NewTodoItem>
    </div>
  );
};

export default TodoToolbar;
