import React, { FunctionComponent,useRef } from "react";
import Tasks from "./Tasks";

const InputDiv: FunctionComponent = () => {

    const getTask = useRef<HTMLInputElement>(null);
    const getDeadline = useRef<HTMLInputElement>(null);

    function AddTaskHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const Task = getTask.current?.value;
        const Deadline = getDeadline.current?.value;

        const taskObject = {
            task: Task,
            deadline: Deadline
        }

        fetch("https://react-todolist-a0421-default-rtdb.firebaseio.com/todos.json", {
            method: "POST",
            body: JSON.stringify(taskObject),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
 

     return ( 
        <>
            <div className="min-h-full flex items-center justify-center bg-gray-800 pb-5">
                <form className="mt-8 space-y-2 px-2" onSubmit={AddTaskHandler}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="Task" className="text-white font-bold">
                                Task
                            </label>
                            <input id="task" name="task" type="text" placeholder="enter task" required className=" rounded-sm relative block md:w-96 px-2 py-2 border border-gray-300 placeholder:italic placeholder:text-slate-400 outline-2 outline-offset-1 outline-cyan-200" ref={getTask as React.RefObject<HTMLInputElement>}>
                            </input>
                        </div>
                    </div>
                    
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="Deadline" className="text-white font-bold">
                                Deadline
                            </label>
                            <input id="Deadline" name="Deadline" type="number" placeholder="enter deadline in days e.g. 2" required className=" rounded-sm relative block md:w-96 px-2 py-2 border border-gray-300 placeholder:italic placeholder:text-slate-400 outline-2 outline-offset-1 outline-cyan-200" ref={getDeadline}>
                            </input>
                        </div>
                    </div>
                        
                        <div>
                            <button type="submit" className="group relative w-full mt-3 py-2 border-transparent text-sm font-medium rounded-sm text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500">Add Task</button>
                        </div>
                </form>
            </div>
        </>
     );
}
 
export default InputDiv;