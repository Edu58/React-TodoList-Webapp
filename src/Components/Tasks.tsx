import { FunctionComponent, useEffect, useState } from "react";
import { ITask } from "../Interfaces/TaskInterface";

 
const Tasks: FunctionComponent= () => {
    const [loading, isLoading] = useState(false);
    const [data, receivedData] = useState<ITask[]>([])

    useEffect(() => {
        isLoading(true)
        fetch("https://react-todolist-a0421-default-rtdb.firebaseio.com/todos.json")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const allTodos = []

            for(const key in data){
                const oneTodo = {
                    id: key,
                    ...data[key]
                }

                allTodos.push(oneTodo)
            }

        isLoading(false)
        receivedData(allTodos)
        })
    }, [])

    if(loading) {
        return(
            <div className="text-white flex items-center justify-center">It is loading, please wait</div>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 rounded">
            <table className="w-5/6 divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Task
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Deadline
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((todo) => (
                  <tr key={todo.task}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{todo.task}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{todo.deadline} days</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
        // <div className="min-h-full flex items-center justify-center mt-2">
        //     <div className="bg-white shadow overflow-auto rounded">
        //         <div className="px-4 py-1 sm:px-6">
        //             <h3 className="text-lg leading-6 font-medium text-gray-900">Task List</h3>
        //             <p className="mt-1 max-w-2xl text-sm text-gray-500">Heres a list of your tasks</p>
        //         </div>
        //         <div className="border-t border-gray-200">
                    
        //             {data.map((todo) => {
        //                 return (
        //                     <dl>
        //                     <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6 flex justify-between" key={todo.task}>
        //                         <dd className="text-sm font-medium text-gray-900">{todo.task}</dd>
        //                         <dt className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{todo.deadline} days</dt>
        //                     </div>
        //                     </dl>
        //                 )
        //             })}
                    
        //         </div>
        //     </div>
        // </div>
     );
}
 
export default Tasks;