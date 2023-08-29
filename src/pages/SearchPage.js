import React from 'react';
import pdf1 from '../images/pdf1.png';
import pdf2 from '../images/pdf2.png';

const pdfs = [
  { name: 'PDF 1', path: <img src={pdf1} /> },
  { name: 'PDF 2', path: <img src={pdf2} /> },
  { name: 'PDF 3', path: <img src={pdf2} /> },
  { name: 'PDF 4', path: <img src={pdf2} /> },
  { name: 'PDF 5', path: <img src={pdf2} /> },
  { name: 'PDF 6', path: <img src={pdf2} /> },
  { name: 'PDF 7', path: <img src={pdf2} /> },
  { name: 'PDF 8', path: <img src={pdf2} /> },
];

const SearchPage = () => {
  return (
    <div className="md:mt-10 w-full mt-5 p-5 bg-[#F5F5F8]">
      <div className="grid md:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-4">
        {pdfs.map((pdf, index) => (
          <div
            key={index}
            className="text-white font-medium lg:py-14 border-2 border-[#5F5F62] py-6 px-6 shadow-md rounded flex flex-col items-center justify-center w-full text-center bg-white"
          >

          <div className='mb-3'>
          {pdf.path}
          </div>
            <p className='text-center text-gray-600'>
              {pdf.name}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default SearchPage;
