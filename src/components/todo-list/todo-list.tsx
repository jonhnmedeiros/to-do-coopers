"use client";
import { Suspense, useEffect, useState } from "react";
import { TodoItemType } from "@/models/Todo";
import TodoItem from "../todo-item/todo-item";
import LoadingTodoItem from "../loading-todo-item";
import TodoItemMananger from "../todo-item/todo-item-manager";

interface TodoListProps {
  todoList: TodoItemType[];
  setTodoItem: (changedTodo: TodoItemType) => Promise<void>;
  todoItemDeleted: () => Promise<void>;
}

const TodoList = (props: TodoListProps) => {
  const { todoList, setTodoItem, todoItemDeleted } = props;

  const listItems = todoList.map((data) => {
    return (
      <TodoItemMananger
        key={data._id}
        _id={data._id}
        done={data.done}
        label={data.label}
        setTodo={setTodoItem}
        todoDeleted={todoItemDeleted}
      ></TodoItemMananger>
    );
  });
  return (
    <Suspense fallback={<LoadingTodoItem></LoadingTodoItem>}>
      <ul>{listItems}</ul>
    </Suspense>
  );
};

export default TodoList;
