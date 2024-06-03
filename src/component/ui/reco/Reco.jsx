import React, { useContext } from "react";
import "./Reco.scss";
// import upper from "../loading-screen/iiitdm.png";
import { ContextData } from "../../context/Context";

function Reco({ value, searchValue }) {
  const [context, setContext] = useContext(ContextData);
  const stallonClick = (e) => {
    searchValue("");
    // console.log(e["uid"]);
    setContext([true, e["uid"]]);
  };

  return (
    <div className="searchrecommendation">
      <div className="all">
        {value.map((item, ind) => {
          return (
            <div className="alls" onClick={() => stallonClick(item.item)}>
              <div className="img-stall">
                <img
                  src={item.item["thumbnail_url"]}
                  alt="Stall Logo"
                  className="search-logo"
                />
              </div>
              <div className="recommendation">
                <div className="name margining ">
                  <b>{item.item["Display_Name"].toUpperCase()}</b>
                </div>
                <div className="stallno margining ">
                  {item.item["Short_description"]}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reco;
