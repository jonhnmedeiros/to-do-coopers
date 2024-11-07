"use client";
//import { TodoItemType } from "@/models/Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  //faCheck,
  faCheckCircle,
  //faEdit,
  //faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { TodoItemPropType } from "./todo-item-prop-def";
//import { FaTrashAlt } from "react-icons/fa";
import Image from 'next/image'

const TodoItem = (props: TodoItemPropType) => {
  const { done, label, _id, setTodo, deleteTodo } = props;
  const todoItem = { done, label, _id };
  const [edit, setEdit] = useState(false);
  const [newLabel, setNewLabel] = useState(label);
  function checkboxHandler() {
    setTodo({ ...todoItem, done: done ? false : true });
  }
  function editHandler(save = true) {
    if (edit && save) {
      setTodo({ ...todoItem, label: newLabel });
    }
    setEdit((isEdit) => !isEdit);
  }
  function deleteHandler() {
    deleteTodo(_id);
  }
  return (
    <>
      {/* <div
        className={`${
          edit && "hidden"
        } flex justify-items-center justify-between`}
      >
        <span className={`font-bold ${edit && "hidden"} leading-8`}>
          {label}
        </span>

        <div className="p-1 flex justify-items-center justify-between items-center h-full">
          <input
            type="checkbox"
            checked={done}
            onChange={checkboxHandler}
          ></input>
          <button className="ml-3" onClick={(e) => editHandler()}>
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </button>
          <button className="ml-3" onClick={(e) => deleteHandler()}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      <div
        className={`${
          !edit && "hidden"
        } flex justify-items-center justify-between items-center h-full`}
      >
        <input
          className={`font-bold`}
          type="text"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
        ></input>
        <div>
          <button className="ml-3" onClick={(e) => editHandler()}>
            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
          </button>
          <button className="ml-3" onClick={(e) => editHandler(false)}>
            <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
          </button>
        </div>
      </div> */}
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
            className={`text-orange-500 focus:outline-none break-words`}
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            onKeyUpCapture={(e) => {if (e.key === 'Enter') editHandler(); if (e.key === 'Escape') editHandler(false);}}
          ></input>
          {/* <div>
            <button className="ml-3" onClick={() => editHandler()}>
              <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
            </button>
            <button className="ml-3" onClick={() => editHandler(false)}>
              <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
            </button>
          </div> */}
        </div>
        <div className="text-[12px] leading-6 w-[50px] text-center">
          <button className="hidden md:group-hover:block text-[#999999] text-[12px] font-bold" onClick={() => deleteHandler()} >delete</button>
          {/* <button className="hidden group-hover:inline-block md:group-hover:hidden text-[#999999] leading-4 text-[16px] font-bold"><FaTrashAlt /></button> */}
        </div>
      </div>
    </>
  );
};
export default TodoItem;
