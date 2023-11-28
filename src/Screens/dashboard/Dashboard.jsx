import React from "react"
import "./Dashboard.scss";

const Dashboard = (props) => {
    const offerings = [
        {
            "name": "Collect Premium Payments",
        }
    ]
  return (
    <div className="dashboardMainContainer">
        <div>My Dashboard</div>
      {offerings.map((data) => {
         return (<div>{data["name"]}</div>)
      })}
    </div>
  )
};

export default Dashboard;
