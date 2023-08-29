import React from 'react'
import { Link } from 'react-router-dom'

export default function PopularPdf() {
    const topics = [
        'Adoption',
        'Appeals',
        'Child Custody and Visitation',
        'Child Support',
        'Civil',
        'Civil Harassment',
        'Cleaning Criminal Record',
        'Conservatorship',
        'Discovery and Subpoenas',
        'Divorce',
        'Domestic Violence',
        'Elder Abuse',
        'Enforcement of Judgment',
        'Eviction',
        'Fee Waivers',
        'Gender Change',
        'Guardianship',
        'Juvenile',
        'Language Access',
        'Name Change',
        'Parentage',
        'Probate',
        'Proof of Service',
        'Remote Appearance',
        'Small Claims',
        'Traffic',
    ];
    return (
        <>
            <div className=" text-center w-full py-10 bg-[#540000] rounded-2xl text-white">
                <div className="mb-5">
                    <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Find Your Court Forms.</h2>
                    Search for any topic or form number, view all forms or view all forms by category
                    <h2 className="text-sm">
                        Search for any topic or form number, view all forms or view all forms by category

                    </h2>
                </div>

                <form className='max-w-md w-full mx-auto'>
                    <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                        <div className="w-full">
                            <label className="sr-only">Search</label>
                            <input type="text" id="hero-input"
                                name="hero-input"
                                className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            />
                        </div>
                        <button type='button' className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-[#ffffff] border border-transparent text-black font-medium rounded-md focus:outline-none focus:ring-0 focus:ring-[#2464EA] focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-[#090D0C]">
                            Search
                        </button>
                    </div>
                </form>
            </div>



            <div className="max-w-2xl w-full  mx-auto">
            <h2 className="text-2xl font-bold py-5 md:text-3xl md:leading-tight dark:text-white">
            Popular Topics

            </h2>
                
                <div className="grid grid-cols-2 rounded-lg">
                    {topics.map((topic, index) => (
                        <div key={index} className="p-4 border border-gray-500">
                            <Link to='/SearchPage' className="text-blue-500 hover:underline">
                                {topic}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
