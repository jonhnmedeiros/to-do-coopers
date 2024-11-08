export interface TodoItemType {
    _id: number;
    done: boolean;
    label: string;
    userId?: string;
  }
  
  export type TodoItemTypeWithouId = Omit<TodoItemType, "_id">;
  