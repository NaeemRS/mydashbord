import React, { useState } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative'>
            <button className='' onClick={toggleDropdown}>
                <BsArrowLeftCircle
                    className='text-3xl bg-white fill-slate-800 rounded-full cursor-pointer dark:fill-gray-400 dark:bg-gray-800'
                /></button>
            {isOpen && (
                <ul className='absolute z-40 text-white -right-4 text-center top-[50px] w-[120px] bg-blue-600 rounded-lg p-2'>
                    <li><Link to='' >Option 1</Link></li>
                    <li><Link to='' >Option 2</Link></li>
                    <li><Link to='' >Option 3</Link></li>
                    <li><Link to='' >Option 4</Link></li>
                  
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
