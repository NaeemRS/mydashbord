import React, { useState } from 'react';
import pdf2 from '../images/catalog.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('transactions');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className=" w-full mx-5 p-5 bg-[#ffffff]">
        <div className="flex mb-4 border-b ">
          <button
            className={`mr-4 px-4 font-semibold py-2 ${activeTab === 'transactions' ? ' text-[#e92424] border-b border-[#e92424]' : 'dark:text-gray-200 text-gray-700 border-b border-transparent'
              }`}
            onClick={() => handleTabChange('transactions')}
          >
            My PDF Template
          </button>
          <button
            className={`px-4 font-semibold py-2 ${activeTab === 'detail' ? ' text-[#e92424] border-b border-[#e92424]' : 'dark:text-gray-200 text-gray-700 border-b border-transparent'
              }`}
            onClick={() => handleTabChange('detail')}
          >
            Popular Topics
          </button> <button
            className={`px-4 font-semibold py-2 ${activeTab === 'Generate' ? ' text-[#e92424] border-b border-[#e92424]' : 'dark:text-gray-200 text-gray-700 border-b border-transparent'
              }`}
            onClick={() => handleTabChange('Generate')}
          >
            Generate PDF
          </button>
        </div>
        {activeTab === 'transactions' && (
          <></>
        )}
        {activeTab === 'detail' && (
          <>
          </>
        )}  {activeTab === 'Generate' && (
          <>
          </>
        )}
      </div>
      <div>
        <div className='flex justify-between w-full p-5 mt-5 items-center'>
          <h1 className="block text-xl sm:text-2xl font-semibold text-[#374151]">
            Product Catalog
          </h1>
          <Link to='/CreatePdf' className="text-sm px-4 py-2 w-[150px] rounded-lg bg-[#E92424] text-white">
            Create Pdf
          </Link>

        </div>
      </div>
      <div>
        <div className='flex w-full mx-5 my-5 items-center'>
          <h1 className="inline-block pb-2 border-b-2 border-red-700 text-xl sm:text-2xl font-semibold text-[#374151]">
            All PDF
          </h1>

        </div>

      </div>
      <div className=' p-5'>

        <div className="flex items-center overflow-hidden px-7 relative bg-white w-full rounded-full shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-8 outline-none rounded-l-full text-gray-700"
          />
          <button className="bg-white  absolute left-0 px-3 h-full ">
            <svg class="h-5 cursor-pointer w-5 text-black" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
          </button>
        </div>
      </div>
      <div

        className="gap-5 lg:py-14 py-6 px-6  flex flex-col items-center justify-center w-full text-center "
      >

        <div className='mb-3'>
          <img src={pdf2} />
        </div>
        <h1 className="block text-xl sm:text-2xl font-semibold text-[#374151]">
        Your catalog is still empty
        </h1>
        <p className='text-center text-gray-600'>
          Add products and start selling in your tokko online store
        </p>

        <button type="" className="text-sm px-4 py-2 w-[150px] rounded-lg bg-[#E92424] text-white">
          Create Pdf
        </button>
      </div>
    </>

  );
};

export default Dashboard;
