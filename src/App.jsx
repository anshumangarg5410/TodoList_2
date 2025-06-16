import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main bg-white h-[500px] w-[370px] rounded-3xl border-2 border-double flex flex-col items-center shadow-lg">
        <div className="header bg-transparent w-full h-[10%] mt-4 flex justify-start px-10 items-center text-[22px] font-bold font-sans">
          To-Do List
        </div>
        <div className="addinp w-[90%] mt-3 h-[10%] bg-orange-400 flex justify-center items-center rounded-[40px]">
          <div className="input w-[100%] h-full bg-cyan-300 flex rounded-[40px]">
            <div className="inputbox bg-red-400 h-full w-[70%] rounded-[40px]">
              <input
                type="text" 
                className="bg-red-400 outline-none w-full h-full p-5 rounded-l-[40px] text-white font-semi-bold"
              ></input>
            </div>
            <div className="add w-[30%] h-full cursor-pointer rounded-r-[40px] bg-red-500 font-semibold font-sans text-lg flex justify-center items-center text-white">
              Add
            </div>
          </div>
        </div>
        <div className="tasks bg-blue-200 w-[90%] py-5 h-[90%] gap-[10px] flex flex-col items-center rounded-b-3xl border-2">
          <div className="task1 h-[50px] w-full bg-green-500">
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" class="peer hidden" />
              <div class="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all"></div>
            </label>
          </div>
          
        </div>

      </div>
    </>
  );
}
export default App;
