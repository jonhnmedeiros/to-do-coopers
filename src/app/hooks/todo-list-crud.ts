import { useState } from "react";
import {
  TodoItemType,
  TodoItemTypeWithouId,
} from "@/models/Todo";

export enum CRUDState {
  Unknown = 0,
  Loading = 1,
  Error = 2,
  Done = 3,
}

const TodoCrudMethods = () => {
  const [crudData, setCrudData] = useState([] as Array<TodoItemType>);
  const [crudError, setCrudError] = useState("");
  const [crudMethodState, setCrudMethodState] = useState(CRUDState.Loading);
  const url = "/api/todo";

  const getTodoListApi = async () => {
    try {
      setCrudMethodState(CRUDState.Loading);
      const res = await fetch(url);
      const data = await res.json();
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // const data = fakeData;
      console.log(data);
      setCrudData(data);
      setCrudMethodState(CRUDState.Done);
    } catch (err) {
      setCrudData([]);
      setCrudError(err as string);
      setCrudMethodState(CRUDState.Error);
    }
  };

  const createTodoItemApi = async (newTodo: TodoItemTypeWithouId) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    console.log(res);
    // if (res.insertedId) {
    //   return await getTodoListApi();
    // }
    return [];
  };

  const updateTodoListApi = async (
    changedTodo: TodoItemType,
    originalTodoList: TodoItemType[]
  ) => {
    const newTodoItemList = originalTodoList.map((todoItem) =>
      todoItem._id === changedTodo._id ? changedTodo : todoItem
    );
    setCrudData(newTodoItemList);
  };

  return {
    crudData,
    crudError,
    crudMethodState,
    getTodoListApi,
    createTodoItemApi,
    updateTodoListApi,
  };
};

export default TodoCrudMethods;
