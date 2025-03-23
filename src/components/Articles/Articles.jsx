import { useState } from "react";
import ArticlesCard from "./ArticlesCard";
import Heading from '../Heading'
import {FaSort, FaAngleRight } from "react-icons/fa";


const articles = [
  {
    title: "How to avoid bugs using modern C++",
    author: "PVSCoder",
    date: "Sep 16, 2016",
    rating: 4.3,
    votes: 919,
    categories: ["Tips and Tricks", "C++11", "Standard Library","Algorithms","Unix/Linux programming"],
  },
  {
    title: "Learning Computer Programming Terminology",
    author: "Sean Alvarez",
    date: "Aug 25, 2016",
    rating: 3.7,
    votes: 456,
    categories: ["How-To","Graphics and multimedia","Source Code"],
  },
  {
    title: "C++ class for generate Fibonacci series",
    author: "mhcrnl",
    date: "Aug 9, 2016",
    rating: 3.6,
    votes: 723,
    categories: ["C++11", "Source Code","Language Features"],
  },
  {
    title: "Dynamically sorting both keys and values",
    author: "shimon",
    date: "Sep 24, 2014",
    rating: 3.5,
    votes: 359,
    categories: [ "Algorithms","Visual C++","Windows API"],
  },
  {
    title: "Virtual Method Table and accident prevention",
    author: "AndreyKarpov",
    date: "Oct 10, 2014",
    rating: 3.9,
    votes: 98,
    categories: ['Visual C++',' Tips and Tricks'],
  },
  {
    title: "Finding Skype's Default Account Name",
    author: "Michael Haephratis",
    date: "Oct 20, 2014",
    rating: 3.9,
    votes: 29,
    categories: ["C++11", "Source Code","Language Features"],
  },

  {
    title: "Declarations, Prototypes, Definitions, and Implementations",
    author: "Esslercuffi",
    date: "Oct 26, 2014",
    rating: 4.2,
    votes: 585,
    categories: ["Language Features", "How-To"," Standard Library"],
  },
  {
    title: "Split a String",
    author: "bayusetiaji",
    date: "Nov 14, 2014",
    rating: 3.8,
    votes: 758,
    categories: ["How-To", "C++ 11", "Tips and Tricks"],
  },
  {
    title: "A simple OpenGL animation with glfw, step by step",
    author: "biicode",
    date: "Dec 2, 2014",
    rating: 4.1,
    votes: 294,
    categories: [" Graphics and multimedia","C++ 11"],
  },

  {
    title: "How I Learned A Vital Borland C++ Coding Technique I Couldn't Learn Alone",
    author: "analyzoh",
    date: "Mar 23, 2016",
    rating: 3.6,
    votes: 202,
    categories: ["How-To", "Source Code", "Tips and Tricks"],
  },
  {
    title: "Safe Clearing of Private Data",
    author: "AndreyKarpov",
    date: "Apr 6, 2016",
    rating: 4.6,
    votes: 143,
    categories: ["Tips and Tricks", "Language Features","How-To","Tools and Libraries"],
  },
  {
    title: "C++ casting",
    author: "Uk Marine",
    date: "May 15, 2016",
    rating: 4.0,
    votes: 472,
    categories: ["Visual C++", "Tips and Tricks", "Source Code", "How-To","Compilers"],
  },
];

export default function Articles() {
  const [sortBy, setSortBy] = useState("date");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const sortedArticles = [...articles].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    return new Date(b.date) - new Date(a.date);
  });

  const filteredArticles = selectedCategory === "All"
    ? sortedArticles
    : sortedArticles.filter(article => article.categories.includes(selectedCategory));
   
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const handlePrev = () => {
      if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };
    const handleNext = () => {
      if (currentPage <= totalPages) setCurrentPage(prev => prev + 1);
    };
  
  return (
    <div className="p-6">
      <Heading title="Articles" />
      <div className="flex justify-end mb-6">
        <div className="flex gap-4 max-lg:mt-5">

          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm"
          >
            <option>All</option>
            {[...new Set(articles.flatMap(a => a.categories))].map((cat, i) => (
              <option key={i}>{cat}</option>
            ))}
          </select>
          
          <button
            onClick={() => setSortBy(sortBy === "date" ? "rating" : "date")}
            className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm flex items-center gap-2"
          >
            <FaSort /> {sortBy === "date" ? "Sort by Rating" : "Sort by Date"}
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ArticlesCard filteredArticles={filteredArticles} />
      </div>
      <div className="flex gap-3 items-center justify-center mt-5">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`flex items-center px-4 py-2 text-white rounded-lg ${
          currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 cursor-pointer hover:shadow-xs hover:shadow-white hover:border-1 hover:border-white"
        }`}
      >
        <FaAngleRight className="w-4 h-4 mr-1 rotate-180" />
        Previous
      </button>

        <span className="text-md text-gray-300">
          Page {currentPage} of {totalPages}
        </span>

        <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center px-3 py-2 text-white rounded-lg ${
          currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 cursor-pointer hover:shadow-xs hover:shadow-white hover:border-1 hover:border-white"
        }`}
        >
        Next
        <FaAngleRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>

  );
}
