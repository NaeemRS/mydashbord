

import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Dropdown from './header/Dropdown'


import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className=' py-2.5 bg-gradient-to-r from-black to-blue-500 via-yellow-500'>
      <div className='container lg:px-20 px-4 flex justify-between items-center mx-auto'>
        <div className=''>
          <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
            Welcome
          </span>
        </div>
        <div className='flex '>
        <Dropdown />
        <div className='w-8 h-8 flex items-center justify-center'>
      {open ? (
        <FontAwesomeIcon
          icon={faTimes}
          className="text-3xl fill-slate-800 lg:hidden inline-block text-white cursor-pointer dark:fill-gray-400 dark:bg-gray-800"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className="text-3xl fill-slate-800 lg:hidden inline-block text-white cursor-pointer dark:fill-gray-400 dark:bg-gray-800"
          onClick={() => setOpen(!open)}
        />
      )}
    </div>
          <div className={`flex  ${open && 'gap-x-4 absolute top-0 left-0'} items-center`}>
            {/* <img src={Logo} alt='' className='pl-2' /> */}
            {open && (
              <div className='lg:hidden'>   <Sidebar /></div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
