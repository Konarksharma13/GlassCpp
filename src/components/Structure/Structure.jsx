import {motion} from 'framer-motion'
import Heading from '../Heading'
import StructureCard from "./StructureCard";
import CommentsCard from "./CommentsCard";
import NamespaceCard from "./NamespaceCard";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import {buttonVariants} from '../animate'
import { Link } from 'react-router-dom';

export default function Structure() {

  return (
    <div className="py-6 px-2">
    <Heading title="Structure of a program" />
      {/* Content */}
      <main className="flex-1 p-6 space-y-4">
        <StructureCard />
        <CommentsCard />
        <NamespaceCard />
        <div className='w-full flex gap-5 justify-between items-center'>
            <Link to='/soon'>
              <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-lg">
                    <FaArrowCircleLeft className='inline-block mr-2' />Compilers
              </motion.button>
            </Link>
            <Link to='/soon'>
              <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-lg">
                    Variable and Types<FaArrowCircleRight className='inline-block ml-2' />
              </motion.button>
            </Link>
        </div>
      </main>
    </div>
  );
}
