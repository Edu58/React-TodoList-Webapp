import { FunctionComponent } from "react";
import { Disclosure } from '@headlessui/react'
 
const Navbar: FunctionComponent = () => {
    return ( 
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/images/tasks.png"
                    alt="ToDo's"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/images/tasks.png"
                    alt="ToDo's"
                  /><span className="text-white font-bold text-lg ml-2">ToDo's</span>
                </div>
              </div>
            </div>
          </div>
    </Disclosure>
     );
}
 
export default Navbar;