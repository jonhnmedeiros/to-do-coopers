import React from 'react';

interface TodoItemProps {
  task: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  return (
    <div className="flex gap-4 mt-5 text-base text-black">
      <div className="flex shrink-0 w-6 h-6 rounded-full border-2 border-orange-400 border-solid" />
      <div className="basis-auto">{task}</div>
    </div>
  );
};

export default TodoItem;