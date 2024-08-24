import React from 'react'
import Data from "./Data"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='pr-5 pl-5 p-4 flex justify-between bg-black bg-opacity-40 text-white fixed w-full z-50'>

        <Link to='/'>MovieSphere</Link>
        <div className='space-x-4'>
          <div className='lines hidden'>=</div>
          <Link className='links' to='/Movies/Popular'>Popular</Link>
          <Link className='links' to='/Movies/Top_rated'>Top Rated</Link>
          <Link className='links' to='/Movies/Upcoming'>Upcoming</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
