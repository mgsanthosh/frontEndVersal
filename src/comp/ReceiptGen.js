import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useLocation, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';

const ReceiptGen = () => {

    const location = useLocation();

    const data = location.state.data;

  

  const generatePDF = () => {
    // Initialize jsPDF
    const doc = new jsPDF();

    // Add logo at the top center
    const logo = new Image();
    logo.src = './img/logo.png'; // Replace with the path to your logo
    // doc.addImage(logo, 'PNG', 70, 10, 40, 20); // Adjust the position and size as needed
    doc.addImage(logo, 'PNG', 70, 10, 70, 30); // Adjust the position and size as needed


    // Add a title to the PDF below the logo
    doc.text('Premium Receipt', 10, 60);

    // Auto-generate table from the data array
    doc.autoTable({
      head: [['Policy No', 'Premium Amount', 'Email id', 'Mobile Number']],
      body: data.map(item => [item.pno, item.amt, item.email, item.mobile]),
      startY: 70, // Start the table below the title and logo
    });

    // Save the PDF
    doc.save('receipt.pdf');
  };

  return (
    <div>
      <div className='text-center my-5'>

        <h3>Your Premium has succesfully Paid!</h3>
       
      </div>


      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button color='primary' onClick={generatePDF}>Download Receipt</Button>
      </div>
    </div>
  );
};

export default ReceiptGen;
