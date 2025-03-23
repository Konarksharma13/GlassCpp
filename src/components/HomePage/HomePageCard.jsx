import React from 'react'
import {motion} from 'framer-motion'
import {cardVariants,hoverCard ,buttonVariants} from '../animate'
import { Link } from 'react-router-dom'


function HomePageCard({item}) {
  
  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={hoverCard }
      href={item.link}
      className="bg-gray-800 text-white p-6 rounded-xl shadow-md w-full max-sm:w-80 max-w-sm relative">
      <div>
        <h2 className="text-xl font-semibold mb-3"> <item.icon className={`w-6 h-6 ${item.color} inline-block mr-3`} /> {item.title}</h2>
        <p className="text-gray-400 text-sm mb-14">{item.description}</p>
        <Link to={item.to}>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap" className="cursor-pointer absolute bottom-4 bg-green-500 text-white px-4 py-2 rounded-lg">{item.button}</motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default HomePageCard