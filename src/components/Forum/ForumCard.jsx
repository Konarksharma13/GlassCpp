import React from 'react'
import {motion} from 'framer-motion'
import {cardVariants,hoverCard,buttonVariants} from '../animate'
import { Link } from 'react-router-dom'


function ForumCard({title,subTitle,latest}) {
  return (
    <>
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={hoverCard}
          className="bg-gray-800 text-white p-6 rounded-xl shadow-md w-full max-sm:w-80 max-w-sm relative">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">{subTitle}</p>

          <Link to='/soon'>
            <div className="bg-gray-700 text-gray-300 text-xs p-2 rounded-lg mb-15 hover:bg-gray-900 cursor-pointer">
              <span className="font-semibold">Last active topic:</span> {latest}
            </div>
          </Link>

          <Link to='/soon' >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="cursor-pointer absolute bottom-4 bg-green-500 text-white px-4 py-2 rounded-lg">
                Read More →
            </motion.button>
          </Link>
        </motion.div>

    </>
  )
}

export default ForumCard