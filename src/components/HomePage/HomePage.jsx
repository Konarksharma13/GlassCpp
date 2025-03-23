import React from 'react'
import HomePageCard from './HomePageCard'
import Heading from '../Heading'
import { BookOpenIcon, NewspaperIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import ForumActivity from '../Forum/Forum';

function HomePage() {
  const tutorials = {
    title: "Tutorials",
    description:
      "Learn this versatile and powerful programming language. Includes detailed explanations of pointers, functions, classes and templates, among others.",
    to: "/tutorials",
    icon:BookOpenIcon,
    color:'text-green-400',
    button:"Read More" 
  };
  
  const reference = {
    title: "Reference",
    description:
      "Description of the most important classes, functions, and objects of the Standard Language Library, with descriptive fully-functional short programs as examples.",
    to: "/references",
    icon: NewspaperIcon,
    color: "text-yellow-400",
    button:"Browse Reference" 
  };
  
  const articles = {
    title: "Articles",
    description:
      "User-contributed articles, organized into different categories. You can contribute your own articles!",
    to: "/articles",
    icon: ChatBubbleLeftIcon,
    color: 'text-blue-400',
    button:"Browse Article"
  };
  
  
  return (
    <div className="py-6">
      <Heading title="Home"/>
      <div className="grid md:grid-cols-3 gap-6 my-8 p-2">
        <HomePageCard item={tutorials} />
        <HomePageCard item={reference} />
        <HomePageCard item={articles} />
      </div>
      <ForumActivity />
    
     </div>
  )
}

export default HomePage