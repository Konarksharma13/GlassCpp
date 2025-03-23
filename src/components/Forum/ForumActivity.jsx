import React from 'react'
import ForumCard from './ForumActivityCard'
import { BiCommentDetail } from "react-icons/bi";

function ForumActivity() {
  const forumPosts = [
    {
      title: "Getter for enum member returns a copy of enum?",
      category: "Beginners",
      author: "ElusiveTau",
      replies: 11,
      time: "Mar 19, 2025 at 8:02am",
      link: "#",
      completed:false
    },
    {
      title: "Use C++ 20 with Embarcadero",
      category: "General C++ Programming",
      author: "bistelA0005",
      replies: 4,
      time: "Mar 18, 2025 at 9:06am",
      link: "#",
      completed:true
    },
    {
      title: "Call of Templated Function w/ Explicit Template Argument Fails to Compile",
      category: "General C++ Programming",
      author: "BernardIE5317",
      replies: 1,
      time: "Mar 16, 2025 at 3:50am",
      link: "#",
      completed:false
    },
    {
      title: "I wrote a cron job!",
      category: "Lounge",
      author: "Duthomhas",
      replies: 12,
      time: "Mar 15, 2025 at 11:32pm",
      link: "#",
      completed:false
    },
    {
      title: "Getter for enum member returns a copy of enum?",
      category: "Beginners",
      author: "ElusiveTau",
      replies: 11,
      time: "Mar 19, 2025 at 8:02am",
      link: "#",
      completed:true
    },
    {
      title: "Use C++ 20 with Embarcadero",
      category: "General C++ Programming",
      author: "bistelA0005",
      replies: 4,
      time: "Mar 18, 2025 at 9:06am",
      link: "#",
      completed:false
    },
    {
      title: "Call of Templated Function w/ Explicit Template Argument Fails to Compile",
      category: "General C++ Programming",
      author: "BernardIE5317",
      replies: 1,
      time: "Mar 16, 2025 at 3:50am",
      link: "#",
      completed:false
    },
    {
      title: "I wrote a cron job!",
      category: "Lounge",
      author: "Duthomhas",
      replies: 12,
      time: "Mar 15, 2025 at 11:32pm",
      link: "#",
      completed:true
    },
  ];
  return (
    <>

       <h1 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
        <BiCommentDetail className="text-white" />Latest Forum Activity</h1>
      <div className="p-2 grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
        <ForumCard data={forumPosts}/>
      </div>
    </>
  )
}

export default ForumActivity