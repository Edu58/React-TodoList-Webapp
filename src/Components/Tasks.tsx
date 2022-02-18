import { FunctionComponent } from "react";

 
const Tasks: FunctionComponent= () => {
    return ( 
        <div className="min-h-full flex items-center justify-center mt-10">
            <div className="bg-white shadow overflow-auto rounded">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Task List</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Heres a list of your tasks</p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dd className="text-sm font-medium text-gray-900">Full name</dd>
                        <dt className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">Margot Foster</dt>
                    </div>
                    </dl>
                </div>
            </div>
        </div>
     );
}
 
export default Tasks;