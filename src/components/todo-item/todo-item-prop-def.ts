import { TodoItemType } from "@/models/Todo";

export interface TodoItemManangerProp extends TodoItemType {
  setTodo: (todo: TodoItemType) => void;
  todoDeleted: () => void;
}

export interface TodoItemPropType extends TodoItemType {
  setTodo: (todo: TodoItemType) => void;
  deleteTodo: (todoId: number) => void;
}
