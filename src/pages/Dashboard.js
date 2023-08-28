import React from 'react';
import PdfGeneratorForm from '../components/forms/PdfGeneratorForm';

const pdfs = [
  { name: 'PDF 1', path: '/path/to/pdf1.pdf' },
  { name: 'PDF 2', path: '/path/to/pdf2.pdf' },
  { name: 'PDF 3', path: '/path/to/pdf3.pdf' },
  { name: 'PDF 4', path: '/path/to/pdf4.pdf' },
];

const Dashboard = () => {
  return (
    <div className="md:mt-10 mt-5">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {pdfs.map((pdf, index) => (
          <a
            key={index}
            href={pdf.path}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium p-4 shadow-md rounded-md w-full text-center bg-[#dc262653]"
          >
            <img src={pdfs.images} />
            {pdf.name}
          </a>
        ))}
      </div>
      <PdfGeneratorForm />
    </div>
  );
};

export default Dashboard;
