import React from 'react'
import { Link} from "react-router-dom";
function SidebarCard({isOpen,navLinks,location}) {
  
  
  return (
    <nav className="mt-10 space-y-4">
       {navLinks.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  location.pathname.startsWith(link.path)
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                <link.icon className={`w-6 h-6 ${link.color}`} />
                {link.name}
              </Link>

              {isOpen &&
                location.pathname.startsWith(link.path) &&
                link.subLinks &&
                link.subLinks.map((sub, index) => (
                  <Link
                    key={index}
                    to={`${link.path}/${sub.toLowerCase()}`}
                    className="block ml-6 text-sm text-gray-400 hover:text-white"
                  >
                    • {sub}
                  </Link>
                ))}
            </div>
          ))}
    </nav>
  )
}

export default SidebarCard