import React, { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import "./Topbar.scss";
import { ContextData } from "../../context/Context";

function Topbar({ setsearch, searchValue }) {
  const [context, setContext] = useContext(ContextData);

  const onClick = (e) => {
    setContext([false, e]);
    setsearch("");
  };

  let query = "";
  const changeSearch = (e) => {
    query = e.target.value;
    setsearch(query);
    if (context[0] === true) {
      let newcontext = [...context];
      newcontext[0] = false;
      setContext(newcontext);
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        className="searchbar"
        name=""
        id=""
        onChange={changeSearch}
        value={searchValue}
        placeholder=" 🔍  Search for stalls..."
      />
      <div className="btnss">
        <button className="btn" onClick={() => onClick("Home")}>
          <HomeIcon />
        </button>
        <button className="btn" onClick={() => onClick("hall001")}>
          Exhibition Hall
        </button>
        <button className="btn" onClick={() => onClick("hall002")}>
          Registration
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtu.be/SwNiSfZSel8"
        >
          <button className="btn">Watch Video</button>
        </a>
      </div>

      {/* <img
        className="brandLogo"
        src="https://storage.googleapis.com/floop_map/projects/kijf/textures/branding.png"
        alt=""
      /> */}
    </div>
  );
}

export default Topbar;
