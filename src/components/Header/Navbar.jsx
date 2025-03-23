import { FiSearch } from "react-icons/fi";
import {motion} from 'framer-motion'


const Navbar = () => {
  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0px 0px 10px rgba(255,255,255,0.2)", transition: { duration: 0.2 } },
    tap: { scale: 0.9 },
  };
    return (
      <header className="h-14 w-full pl-2 flex justify-between pt-3">
        <div className="relative w-full max-w-md mr-5">
         <FiSearch className="absolute left-2 top-5 transform -translate-y-1/2 text-gray-400 p-1 text-3xl rounded-full"/>
         <input
           type="text"
           placeholder="Search..."
           className="w-full py-2 pl-10 pr-4 bg-gray-800 text-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 caret-green-400" />     
        </div>

        <div className="float-right mr-5 mb-1 flex flex-row gap-x-5">
           <motion.button variants={buttonVariants} whileHover="hover" whileTap="tap" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:scale-105 transition-all duration-300]">SignUp</motion.button>
           <motion.button variants={buttonVariants} whileHover="hover" whileTap="tap" className="px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 text-white font-semibold shadow-md hover:scale-105 transition-all duration-300]">Login</motion.button>
        </div>
      </header>
    );
  };
export default Navbar;
