"use client";
import { Suspense } from "react";
import { TodoItemType } from "@/models/Todo";
import LoadingItem from "../LoadingItem";
import TodoItemMananger from "../todo-item/TodoItemManager";

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
    <Suspense fallback={<LoadingItem></LoadingItem>}>
      <ul>{listItems}</ul>
    </Suspense>
  );
};

export default TodoList;
