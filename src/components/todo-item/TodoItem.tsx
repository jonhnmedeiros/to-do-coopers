"use client";

import { useState } from "react";
import { TodoItemPropType } from "@/models/Todo";
import Image from 'next/image';

const TodoItem = (props: TodoItemPropType) => {
  const { done, label, _id, setTodo, deleteTodo } = props;
  const todoItem = { done, label, _id };
  const [edit, setEdit] = useState(false);
  const [newLabel, setNewLabel] = useState(label);
  function checkboxHandler() {
    setTodo({ ...todoItem, done: done ? false : true});
    window.location.reload();
  }
  function editHandler(save = true) {
    if (edit && save) {
      setTodo({ ...todoItem, label: newLabel});
    }
    setEdit((isEdit) => !isEdit);
    
  }
  function deleteHandler() {
    deleteTodo(_id);
  }
  return (
    <>
      <div className={`group flex flex-1 w-full gap-4 mb-5 text-left items-center `}>
        <div className="leading-6 flex">
          <button onClick={checkboxHandler}>
            {
              !done ? <Image src="/icon-unchecked.svg" alt="orange unchecked option" width={24} height={24} /> : 
              <Image src="/icon-checked.svg" alt="green checked option mark" width={24} height={24} />
            }
          </button>
        </div>
        <div className={`${edit && "hidden"} text-[16px] w-[220px] text-left leading-6 text-wrap`} onClick={() => editHandler()} >
          {label}
        </div>
        <div
          className={`${
            !edit && "hidden"
          } flex justify-items-center justify-between items-center h-full`}
        >
          <input
            className={`text-orange-500 focus:outline-none break-words text-[16px]`}
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            onKeyUpCapture={(e) => {if (e.key === 'Enter') editHandler(); if (e.key === 'Escape') editHandler(false);}}
          ></input>
        </div>
        <div className="text-[12px] leading-6 w-[50px] text-center">
          <button className="hidden md:group-hover:block text-[#999999] text-[12px] font-bold" onClick={() => deleteHandler()} >delete</button>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
