import React from "react";
import "./style.css";

//wraps arpund the entire body
function Wrapper(props) {
    console.log(props.children)
  return <div className="wrapper">
          <h1>{props.paragraphContent}</h1>
          {props.children}
          </div>;
}

export default Wrapper;