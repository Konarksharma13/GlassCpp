import React from 'react'
import { ImFilesEmpty } from "react-icons/im";
import {motion} from 'framer-motion'
import { SiTicktick } from "react-icons/si";
import {cardVariants,hoverCard} from '../animate'
import { Link } from 'react-router-dom';


function ForumCard({data}) {
  return (
    <>
      {data.map((post, index) => (
        <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={hoverCard}
          key={index}
          className="bg-gray-800 text-white p-6 rounded-xl shadow-md w-full max-sm:w-80 max-w-sm relative h-50">  
         <Link to='/soon'>
            <div className="text-lg font-semibold text-white">{post.completed ? <ImFilesEmpty  className='inline-block mr-1' />: <SiTicktick className='text-green-400 inline-block mr-1' />} <span className='hover:hover:text-green-400'>{post.title}</span></div>
         </Link>
          <p className="text-sm text-gray-300 mt-4">
            <span className="text-blue-300">{post.category}</span> | by{" "}
            <Link to='/soon'><button className="font-semibold text-white hover:hover:text-green-400">{post.author}</button></Link> | {post.replies} replies |{" "}
            <span className="text-gray-400">{post.time}</span>
          </p>
        </motion.div>
      ))}
    </>
  )
}

export default ForumCard

       
  