import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, BookOpenIcon, NewspaperIcon, ChatBubbleLeftIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { SiCplusplusbuilder, SiCplusplus } from "react-icons/si";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { sidebarVariants } from "../animate";

const navLinks = [
  { name: "Tutorials", path: "/tutorials", subLinks: ["C++ Language", "Ascii Codes", "Boolean Operations", "Numerical Bases"], icon: BookOpenIcon, color: "text-green-400" },
  { name: "References", path: "/references", subLinks: ["C library", "Containers", "Input/Output", "Multi-threading", "Other"], icon: DocumentTextIcon, color: "text-yellow-400" },
  { name: "Articles", path: "/articles", subLinks: ["Algorithm", "C++ 11", "Graphics and multimedia", "How-To", "Language Features", "Unix/Linux programming", "Source Code", "Standard Library", "Tips and Tricks", "Tools and Libraries", "Visual C++", "Windows API"], icon: NewspaperIcon, color: "text-blue-400" },
  { name: "Forums", path: "/forums", subLinks: ["Beginners", "Windows Programming", "UNIX/Linux Programming", "General C++ Programming", "Lounge", "Jobs"], icon: ChatBubbleLeftIcon, color: "text-purple-400" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);
  const location = useLocation();
  const MotionLink = motion.create(Link);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallScreen(window.innerWidth <= 500);
      if (window.innerWidth <= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isSmallScreen && (
        <div className={`${isOpen ? "w-60" : "w-20"} bg-gray-800 flex flex-col p-4 relative ${isMobile ? "z-50 shadow-lg" : ""}`}>
          {isOpen ? (
            <Link to="/" className="text-2xl font-semibold text-gray-200 tracking-wide flex items-center cursor-pointer">
              <SiCplusplusbuilder className="mr-2" /> Cplusplus.com
            </Link>
          ) : (
            <SiCplusplus className="text-center text-4xl mt-5 text-white cursor-pointer" />
          )}

          <button className="absolute -right-4 top-5 bg-gray-700 text-white p-1 rounded-full shadow-lg hover:scale-110 transition" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>

          <nav className="mt-10 space-y-4 overflow-y-scroll">
            {navLinks.map((link) => (
              <div key={link.path}>
                <MotionLink
                  variants={sidebarVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={location.pathname.startsWith(link.path) ? "" : "hover"}
                  whileTap={location.pathname.startsWith(link.path) ? "" : "tap"}
                  to={link.path}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${location.pathname.startsWith(link.path) ? "bg-black  text-white hover:none" : ""}`}
                >
                  <link.icon className={`w-6 h-6 ${link.color}`} />
                  {isOpen && <span className="text-sm font-semibold">{link.name}</span>}
                </MotionLink>

                {isOpen &&
                  location.pathname.startsWith(link.path) &&
                  link.subLinks &&
                  link.subLinks.map((sub, index) => (
                    <Link key={index} to={`${link.path}/${sub.toLowerCase()}`} className="flex items-center p-2 gap-5 rounded-md cursor-pointer text-sm ml-8 my-2 hover:bg-gray-600">
                      <FaAngleDoubleRight className="w-4 h-4 text-gray-400" />
                      {sub}
                    </Link>
                  ))}
              </div>
            ))}
          </nav>
        </div>
      )}

      {isSmallScreen && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 flex justify-around items-center p-3 shadow-lg z-50">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`flex flex-col items-center ${location.pathname.startsWith(link.path) ? "text-white" : "text-gray-400"}`}>
              <link.icon className={`w-6 h-6 ${link.color}`} />
              <span className="text-xs">{link.name}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
