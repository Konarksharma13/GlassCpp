import React from 'react'
import { FaStar, FaUser, FaCalendarAlt } from "react-icons/fa";
import {motion} from 'framer-motion'
import {cardVariants,hoverCard} from '../animate'
import { Link } from 'react-router-dom';

function ArticlesCard({filteredArticles}) {
  return (
    <>
        {filteredArticles.map((article, index) => (
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={hoverCard}
            key={index}
            className="bg-gray-800 p-5 rounded-xl shadow-md relative"
          >
            <Link to='/soon'>
              <p className="text-xl font-semibold hover:text-green-400 cursor-pointer">
                {article.title}
              </p>
            </Link>

            <div className="flex items-center gap-3 text-gray-400 text-sm mt-5">
              <span className='text-center cursor-pointer hover:text-green-400 text-xs flex gap-2 justify-center items-center'><FaUser className="w-5 h-5 inline-block" /> {article.author}</span>
             
              <span className='text-center text-xs flex gap-2 justify-center items-center'><FaCalendarAlt className=" w-5 h-5 text-gray-400 inline-block" /> {article.date}</span>
            </div>

            <Link to='/soon'>
              <div className="flex flex-wrap gap-2 mt-5 mb-10">
                {article.categories.map((cat, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-md hover:text-green-400"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </Link>

            <div className="flex items-center gap-1 text-yellow-400 absolute bottom-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(article.rating) ? "fill-current" : "opacity-30"}`}
                />
              ))}
              <span className="text-gray-400 text-sm">
                {article.rating}/5 ({article.votes} votes)
              </span>
            </div>
          </motion.div>
        ))}
    </>
  )
}

export default ArticlesCard