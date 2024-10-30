import React from 'react';

interface DoneItemProps {
  task: string;
}

const DoneItem: React.FC<DoneItemProps> = ({ task }) => {
  return (
    <div className="flex gap-4 self-start mt-5 text-base text-black">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/995c01a6ce1619c75caa013db9bdcece32fc70f656234ef0801fb178efe0dd4f?placeholderIfAbsent=true&apiKey=fdb920437ed8445d849f278001ef01e4" alt="" className="object-contain shrink-0 w-6 aspect-square" />
      <div className="basis-auto">{task}</div>
    </div>
  );
};

export default DoneItem;