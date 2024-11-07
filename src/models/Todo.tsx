export interface TodoItemType {
    _id: number;
    done: boolean;
    label: string;
  }
  
  export type TodoItemTypeWithouId = Omit<TodoItemType, "_id">;
  