import React from 'react'
import Sidebar from './components/Header/Sidebar'
import Navbar from './components/Header/Navbar'
import HomePage from './components/HomePage/HomePage'
import Forum from './components/Forum/Forum'
import Articles from './components/Articles/Articles'
import Reference from './components/Reference/Reference'
import Structure from './components/Structure/Structure'
import {Route, Routes } from 'react-router-dom'
import ComingSoon from './components/HomePage/ComingSoon'

function Layout() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className={`flex-1 flex flex-col transition-all duration-300 ml-8` }>
            <Navbar />        
            <main className="rounded-sm flex-1 overflow-y-scroll">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tutorials" element={<Structure />} />
                <Route path="/references" element={<Reference />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/forums" element={<Forum />} />
                <Route path="/soon" element={<ComingSoon />} />
            </Routes>
            </main>
        </div>

  </div>
  )
}

export default Layout