import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main h-[500px] w-[370px] border-double flex flex-col items-center bg-white rounded-3xl shadow-lg border border-green-300 
            hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-shadow duration-300 ">
        <div className="header bg-transparent w-full h-[10%] mt-4 flex justify-between px-10 items-center text-[22px] font-bold font-sans">
          <p>To-Do List</p>
          <div className="logo h-[30px] w-[30px] bg-[url('./assets/task.png')] bg-contain bg-no-repeat bg-center"></div>
        </div>
 
        <div className="addinp w-[90%] mt-3 h-[8%] bg-orange-400 flex justify-center items-center rounded-[40px]">
          <div className="input w-[100%] h-full bg-cyan-300 flex rounded-[40px]">
            <div className="inputbox bg-red-400 h-full w-[70%] rounded-[40px]">
              <input
                type="text"
                className="bg-red-400 outline-none w-full h-full ml-5 rounded-l-[40px] text-white font-semi-bold "
              ></input>
            </div>
            <div className="add w-[30%] h-[100%] cursor-pointer rounded-r-[40px] bg-red-500 font-semibold font-sans text-lg flex justify-center items-center text-white">
              Add
            </div>
          </div>
        </div>
        <div className="tasks bgg-transparent w-[90%] py-5 h-[90%] gap-[10px] flex flex-col items-center">
          {/* task1 */}
          <div className="task h-[50px] w-full bg-green-500 rounded-lg flex justify-evenly items-center ">
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" class="peer hidden w-[10%] " />
              <div class="w-5 h-5 rounded-full border-2 border-red-400 peer-checked:bg-blue-600  peer-checked:border-blue-600 transition-all"></div>
            </label>
            <input
              type="text"
              readOnly
              className="outline-none cursor-not-allowed w-[60%] bg-transparent text-white text-[15px] font-semibold"
              value={"Your todo here! "}
            ></input>
            <div className="edit bg-transparent h-[24px] w-[24px] bg-[url('./assets/editt.png')] bg-cover bg-no-repeat bg-center cursor-pointer"></div>
            <div className="cross bg-transparent h-[24px] w-[24px] bg-[url('./assets/deletee.png')] bg-contain bg-no-repeat bg-center cursor-pointer"></div>
          </div>

        </div>
      </div>
    </>
  );
}
export default App;
