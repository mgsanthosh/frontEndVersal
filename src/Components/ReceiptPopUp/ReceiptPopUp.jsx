import React, { useEffect } from "react"
import { Table } from "reactstrap";
import "../../App.scss";
import "../../Screens/Builder/Builder.scss";
const ReceiptPopUp = (props) => {
    useEffect(() => {
        console.log(props);
    })
  return (
    <div className="receiptPopUpContainer">
        <div className="builderText">
            Premium Receipt
        </div>
        <div>
            <img src="./img/logo.png" alt="" />
        </div>
        <Table>
            <thead className="table-header">
                <tr>
                    <th>Policy No</th>
                    <th>Premium Amount</th>
                    <th>Email Id</th>
                    <th>Mobile Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.data[0]["policyNo"]}</td>
                    <td>{props.data[0]["premiumAmount"]}</td>
                    <td>{props.data[0]["email"]}</td>
                    <td>{props.data[0]["mobileNumber"]}</td>

                </tr>
            </tbody>
        </Table>
        <div className="outlineSolidButton" onClick={() => props.downloadReceipt()}>
            Download Receipt
        </div>
    </div>
  )
};

export default ReceiptPopUp;
