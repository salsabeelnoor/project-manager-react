import { useState } from "react";
export default function NewTask(){
    const [enteredTask, setEnteredTask] = useState();
    function handleChange(event){
        setEnteredTask(event.target.value);         
    }
    return (
        <div className="flex items-center gap-4">
            <input 
            value={enteredTask}
            onChange={handleChange} 
            type="text" 
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
}