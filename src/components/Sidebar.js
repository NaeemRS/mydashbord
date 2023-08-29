import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AboutUs2 from '../images/aboutusw.svg';
import Contactusw from '../images/contactusw.svg';
import Pricingp2 from '../images/pricingplanw.svg';
import settings2 from '../images/settingw.svg';
import helps2 from '../images/helpw.svg';
import signuot2 from '../images/singoutw.svg';
import dashboardi2 from '../images/dashboardw.svg';

import AboutUs from '../images/aboutus.svg';
import Logo from '../images/logo.svg';
import Pricingp from '../images/pricingplan.svg';
import Contactus from '../images/contactus.svg';
import settings from '../images/setting.svg';
import helps from '../images/help.svg';
import signuot from '../images/signout.svg';
import dashboardi from '../images/dashboard.svg';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();



    const Menus = [
        { title: 'DASHBOARD', path: '/dashboard', src: <img src={dashboardi} />, src1: <img src={dashboardi2} /> },
        { title: 'ABOUT US', path: '/AboutUs', src: <img src={AboutUs} />, src1: <img src={AboutUs2} /> },
        { title: 'PRICING PLAN', path: '/Pricingplan', src: <img src={Pricingp} />, src1: <img src={Pricingp2} /> },
        { title: 'CONTACT US', path: '/Contact', src: <img src={Contactus} />, gap: 'true', src1: <img src={Contactusw} /> },
        { title: 'SETTING', path: '/login', src: <img src={settings} />, gap: 'true', src1: <img src={settings2} /> },
        { title: 'HELP', path: '/login', src: <img src={helps} />, gap: 'true', src1: <img src={helps2} /> },
        { title: 'SIGN OUT', path: '/course', src: <img src={signuot} />, gap: 'true', src1: <img src={signuot2} /> },
    ]
    return (
        <>
            <div className='relative h-screen duration-300 bg-white border-r w-full border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800'>
        <Link to='/'>
          <div className={`flex ${open && 'gap-x-4'} items-center justify-center`}>
            <img src={Logo} alt='' className='pl-2' />
            {open && (
              <></>
            )}
          </div>
        </Link>
        <ul className='pt-6'>
          {/* Dashboard menu is active by default */}
          

          {/* Rest of the menu items */}
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer
                  ${menu.gap ? 'mt-2' : 'mt-2 text'} ${location.pathname === menu.path &&
                  'bg-[#E92424] text-white'}`}
              >
                <span className='text-2xl'>
                  {location.pathname === menu.path ? menu.src1 : menu.src}
                </span>
                <span
                  className={`${!open && ''
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
  );
};

export default Sidebar;
