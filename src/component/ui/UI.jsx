import React, { useState, useContext } from "react";
import "./ui.scss";
import Fuse from "fuse.js";
import data from "../data/three_data";
import Topbar from "../ui/topbar/Topbar";
import Card from "../ui/card/Card";
import Colorcode from "./colorcode/Colorcode";
import Reco from "./reco/Reco";
import { ContextData } from "../context/Context";

export default function UI() {
  const [context, setContext] = useContext(ContextData);

  const [search, setSearch] = useState("");

  const fuse = new Fuse(data, {
    keys: ["Display_Name", "Short_description"],
    includeScore: true,
  });

  var results = fuse.search(search);

  return (
    <div className="content">
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2&family=Josefin+Sans:wght@300;400&family=Sen&display=swap"
        rel="stylesheet"
      />
      <Topbar setsearch={setSearch} searchValue={search} />
      <div>
        {context[0] === true && (
          <Card value={data.find((element) => element.uid === context[1])} />
        )}
      </div>
      <div>
        {results.length > 0 && <Reco value={results} searchValue={setSearch} />}
      </div>
      <div>{context[1] === "hall001 " && <Colorcode />}</div>
    </div>
  );
}
