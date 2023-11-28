import React from "react"
import "./Loader.scss"
const Loader = (props) => {
  return (
    <div className="loaderMainContainer">
      <img src="/img/loader.gif" className="loaderImage"/>
      <div className="loadingText">Loading ... </div>
    </div>
  )
};

export default Loader;
