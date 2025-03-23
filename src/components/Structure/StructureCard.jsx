import React from 'react'
import {FaPlay } from "react-icons/fa";

function StructureCard() {

    const structure =  `
    The left panel above shows the C++ code for this program. The right panel shows the result when the program is executed by a computer. The grey numbers to the left of the panels are line numbers to make discussing programs and researching errors easier. They are not part of the program.

    Let's examine this program line by line:

    Line 1: // my first program in C++
    Two slash signs indicate that the rest of the line is a comment inserted by the programmer but which has no effect on the behavior of the program. Programmers use them to include short explanations or observations concerning the code or program. In this case, it is a brief introductory description of the program.

    Line 2: #include <iostream>
    Lines beginning with a hash sign (#) are directives read and interpreted by what is known as the preprocessor. They are special lines interpreted before the compilation of the program itself begins. In this case, the directive #include <iostream>, instructs the preprocessor to include a section of standard C++ code, known as header iostream, that allows to perform standard input and output operations, such as writing the output of this program (Hello World) to the screen.

    Line 3: A blank line.
    Blank lines have no effect on a program. They simply improve readability of the code.

    Line 4: int main ()
    This line initiates the declaration of a function. Essentially, a function is a group of code statements which are given a name: in this case, this gives the name "main" to the group of code statements that follow. Functions will be discussed in detail in a later chapter, but essentially, their definition is introduced with a succession of a type (int), a name (main) and a pair of parentheses (()), optionally including parameters.

    The function named main is a special function in all C++ programs; it is the function called when the program is run. The execution of all C++ programs begins with the main function, regardless of where the function is actually located within the code.

    Lines 5 and 7: { and }
    The open brace ({) at line 5 indicates the beginning of main's function definition, and the closing brace (}) at line 7, indicates its end. Everything between these braces is the function's body that defines what happens when main is called. All functions use braces to indicate the beginning and end of their definitions.

    Line 6: std::cout << "Hello World!";
    This line is a C++ statement. A statement is an expression that can actually produce some effect. It is the meat of a program, specifying its actual behavior. Statements are executed in the same order that they appear within a function's body.

    This statement has three parts: First, std::cout, which identifies the standard character output device (usually, this is the computer screen). Second, the insertion operator (<<), which indicates that what follows is inserted into std::cout. Finally, a sentence within quotes ("Hello world!"), is the content inserted into the standard output.

    Notice that the statement ends with a semicolon (;). This character marks the end of the statement, just as the period ends a sentence in English. All C++ statements must end with a semicolon character. One of the most common syntax errors in C++ is forgetting to end a statement with a semicolon.

    You may have noticed that not all the lines of this program perform actions when the code is executed. There is a line containing a comment (beginning with //). There is a line with a directive for the preprocessor (beginning with #). There is a line that defines a function (in this case, the main function). And, finally, a line with a statements ending with a semicolon (the insertion into cout), which was within the block delimited by the braces ( { } ) of the main function.

    The program has been structured in different lines and properly indented, in order to make it easier to understand for the humans reading it. But C++ does not have strict rules on indentation or on how to split instructions in different lines. For example, instead of`

  return (
    <>
        <p className='my-3 underline underline-offset-8 text-lg font-semibold'>Structure of a program</p>
        <p className="text-gray-300">
            The best way to learn a programming language is by writing programs. Typically, the first program beginners write is a program called "Hello World", which simply prints "Hello World" to your computer screen. Although it is very simple, it contains all the fundamental components C++ programs have:
        </p>
        
          <div className="bg-gray-800 p-4 rounded-lg w-full flex text-sm max-sm:flex-col max-sm:gap-y-3 gap-x-3">
            <div className=" bg-gray-900 text-green-400 p-4 border border-gray-700 rounded whitespace-pre-line md:w-1/2">
              {`// my first program in C++
                #include <iostream>
                int main()
                {
                std::cout << "Hello World!";
                }`}
            </div>
            <div className=" bg-gray-900 text-gray-200 p-4 border border-gray-700 rounded md:w-1/2">
              <h3 className="text-lg font-semibold flex items-center">
                <FaPlay className="mr-2" /> Output
              </h3>
              <div className="mt-1 p-3 text-green-300">Hello World!</div>
            </div>
          </div>
        <p className="whitespace-pre-line">{structure}</p>
        <div className="bg-gray-800 p-4 rounded-lg w-full flex text-sm max-sm:flex-col max-sm:gap-y-3 gap-x-3">
            <div className=" bg-gray-900 text-green-400 p-4 border border-gray-700 rounded whitespace-pre-line md:w-1/2">
              {`int main ()
                {
                std::cout << " Hello World!";
                }`
                }
            </div>
        </div>
        <p>We could have written:</p>
        <div className="bg-gray-800 p-4 rounded-lg w-full flex text-sm max-sm:flex-col max-sm:gap-y-3 gap-x-3">
        <div className=" bg-gray-900 text-green-400 p-4 border border-gray-700 rounded whitespace-pre-line md:w-1/2">
              {`int main () { std::cout << "Hello World!"; }`}
            </div>
        </div>
        <p className="whitespace-pre-line">{`all in a single line, and this would have had exactly the same meaning as the preceding code.
            
            In C++, the separation between statements is specified with an ending semicolon (;), with the separation into different lines not mattering at all for this purpose. Many statements can be written in a single line, or each statement can be in its own line. The division of code in different lines serves only to make it more legible and schematic for the humans that may read it, but has no effect on the actual behavior of the program.

            Now, let's add an additional statement to our first program:`
        }</p>
         <div className="bg-gray-800 p-4 rounded-lg w-full flex text-sm max-sm:flex-col max-sm:gap-y-3 gap-x-3">
         <div className=" bg-gray-900 text-green-400 p-4 border border-gray-700 rounded whitespace-pre-line md:w-1/2">
              {`// my second program in C++
                #include <iostream>

                int main ()
                {
                std::cout << "Hello World! ";
                std::cout << "I'm a C++ program";
                }}`}
            </div>
            <div className=" bg-gray-900 text-gray-200 p-4 md:w-1/2 border border-gray-700 rounded">
              <h3 className="text-lg font-semibold flex items-center">
                <FaPlay className="mr-2" /> Output
              </h3>
              <div className="mt-1 p-3 text-green-300">Hello World! I'm a C++ program</div>
            </div>
        </div>

        <p>In this case, the program performed two insertions into std::cout in two different statements. Once again, the separation in different lines of code simply gives greater readability to the program, since main could have been perfectly valid defined in this way:</p>

        <div className="bg-gray-800 p-4 rounded-lg w-full flex text-sm max-sm:flex-col max-sm:gap-y-3 gap-x-3">
            <div className=" bg-gray-900 text-green-400 p-4 border border-gray-700 rounded whitespace-pre-line md:w-1/2">
              {`int main () { std::cout << " Hello World! "; std::cout << " I'm a C++ program "; }`}
            </div>
        </div>
        <p>The source code could have also been divided into more code lines instead:</p>

        <div className="bg-gray-800 p-4 rounded-lg w-full flex text-sm max-sm:flex-col max-sm:gap-y-3 gap-x-3">
            <div className=" bg-gray-900 text-green-400 p-4 border border-gray-700 rounded whitespace-pre-line md:w-1/2">
              {`int main ()
                {
                std::cout <<
                    "Hello World!";
                std::cout
                    << "I'm a C++ program";
                }`}
            </div>
        </div>

        <p className="whitespace-pre-line">{`And the result would again have been exactly the same as in the previous examples.

            Preprocessor directives (those that begin by #) are out of this general rule since they are not statements. They are lines read and processed by the preprocessor before proper compilation begins. Preprocessor directives must be specified in their own line and, because they are not statements, do not have to end with a semicolon (;).`
        }</p>
    </>
  )
}

export default StructureCard