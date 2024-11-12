export interface TodoItemType {
  _id: number;
  done: boolean;
  label: string;
  userId?: string;
}
export interface TodoItemManagerProp extends TodoItemType {
  setTodo: (todo: TodoItemType) => void;
  todoDeleted: () => void;
}
  
export interface TodoItemPropType extends TodoItemType {
  setTodo: (todo: TodoItemType) => void;
  deleteTodo: (todoId: number) => void;
}
  
export type TodoItemTypeWithouId = Omit<TodoItemType, "_id">;
  