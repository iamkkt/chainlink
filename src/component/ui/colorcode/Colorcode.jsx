import React from "react";
import "./Colorcode.scss";

function Colorcode() {
  return (
    <div className="card-ui">
      <h3>Ehipassiko</h3>
      <hr className="hrLine" />

      <div className="color-code">
        <p className="color">
          {" "}
          <div className="display-color" id="gold"></div>
          <span>HealthCare</span>
        </p>
        <p className="color">
          {" "}
          <div className="display-color" id="machinery"></div>
          <span>AgriTech</span>{" "}
        </p>
        <p className="color">
          {" "}
          <div className="display-color" id="silver"></div>
          <span>IT</span>{" "}
        </p>
        <p className="color">
          {" "}
          <div className="display-color" id="diamond"></div>
          <span>Clean Tech</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Colorcode;
