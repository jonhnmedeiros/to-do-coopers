/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
  TodoItemType,
  TodoItemTypeWithouId,
} from "@/models/Todo";
import { CRUDState } from "./todo-list-crud";

const TodoItemApi = () => {

  const [updateData, setUpdateData] = useState() as [
    TodoItemType,
    React.Dispatch<React.SetStateAction<TodoItemType>>
  ];
  const [updateError, setUpdateError] = useState("");
  const [updateState, setUpdateState] = useState(CRUDState.Done);
  const url = "/api/todo";

  const updateTodoListApi = async (changedTodo: TodoItemType) => {

    try {
      setUpdateState(CRUDState.Loading);
      const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(changedTodo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const updatedTodo = await response.json();
      setUpdateState(CRUDState.Done);
      return updatedTodo;
    } catch (err) {
      setUpdateError("Error getting response after updating todo item");
      setUpdateState(CRUDState.Error);
    }
  };

  const deleteTodoItemApi = async (todoItemId: number) => {
    try {
      setUpdateState(CRUDState.Loading);
      const response = await fetch(url, {
        method: "DELETE",
        body: JSON.stringify(todoItemId),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      console.log(res);
      setUpdateState(CRUDState.Done);
      return res;
    } catch (err) {
      setUpdateError("Error deleting todo item");
      setUpdateState(CRUDState.Error);
    }
  };

  const deleteTodoAllItensApi = async (userId: string, done: boolean ) => {
    try {
      setUpdateState(CRUDState.Loading);
      const response = await fetch("/api/todo/all", {
        method: "DELETE",
        body: JSON.stringify({ userId, done }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      console.log(res);
      setUpdateState(CRUDState.Done);
      return res;
    } catch (err) {
      setUpdateError("Error deleting todos itens");
      setUpdateState(CRUDState.Error);
    }
  };

  return {
    updateState,
    updateData,
    updateError,
    updateTodoListApi,
    deleteTodoItemApi,
    deleteTodoAllItensApi
  };
};

export default TodoItemApi;
