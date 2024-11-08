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

const TodoManager = ({showTodos = false}) => {
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
    const filtered = crudData.filter((todoItem) => {
      return todoItem.label.toLowerCase().includes(query.toLowerCase());
    });
    console.log("filtered", crudData, filtered);
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
  };

    const findDoneItems =  () => {
      //await getTodoListApi();
      return filteredTodoList.filter((todo) => todo.done);
    };

    const  findNotDoneItems = () => {
      //window.location.reload();
    return filteredTodoList.filter((todo) => todo.done === false);
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
