import React from 'react';
import DoneItem from './DoneItem';

interface DoneListProps {
  tasks: string[];
}

const DoneList: React.FC<DoneListProps> = ({ tasks }) => {
  return (
    <section className="flex flex-col pb-10 w-full bg-white shadow-[0px_4px_60px_rgba(66,66,66,0.2)] max-md:mt-10">
      <div className="flex shrink-0 h-5 bg-green-500" />
      <div className="flex flex-col px-8 mt-10 w-full max-md:px-5">
        <h2 className="self-center text-4xl font-semibold leading-none text-black">Done</h2>
        <p className="self-center mt-5 text-2xl text-center text-black">
          Congratulations!<br />
          <span className="font-bold">You have done {tasks.length} tasks</span>
        </p>
        {tasks.map((task, index) => (
          <DoneItem key={index} task={task} />
        ))}
        <button className="px-16 py-5 mt-16 ml-2.5 text-2xl font-semibold text-center text-white bg-black rounded-xl max-md:px-5 max-md:mt-10 max-md:mr-0.5">
          erase all
        </button>
      </div>
    </section>
  );
};

export default DoneList;