import React, { useEffect, useState } from "react"
import CustomCard from "../../Components/CustomCard/CustomCard";
import "./Builder.scss";
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useNavigate } from 'react-router-dom';
import { replace } from "formik";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReceiptPopUp from "../../Components/ReceiptPopUp/ReceiptPopUp";
const Builder = (props) => {
    const [data, setBuilderData] = useState(null);
    const [building, setBuilding] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();


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
            body: data.map(item => [item.policyNo, item.premiumAmount, item.email, item.mobileNumber]),
            startY: 70, // Start the table below the title and logo
        });

        // Save the PDF
        doc.save('receipt.pdf');
    };



    useEffect(() => {
        const formData = location.state;
        if(formData) {
            setBuilderData(formData.data);
        const timeOut = setTimeout(() => {
            setBuilding(false);
        }, 3000)
        } else {
            navigate('/dashboard')
        }

    }, [])

    return (
        <div className="builderRootContainer">
            {data !== null && <div className="builderMainContainer">
                <CustomCard>
                    {building ? <div className="builderMainContainer">
                        <img className="builderImage" src="./img/builder.gif" alt="" />
                        <div className="builderText">
                            Building Your Receipt ...
                        </div>
                    </div> :

                        <div>
                            <div className="builderMainContainer">
                                <img className="builderImage" src="./img/done.gif" alt="" />
                                <div className="builderText">
                                    Your Payment is Successfull
                                </div>
                                <div className="buttonContainer">
                                    <div className="outlineSolidButton" onClick={() => generatePDF()}>
                                        Download Receipt
                                    </div>

                                    <Popup trigger=
                                        {<div className="outlineSolidButton" onClick={() => generatePDF()}>
                                            View Receipt
                                        </div>} modal
                                        position="center center"> 
                                        {
                                          close => (
                                            <ReceiptPopUp data={data} downloadReceipt={() =>generatePDF()} close= {() => close()}></ReceiptPopUp>

                                          )  
                                        }
                                    </Popup>


                                </div>


                                <div className="builderSolidButton" onClick={() => navigate("/dashboard", { replace: true })}>
                                    Go To Dashboard
                                </div>
                            </div>
                        </div>
                    }

                </CustomCard>

            </div>}
        </div>
    )
};

export default Builder;
