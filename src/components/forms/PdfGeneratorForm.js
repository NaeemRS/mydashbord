import React, { useState } from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

const PdfGeneratorForm = () => {
  const [templateName, setTemplateName] = useState('');
  const [pdfFileName, setPdfFileName] = useState('');
  const [pdfHeaderName, setPdfHeaderName] = useState('');
  const [pdfDescription, setPdfDescription] = useState('');
  const [pdfData, setPdfData] = useState(null);

  const generatePdf = () => {
    const pdfContent = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>{pdfHeaderName}</Text>
            <Text>Template Name: {templateName}</Text>
            <Text style={styles.description}>Description:</Text>
            <Text style={styles.listItem}>- {pdfDescription}</Text>
          </View>
        </Page>
      </Document>
    );

    setPdfData(pdfContent);
  };

  return (
    <>
    <div className='mt-20 mb-6'>
    <h2 className="text-2xl font-semibold mb-4"> Please enter Your Detail To Generate PDF</h2>

    </div>
    <div className=" flex space-x-6">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Generate PDF</h2>
        <div className="mb-4">
          <label htmlFor="templateName" className="block text-gray-700 font-medium mb-2">
            Template Name
          </label>
          <input
            type="text"
            id="templateName"
            className="mt-1 p-2 border rounded w-full"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pdfFileName" className="block text-gray-700 font-medium mb-2">
            PDF File Name
          </label>
          <input
            type="text"
            id="pdfFileName"
            className="mt-1 p-2 border rounded w-full"
            value={pdfFileName}
            onChange={(e) => setPdfFileName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pdfHeaderName" className="block text-gray-700 font-medium mb-2">
            PDF Header Name
          </label>
          <input
            type="text"
            id="pdfHeaderName"
            className="mt-1 p-2 border rounded w-full"
            value={pdfHeaderName}
            onChange={(e) => setPdfHeaderName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pdfDescription" className="block text-gray-700 font-medium mb-2">
            PDF Description
          </label>
          <textarea
            id="pdfDescription"
            className="mt-1 p-2 border rounded w-full"
            rows="4"
            value={pdfDescription}
            onChange={(e) => setPdfDescription(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          onClick={generatePdf}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Generate PDF
        </button>
       
      </div>
      <div className="flex-1">
        {pdfData && (
          <div className='h-full'>
            <PDFViewer width={500} height={600}>
              {pdfData}
            </PDFViewer>
          </div>
        )}
      </div>
    </div>
    </>
  );
};
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: '1cm',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '900',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    marginBottom: 5,
  },
  listItem: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 20,
  },
});

export default PdfGeneratorForm;
