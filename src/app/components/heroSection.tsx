"use client"
import React, {useState} from "react";

const HeroSection = () => {

const [todo, setTodo] = useState([{task:"Wake Up"}, {task:"Brush Teeth"}])  
const [input, setInput] = useState("")
 
  const addItem = () => {
    setTodo([...todo,{task:input}])
    setInput("")
  }
  const delItem = (task:any) => {
    let newArray = todo.filter((items: any)=> items.task !== task)
    setTodo([...newArray])
  }

  return (
    <>
      <div className="flex justify-center gap-4 p-8">
        <input
          type="text"
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          className="w-[80%] bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2"
          placeholder="Write your task here"
        />
        <button onClick={addItem} className="rounded bg-gradient-to-br  from-purple-700 via-pink-500 to-fuchsia-600 hover:bg-slate-800 text-white w-[20%] p-1">
          <span className="block bg-[#121212] hover:bg-slate-800 rounded">
            ADD TASK
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8 mt-4">
        {
          todo.map((items:any, i:any)=>{
            return(
              <div className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-6" key={i}>
          <div className="flex justify-between">
            <span className="shadow rounded-full shadow-[#33353F] h-5 w-8 text-center cursor-pointer">{i+1}</span>
            <span onClick={()=> delItem(items.task)} className="shadow rounded-full shadow-[#33353F] h-5 w-8 text-center cursor-pointer">X</span>
          </div>
          <div className="mt-5 text-[20px] text-[#9CA2A9]">{items.task}</div>
        </div>

            )
          })
        }
        
      </div>
    </>
  );
};

export default HeroSection;
