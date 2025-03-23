import { FaBookOpen, FaCode } from "react-icons/fa";
import Heading from '../Heading'
import ReferenceCard from "./ReferenceCard";
import images from '../iostream.gif'

const referencesC = [
  { name: "<cassert>", description: "C Diagnostics Library" },
  { name: "<cctype>", description: "Character handling functions" },
  { name: "<cerrno>", description: "C Errors" },
  { name: "<cfenv>", description: "Floating-point environment"},
  { name: "<cfloat>", description: "Characteristics of floating-point types" },
  { name: "<cinttypes>", description: "C integer types"},
  { name: "<ciso646>", description: "ISO 646 Alternative operator spellings"  },
  { name: "<climits>", description: "Sizes of integral types" },
  { name: "<clocale>", description: "C localization library"},
  { name: "<cmath>", description: "C numerics library" },
  { name: "<csetjmp>", description: "Non local jumps"},
  { name: "<csignal>", description: "C library to handle signals"},
  { name: "<cstdarg>", description: "Variable arguments handling" },
  { name: "<cstdbool>", description: "Boolean type" },
  { name: "<cstddef>", description: "C Standard definitions" },
  { name: "<cstdint>", description: "Integer types" },
  { name: "<cstdio>", description: "C library to perform I/O operations"},
  { name: "<cstdlib>", description: "C Standard General Utilities Library" },
];

const containers = [
  { name: "<array>", description: "Array header" },
  { name: "<bitset>", description: "Bitset header" },
  { name: "<deque>", description: "Deque header" },
  { name: "<forward_list>", description: "Forward list"},
  { name: "<list>", description: "List header" },
  { name: "<map>", description: "Map header"},
  { name: "<queue>", description: "Queue header "  },
  { name: "<set>", description: "Set header" },
  { name: "<stack>", description: "Stack header"},
  { name: "<unordered_map>", description: "Unordered map header" },
  { name: "<unordered_set>", description: "Unordered set headers"},
  { name: "<vector>", description: "Vector header"},
];
const atomics = [
  { name: "<atomic>", description: "Atomic" },
  { name: "<condition_variable>", description: "Condition variable" },
  { name: "<future>", description: "Future" },
  { name: "<mutex>", description: "Mutex"},
  { name: "<thread>", description: "Thread" },
];

const headers = [
  { name: "<algorithm>", description: "Standard Template Library: Algorithms" },
  { name: "<chrono>", description: "Time library" },
  { name: "<codecvt>", description: "Unicode conversion facets" },
  { name: "<complex>", description: "Complex numbers library"},
  { name: "<exception>", description: "Standard exceptions" },
  { name: "<functional>", description: "Function objects"},
  { name: "<initializer_list>", description: "Initializer list"  },
  { name: "<iterator>", description: "Iterator definitions" },
  { name: "<limits>", description: "Numeric limits"},
  { name: "<locale>", description: "Localization library" },
  { name: "<memory>", description: "Memory elements"},
  { name: "<new>", description: "Dynamic memory"},
  { name: "<numeric>", description: "Generalized numeric operations" },
  { name: "<random>", description: "Random" },
  { name: "<ratio>", description: "Ratio header" },
  { name: "<regex>", description: "Regular Expressions" },
  { name: "<stdexcept>", description: "Exception classes"},
  { name: "<string>", description: "Strings" },
  { name: "<system_error>", description: "System errors" },
  { name: "<tuple>", description: "Tuple library" },
  { name: "<typeindex>", description: "Type index"},
  { name: "<typeinfo>	", description: "Type information" },
  { name: "<type_traits>", description: "type_traits" },
  { name: "<utility>", description: "Utility components" },
  { name: "<valarray>", description: "Library for arrays of numeric values"},
];

const ip = []

const Reference = () => {
  return (
    <div className="p-6">
      <Heading title="Reference" />
      <p className="text-lg font-medium my-6 flex items-center gap-2">
        <FaBookOpen className="text-blue-500" />
        Standard C++ Library Reference
      </p>
      <ReferenceCard 
        reference={referencesC}
        title="C Library"
        text="The elements of the C language library are also included as a subset of the C++ Standard library. These cover many aspects, from general utility functions and macros to input/output functions and dynamic memory management functions"
      />

      <ReferenceCard 
        reference={containers}
        title="Containers"
        text=""
      />
      
      <ReferenceCard 
        reference={ip}
        title="Input/Output Stream Library"
        text="Provides functionality to use an abstraction called streams specially designed to perform input and output operations on sequences of character, like files or strings. This functionality is provided through several related classes, as shown in the following relationship map, with the corresponding header file names on top:"
        img={images}
      />

      <ReferenceCard 
        reference={atomics}
        title="Atomics and threading library"
        text=""
      />

      <ReferenceCard 
        reference={headers}
        title="Miscellaneous headers"
        text=""
      />

      <ReferenceCard 
        reference={[]}
        title="Update progress"
        text="Work is under progress to update the whole reference to the latest standard. To check the status of each header, see Update progress."
      />
    </div>
  );
};

export default Reference;
