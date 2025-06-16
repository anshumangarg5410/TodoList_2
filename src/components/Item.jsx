import React, { useState } from 'react'
import { useTodos } from '../context/TodoContext'

function Item({todo}) {
    if (!todo) return null;
    const [todoiseditable, settodoiseditable] = useState(false)
    const [todoMsg, settodoMsg] = useState(todo.message)
    const {addTodo, removeTodo, toggleTodo, updateTodo} = useTodos()

    const editTodo = () => {
        updateTodo(todoMsg, todo.id);
        settodoiseditable(false);
    }

    const togglecompleted = () => {
        toggleTodo(todo)
    }
  return (
    <>
        <div className="task h-[50px] w-full bg-green-500 rounded-lg flex justify-evenly items-center ">
            <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={todo.completed} onChange={togglecompleted}
             class="peer hidden w-[10%] " />
            <div class="w-5 h-5 rounded-full border-2 border-red-400 peer-checked:bg-blue-600 npm  peer-checked:border-blue-600 transition-all"></div>
            </label>
            <input
            type="text"
            readOnly
            className="outline-none cursor-not-allowed w-[60%] bg-transparent text-white text-[15px] font-semibold"
            value={todoMsg}
            ></input>
            <div className="edit bg-transparent h-[24px] w-[24px] bg-[url('./assets/editt.png')] bg-cover bg-no-repeat bg-center cursor-pointer"></div>
            <div className="cross bg-transparent h-[24px] w-[24px] bg-[url('./assets/deletee.png')] bg-contain bg-no-repeat bg-center cursor-pointer"></div>
        </div>
    </>
  )
}

export default Item
