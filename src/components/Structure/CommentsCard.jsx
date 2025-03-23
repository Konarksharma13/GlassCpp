import React from 'react'
import {FaPlay } from "react-icons/fa";

function CommentsCard() {
  return (
    <>
        <p className='my-3 underline underline-offset-8 text-lg font-semibold'>Using namespace std</p>
        <p className="whitespace-pre-line">{`As noted above, comments do not affect the operation of the program; however, they provide an important tool to document directly within the source code what the program does and how it operates.
        
        C++ supports two ways of commenting code:`
        }</p>
        <div className="bg-gray-800 p-4 rounded-lg w-full flex text-sm max-sm:flex-col max-sm:gap-y-3 gap-x-3">
            <div className=" bg-gray-900 text-green-400 p-4 border border-gray-700 rounded whitespace-pre-line md:w-1/2">
                {`// line comment
                    /* block comment */`}
            </div>
        </div>
        <p className="whitespace-pre-line">{`The first of them, known as line comment, discards everything from where the pair of slash signs (//) are found up to the end of that same line. The second one, known as block comment, discards everything between the /* characters and the first appearance of the */ characters, with the possibility of including multiple lines.

        Let's add comments to our second program`
        }</p>
        <div className="bg-gray-800 p-4 rounded-lg w-full flex text-sm max-sm:flex-col max-sm:gap-y-3 gap-x-3">
            <div className=" bg-gray-900 text-green-400 p-4 border border-gray-700 rounded whitespace-pre-line md:w-1/2">
                {`/* my second program in C++
                    with more comments */

                    #include <iostream>

                    int main ()
                    {
                    std::cout << "Hello World! ";     // prints Hello World!
                    std::cout << "I'm a C++ program"; // prints I'm a C++ program
                }`}
            </div>
            <div className=" bg-gray-900 text-gray-200 p-4 border border-gray-700 rounded md:w-1/2">
                <h3 className="text-lg font-semibold flex items-center">
                <FaPlay className="mr-2" /> Output
                </h3>
                <div className="mt-1 p-3 text-green-300">Hello World! I'm a C++ program</div>
            </div>
        </div>
        <p>If comments are included within the source code of a program without using the comment characters combinations //, /* or */, the compiler takes them as if they were C++ expressions, most likely causing the compilation to fail with one, or several, error messages.</p>
    </>
  )
}

export default CommentsCard