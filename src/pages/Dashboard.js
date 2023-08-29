import React, { useState } from 'react';
import pdf2 from '../images/catalog.png';
import { Link } from 'react-router-dom';
import CreatePdf from '../components/CreatePdf';
import PopularPdf from '../components/PopularPdf';

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
           Generate PDF
          </button>
          <button
            className={`px-4 font-semibold py-2 ${activeTab === 'detail' ? ' text-[#e92424] border-b border-[#e92424]' : 'dark:text-gray-200 text-gray-700 border-b border-transparent'
              }`}
            onClick={() => handleTabChange('detail')}
          >
            Popular Topics
          </button>
        
        
        </div>
        {activeTab === 'transactions' && (
          <>
          <CreatePdf />
          </>
        )}
        {activeTab === 'detail' && (
          <>
          <PopularPdf />
          </>
        )}  
      </div>
    
    </>

  );
};

export default Dashboard;
