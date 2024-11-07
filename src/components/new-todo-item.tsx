//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //TodoItemType,
  TodoItemTypeWithouId,
} from "@/models/Todo";
//import { faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useState } from "react";
import Image from 'next/image'

const NewTodoItem = (props: {
  addTodoItem: (newTodoItem: TodoItemTypeWithouId) => Promise<void>;
}) => {
  const [newTodoLabel, setNewTodoLabel] = useState("");
  const [showForm, setShowForm] = useState(false);
  function submitNewTodoItem(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(newTodoLabel);
    const newTodoItem: TodoItemTypeWithouId = {
      label: newTodoLabel,
      done: false,
    };
    props.addTodoItem(newTodoItem);
  }

  // function hideNewTodoItem(e: FormEvent<HTMLButtonElement>) {
  //   e.preventDefault();
  //   setShowForm(false);
  // }

  return (
    <div className={`${showForm ? "w-full" : ""}`}>
      <li className="flex text-left" onClick={() => setShowForm(true)}>
        <div className="flex" >
          <button><Image src="/icon-new-item.svg" alt="checked icon to add a new task" width={24} height={24} />
          </button>
        </div>
        <div className={`${
            showForm ? "hidden" : "block"
          } flex ml-4 font-bold text-[16px] leading-6`}>
            this is a new task
        </div>
        <form
          onSubmit={(e) => {
            submitNewTodoItem(e);
          }}
          className={`${
            showForm ? "block" : "hidden"
          } flex ml-4 justify-items-center justify-between `}
        >
          <input
            type="text"
            name="label"
            value={newTodoLabel}
            onChange={(e) => setNewTodoLabel(e.target.value)}
            onKeyUpCapture={(e) => { if (e.key === 'Escape') {setShowForm(false); setNewTodoLabel('')}; if (e.key === 'Enter') {setShowForm(false); setNewTodoLabel('')}; }}
            className="focus:outline-none break-words font-bold text-[16px]"
          ></input>
          {/* <div className="flex gap-4 p-1">
            <button type="submit">
              <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
            </button>
            <button onClick={(e) => hideNewTodoItem(e)}>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </div> */}
        </form>
      </li>
      {/* <button
        className={`${
          showForm ? "hidden" : "block"
        } rounded-md text-slate-900 border-slate-900 border-2 pt-1 pb-1 pl-2 pr-2`}
        onClick={(e) => setShowForm(true)}
      >
        Add
        <FontAwesomeIcon icon={faPlus} className="ml-2"></FontAwesomeIcon>
      </button> */}

    </div>
  );
};

export default NewTodoItem;
