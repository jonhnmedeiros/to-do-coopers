import { TodoItemType, TodoItemManagerProp } from "@/models/Todo";
import TodoItem from "./TodoItem";

import { useEffect } from "react";
import TodoItemApi from "@/app/hooks/todo-item-update";
import { CRUDState } from "@/app/hooks/todo-list-crud";

const TodoItemMananger = (props: TodoItemManagerProp) => {
  const { done, label, _id, setTodo, todoDeleted } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  useEffect;
  const { updateState, updateTodoListApi, deleteTodoItemApi } =
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
