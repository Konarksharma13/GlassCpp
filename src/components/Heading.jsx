import React from 'react'
import {motion} from 'framer-motion'

function Heading({title}) {
  return (
    <div 
      className="ml-2">
        <motion.h1  
        style={{overflow:"hidden",whiteSpace:"nowrap"}}
        initial={{width:0}}
      animate={{width:"100%"}}
      transition={{duration:1, ease:'easeInOut'}} className="text-xl font-bold text-gray-100 md:text-4xl">{title}</motion.h1>
    </div>
  )
}

export default Heading