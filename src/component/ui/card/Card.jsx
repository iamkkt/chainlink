import React from "react";
import "./Card.scss";
import { Button } from "@material-ui/core";

function Card({ value }) {
  // console.log(value);
  const {
    Display_Name,
    Stall_No,
    description,
    thumbnail_url,
    meet,
    website_url,
  } = value;

  let meet1;
  let website;
  if (meet === "null") {
    meet1 = "";
  } else {
    meet1 = meet;
  }
  if (website_url === "null") {
    website = "";
  } else {
    website = website_url;
  }

  return (
    <div className="card-container-logo">
      <div className="card-logo">
        <img className="logo-img" src={thumbnail_url} alt="" srcSet="" />
      </div>
      <div className="contenttitle">
        <h3>{Display_Name}</h3>
      </div>
      <div className="stallNO spacing">Stall No :{Stall_No}</div>
      <div className="description spacing">{description}</div>
      <div className="links">
        <Button
          variant="contained"
          color="primary"
          href={meet1}
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Meet
        </Button>

        <Button
          variant="contained"
          color="primary"
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          External Site
        </Button>
      </div>
    </div>
  );
}

export default Card;
