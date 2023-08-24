import React from 'react';
import PdfGeneratorForm from '../components/forms/PdfGeneratorForm';

const Dashboard = () => {
  return (
    <div className="md:mt-10 mt-5">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
   
          <a
            href="/path/to/pdf1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium p-4 shadow-md rounded-md w-full text-center bg-blue-500"
          >
            PDF 1
          </a>
  <a
            href="/path/to/pdf2.pdf"
            target="_blank"
            rel="noopener noreferrer"
                        className="text-white font-medium p-4 shadow-md rounded-md w-full text-center bg-blue-500"

          >
            PDF 2
          </a>
      
          <a
            href="/path/to/pdf3.pdf"
            target="_blank"
            rel="noopener noreferrer"
                        className="text-white font-medium p-4 shadow-md rounded-md w-full text-center bg-blue-500"

          >
            PDF 3
          </a>
        
      <a
            href="/path/to/pdf4.pdf"
            target="_blank"
            rel="noopener noreferrer"
                        className="text-white font-medium p-4 shadow-md rounded-md w-full text-center bg-blue-500"

          >
            PDF 4
          </a>
       
      </div>
      <PdfGeneratorForm />
    </div>
  );
};

export default Dashboard;
