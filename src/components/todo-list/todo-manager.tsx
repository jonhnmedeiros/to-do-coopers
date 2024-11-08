"use client";
import { useEffect, useState } from "react";
import {
  TodoItemType,
  TodoItemTypeWithouId,
} from "@/models/Todo";
import TodoList from "./todo-list";
import TodoCrudMethods, { CRUDState } from "@/app/hooks/todo-list-crud";
//import NewTodoItem from "../new-todo-item";
import TodoToolbar from "../todo-toolbar";
import { useSession } from "next-auth/react";

const TodoManager = ({showTodos = false}) => {
  const { data } = useSession();

  const {
    crudData,
    //crudError,
    crudMethodState,
    getTodoListApi,
    updateTodoListApi,
    createTodoItemApi,
  } = TodoCrudMethods();

  const [query, setQuery] = useState("");
  const [
    filteredTodoList, 
    setFilteredTodoList] = useState(
    [] as TodoItemType[]
  );
  useEffect(() => {
    try {
      fetchTodoItems();
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    // const filtered = crudData.filter((todoItem) => {
    //   if (!data || !data.user || typeof data.user.email !== 'string') {
    //     return false;
    //   }
    //   return todoItem.userId === data.user.email;
    // });
    const filtered = crudData;
    setFilteredTodoList(filtered);
  }, [query, crudData]);

  async function fetchTodoItems() {
    await getTodoListApi();
  }
  const addTodoItem = async (newTodoItem: TodoItemTypeWithouId) => {
    try {
      await createTodoItemApi(newTodoItem);
      await fetchTodoItems();
    } catch (err) {
      console.error(err);
    }
  };

  const setTodoItem = async (changedTodo: TodoItemType) => {
    await updateTodoListApi(changedTodo, crudData);
  };

  const todoDeleted = async () => {
    await fetchTodoItems();
    window.location.reload();
  };

  const findDoneItems =  () => {
    return  filteredTodoList.filter((todo) => todo.done);
  };

  const  findNotDoneItems =  () => {
    return  filteredTodoList.filter((todo) => todo.done === false);
  }

  return (
    <div>
      <div
        className={`${crudMethodState === CRUDState.Done ? "block" : "hidden"}`}
      >
        {showTodos ?           
          <TodoToolbar
            addTodoItem={addTodoItem}
            queryString={query}
            setQueryString={setQuery}
          /> : null
        }
        { showTodos ? 
          <TodoList
            todoList={findNotDoneItems()}
            setTodoItem={setTodoItem}
            todoItemDeleted={todoDeleted}
          /> : 
          <TodoList
            todoList={findDoneItems()}
            setTodoItem={setTodoItem}
            todoItemDeleted={todoDeleted}
          ></TodoList> 
        }

      </div>
      <div
        className={`${
          crudMethodState === CRUDState.Loading ? "block" : "hidden"
        }`}
      >
        LOADING
      </div>
    </div>
  );
};

export default TodoManager;
