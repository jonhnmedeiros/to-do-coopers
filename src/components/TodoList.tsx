import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  tasks: string[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <section className="flex flex-col grow pb-10 w-full bg-white shadow-[0px_4px_12px_rgba(66,66,66,0.198)] max-md:mt-10">
      <div className="flex shrink-0 h-5 bg-orange-400" />
      <div className="flex flex-col items-start px-6 mt-10 w-full max-md:px-5">
        <h2 className="self-center text-4xl font-semibold leading-none text-black">To-do</h2>
        <p className="mt-5 text-2xl text-center text-black">
          Take a breath.<br />Start doing.
        </p>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
        <button className="self-center px-16 py-5 mt-10 text-2xl font-semibold text-center text-white bg-black rounded-xl max-md:px-5">
          erase all
        </button>
      </div>
    </section>
  );
};

export default TodoList;