import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import AboutUs from '../images/aboutus.svg'
import Logo from '../images/logo.svg'
import Contactus from '../images/contactus.svg'
import settings from '../images/setting.svg'
import helps from '../images/help.svg'
import signuot from '../images/signout.svg'

import dashboardi from '../images/dashboard.svg'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    const Menus = [
        { title: 'DASHBOARD', path: '/dashboard', src: <img src={dashboardi} /> },
        { title: 'ABOUT US', path: '/AboutUs', src: <img src={AboutUs} /> },
        { title: 'PRICING PLAN', path: '/Pricingplan', src: <img src={dashboardi} /> },
        { title: 'CONTACT US', path: '/Contact', src: <img src={Contactus} />, gap: 'true' },
        { title: 'SETTING', path: '/login', src: <img src={settings} />, gap: 'true' },
        { title: 'HELP', path: '/login', src: <img src={helps} />, gap: 'true' },
        { title: 'SIGN OUT', path: '/course', src: <img src={signuot} />, gap: 'true' },
    ]
    return (
        <>
            <div
                className='relative h-screen duration-300 bg-white border-r w-full border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800'
            >
                
                <Link to='/'>
                    <div className={`flex ${open && 'gap-x-4'} items-center justify-center`}>
                        <img src={Logo} alt='' className='pl-2' />
                        {open && (
                           <></>
                        )}
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-2' : 'mt-2'} ${
                                    location.pathname === menu.path &&
                                    'bg-gray-200 dark:bg-gray-700'
                                }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && ''
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
