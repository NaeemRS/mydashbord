import React from 'react'
import wellcomem from '../images/wellcome.png';

export default function WellCome() {
    return (
        <>
            <section className='bg-black rounded p-6 mx-6'>
                <div className='flex justify-between items-center'>
                    <h1 className="block md:text-4xl w-[266px] lg:mb-5 mb-3 lg:text-[40px] 2xl:text-[40px] text-2xl font-semibold text-[#ffffff] lg:leading-tight dark:text-white">
                    Welcome To Sololegis
                    </h1>
                   <img className='h-[150px]' src={wellcomem} />

                </div>
            </section>
        </>
    )
}
