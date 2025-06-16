import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";

function Addform() {

    const [todo, settodo] = useState("");

    const {addTodo} = useTodos();
// localStorage.removeItem("todos");
    const add = (e) => {
        e.preventDefault()
        if (!todo) return 
        addTodo({id: Date.now(), message: todo, completed: false})
        settodo("");  
    }

  return (
    <>
      <div className="addinp w-[90%] mt-3 h-[8%] bg-orange-400 flex justify-center items-center rounded-[40px]">
        <div className="input w-[100%] h-full bg-cyan-300 flex rounded-[40px]">
          <div className="inputbox bg-red-400 h-full w-[70%] rounded-[40px]">
            <input value={todo} placeholder="Enter ur task here:"
              type="text" onChange={(e) => settodo(e.target.value)}
              className="bg-red-400 outline-none w-full h-full ml-5 rounded-l-[40px] text-white placeholder:text-gray-100 font-semi-bold "
            ></input>
          </div>
          <button onClick={add} className="add w-[30%] h-[100%] cursor-pointer rounded-r-[40px] bg-red-500 font-semibold font-sans text-lg flex justify-center items-center text-white">
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Addform;
