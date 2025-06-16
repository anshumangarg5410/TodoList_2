import { useEffect, useState } from "react";
import "./App.css";
import { ToDoProvider } from "./context/TodoContext";
import Addform from "./components/Addform";
import Item from "./components/Item";

function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    settodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
  }

  const removeTodo = (todo) => {
    settodos((prev) => prev.filter((prevtodo) => todo.id !== prevtodo.id ? true : false))
  }

  const updateTodo = (newmsg, id) => {
    settodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? {...prevtodo, message: newmsg} : prevtodo));
  }

  const toggleTodo = (todo) => {
    settodos((prev) => prev.map((prevtodo) => prevtodo.id === todo.id ? {...prevtodo, completed: !prevtodo.completed} : prevtodo))
  }

  useEffect(() => {
    const localtodo = JSON.parse(localStorage.getItem("todos") || "[]");

    if (localtodo && localtodo.length > 0) {
      settodos(localtodo);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <ToDoProvider value={{todos, addTodo, removeTodo, toggleTodo, updateTodo}}>
      <div className="main h-[500px] w-[370px] border-double flex flex-col items-center bg-white rounded-3xl shadow-lg border border-green-300 
            hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-shadow duration-300 ">
        <div className="header bg-transparent w-full h-[10%] mt-4 flex justify-between px-10 items-center text-[22px] font-bold font-sans">
          <p>To-Do List</p>
          <div className="logo h-[30px] w-[30px] bg-[url('./assets/task.png')] bg-contain bg-no-repeat bg-center"></div>
        </div>

        <Addform/>

        <div className="tasks bg-transparent w-[90%] py-5 h-[90%] gap-[10px] flex flex-col items-center">
          <div className="main h-[100%] flex flex-col gap-[15px]">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>

        </div>
      </div>
    </ToDoProvider>
  );
}
export default App;
