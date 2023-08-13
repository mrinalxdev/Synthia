import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='m-4 shadow-lg py-4 rounded-lg bg-white'>
      <div className="flex justify-center gap-[5rem] font-mono font-bold text-xl">
        <Link to="/">
            Home
        </Link>
        <Link to="/">
            Create Blog
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
