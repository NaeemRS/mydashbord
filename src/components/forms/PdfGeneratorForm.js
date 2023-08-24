import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const PdfGeneratorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [pdfData, setPdfData] = useState(null);

  const generatePdf = () => {
    const pdfContent = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Phone Number: {phoneNumber}</Text>
            <Text>Description: {description}</Text>
          </View>
        </Page>
      </Document>
    );

    setPdfData(pdfContent);
  };

  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Generate PDF</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 border rounded w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 border rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="mt-1 p-2 border rounded w-full"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 p-2 border rounded w-full"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
        {pdfData && (
          <div className="mt-4">
            <PDFViewer width={500} height={300}>
              {pdfData}
            </PDFViewer>
          </div>
        )}
      </div>
    </div>
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
});

export default PdfGeneratorForm;