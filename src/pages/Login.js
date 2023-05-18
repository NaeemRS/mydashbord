import React from 'react'
import Columnchart from '../components/columnchart'
import Columnchart1 from '../components/columnchart1'
const Login = () => {
    return <>
        <div className='flex gap-3 items-center'>
            <div className='lg:w-1/2 w-full'>
               <div className='bg-gray-400 rounded-lg flex gap-3 items-center'>
               <Columnchart />
                <Columnchart1 />
               </div>
            </div>
            <div className='lg:w-1/2 w-full'>
            <div className='bg-gray-400 rounded-lg flex gap-3 items-center'>
                <Columnchart />
                <Columnchart1 />
                </div>
            </div>
        </div>
    </>
}

export default Login
