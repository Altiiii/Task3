import React, { useState } from 'react'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={`absolute top-0 left-0 h-full mt-10 ${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-blue-600 text-white flex flex-col p-4 transition-all duration-300 shadow-lg`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="text-white bg-gray-800 p-2 rounded mb-6 hover:bg-gray-700 transition"
      >
        {isCollapsed ? '➡️' : '⬅️'}
      </button>

      <nav className="flex flex-col gap-4">
        <a href="/" className="hover:bg-gray-700 p-3 rounded flex items-center gap-2">
          <span>🏠</span>
          {!isCollapsed && <span>Home</span>}
        </a>
        <a href="/create" className="hover:bg-gray-700 p-3 rounded flex items-center gap-2">
          <span>➕</span>
          {!isCollapsed && <span>Create New Transaction</span>}
        </a>
        <a href="/login" className="hover:bg-gray-700 p-3 rounded flex items-center gap-2">
          <span>🔐</span>
          {!isCollapsed && <span>Login/Signup</span>}
        </a>
      </nav>
    </div>
  )
}

export default Sidebar
