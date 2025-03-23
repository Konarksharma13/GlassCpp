import React from 'react'
import { FaArrowRightLong, FaCode} from "react-icons/fa6";
import { motion } from 'framer-motion'
import { cardVariants, hoverCard } from '../animate'
import { Link } from 'react-router-dom';

function ReferenceCard({reference, title, text, img}) {
  return (
    <div className='my-8'>
      <p className='my-3 underline underline-offset-8 text-lg font-semibold'>{title}</p>
      <p className='my-4'>{text}</p>
      {img && <img src={img} alt="Input/Output Stream Library" />}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {reference.map((ref, index) => (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={hoverCard}
            key={index}
            className="flex items-center gap-2 bg-gray-800 text-white p-2 rounded-xl shadow-md relative">
            <FaCode className="text-blue-500 text-2xl" />
            <div>
              <h2 className="text-lg font-semibold">{ref.name}</h2>
              <p className="text-sm text-gray-500">{ref.description}</p>
            </div>
            <Link to='/soon'>
              <motion.button whileTap={{scale: 1.1 }} whileHover={{rotate:360, transition: { duration: 0.4, ease: "easeInOut" }}} className="cursor-pointer absolute right-2 top-2 bg-green-500 text-white p-1 rounded-full"><FaArrowRightLong  />
            </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ReferenceCard