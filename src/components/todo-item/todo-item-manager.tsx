import { TodoItemType } from "@/models/Todo";
import TodoItem from "./todo-item";
import { TodoItemManangerProp, TodoItemPropType } from "./todo-item-prop-def";
import { useEffect, useState } from "react";
import TodoItemApi from "@/app/hooks/todo-item-update";
import { CRUDState } from "@/app/hooks/todo-list-crud";

const TodoItemMananger = (props: TodoItemManangerProp) => {
  const { done, label, _id, setTodo, todoDeleted } = props;

  useEffect;
  const { updateState, updateError, updateTodoListApi, deleteTodoItemApi } =
    TodoItemApi();

  async function updateTodoItem(data: TodoItemType) {
    const updatedTodoItem = await updateTodoListApi(data);
    setTodo(updatedTodoItem);
  }

  async function deleteTodoItem(id: number) {
    await deleteTodoItemApi(id);
    todoDeleted();
  }

  return (
    <li key={_id}>
      <div className={`${updateState === CRUDState.Done ? "block" : "hidden"}`}>
        <TodoItem
          _id={_id}
          done={done}
          label={label}
          setTodo={updateTodoItem}
          deleteTodo={deleteTodoItem}
        ></TodoItem>
      </div>
      <div
        className={`${updateState === CRUDState.Loading ? "block" : "hidden"}`}
      >
        Loading
      </div>
      <div
        className={`${updateState === CRUDState.Error ? "block" : "hidden"}`}
      >
        Error
      </div>
    </li>
  );
};

export default TodoItemMananger;
