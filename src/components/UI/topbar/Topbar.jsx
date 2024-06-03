import React from "react";
import "./Topbar.scss";
import { Button, Stack, Typography } from "@mui/material";
import { ContextData } from "../../../context/Context";
import { Cameraswitch, MonetizationOn } from "@mui/icons-material";
import { Drawer } from "antd";

function Topbar() {
  const [movement, setMovement] = React.useContext(ContextData);
  const { view, cam, yrotate } = movement;
  const [open, setOpen] = React.useState(false);
  const [childrenDrawer, setChildrenDrawer] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };
  // const organisation = [
  //   { label: "FrontYard" },
  //   { Value: "Home", label: "Home" },
  //   { label: "Hall" },
  //   { label: "Bedroom" },
  //   { label: "Terrace" },
  // ];
  // const movementUpdate = (e, f) => {
  //   console.log(e, f);
  //   setMovement({
  //     forward: false,
  //     backward: false,
  //     left: false,
  //     right: false,
  //     jump: false,
  //     yrotate: false,
  //     yrotateminus: false,
  //     view: e,
  //     cam: f,
  //     room: "Home",
  //   });
  // };

  const onClickButton = () => {
    // console.log(e);
    // if (e == "Home") {
    //   movementUpdate("Home", true);
    // } else if (e == "Auditorium") {
    //   movementUpdate("Auditorium", false);
    let e = "Home";
    if (view === "Home") {
      e = "Auditorium";
    } else {
      e = "Home";
    }
    setMovement((m) => ({ ...m, view: e, cam: !cam }));
    // }
  };

  // const camView = (e) => {
  //   // console.log(e.target.value);
  //   setMovement((m) => ({ ...m, view: "Auditorium", room: e }));
  // };

  return (
    <>
      <Drawer
        title={
          <Stack spacing={2} direction="row" alignItems="center">
            <img
              src={
                "https://media.licdn.com/dms/image/C560BAQE75QA10QuxLA/company-logo_200_200/0/1659990822300?e=1685577600&v=beta&t=XATJZAajUpLVAqmpbhQAp90LC4mUAtJq6Zm_AqLVQIA"
              }
              alt=""
              srcSet=""
              className="nium-logo"
            />
            <Typography variant="h6">Coins Collected : </Typography>
            <Typography variant="h4">{yrotate} </Typography>
          </Stack>
        }
        placement="right"
        onClose={onClose}
        open={open}
        autoFocus={true}
        closable={false}
        // size="large"
      >
        <Stack direction="column" spacing={3}>
          <Button variant="contained" onClick={() => showChildrenDrawer()}>
            Redeem your Coins
          </Button>

          <Button
            variant="outlined"
            color="primary"
            href="https://app.icc.tv/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICC TV
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="https://www.fancraze.com/market"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fancraze NFT Store
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="https://shop.icc-cricket.com/en/?_s=bm-fi-icc-prtsite-icc-holdingpage-150922-JM"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICC Shop
          </Button>
        </Stack>

        <Drawer
          placement="right"
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
          closable={false}
          // size="large"
        >
          <iframe
            src="https://nuron-nextjs.vercel.app/"
            // src="https://www.icc-cricket.com/world-test-championship/predictor/"
            width="100%"
            height="100%"
            allowFullScreen="true"
            title="nft-embeed"
          ></iframe>
        </Drawer>
      </Drawer>
      <div className="container">
        {/* <Stack direction="row" justifyContent={"space-between"}> */}
        <Stack direction="row" justifyContent={"space-between"}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "20px",
              bgcolor: "white",
              margin: "15px",
            }}
            onClick={() => onClickButton()}
            startIcon={<Cameraswitch />}
          >
            {view === "Home" ? "First Person View" : "Bird Eye View"}
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderRadius: "20px",
              bgcolor: "white",
              margin: "15px",
            }}
            size="large"
            onClick={() => showDrawer()}
            startIcon={<MonetizationOn />}
          >
            {yrotate}
          </Button>

          {/* <FormControl
            variant="outlined"
            style={{
              marginTop: 15,
              marginRight: 15,
              width: 125,
            }}
          >
            <Select
              style={{
                background: "white",
                borderRadius: "20px",
                color: "#1976D2",
                borderColor: "#1976D2",
              }}
              size="small"
              defaultValue={"Home"}
              // label="Months"
              // value={selected}
              onChange={(e) => camView(e.target.value)}
            >
              <MenuItem value={"Home"}>Home</MenuItem>
              <MenuItem value={"FrontYard"}>FrontYard</MenuItem>
              <MenuItem value={"Hall"}>Hall</MenuItem>
              <MenuItem value={"Bedroom"}>Bedroom</MenuItem>
              <MenuItem value={"Terrace"}>Terrace</MenuItem>
            </Select>
          </FormControl> */}
        </Stack>
        {/* <button className="btn" onClick={() => onClick("Home")}>
          Bird View
        </button>
        <button className="btn" onClick={() => onClick("Auditorium")}>
          First Person
        </button> */}
        {/* <div className="auto"> */}
      </div>
      {/* </div> */}

      {/* <img className="brandLogo" src={"/assets/naturals.png"} alt="" /> */}
      {/* </div> */}
      {/* <div className="auto"></div> */}

      {view !== "Home" && (
        <>
          {/* <img
            className="instruct1"
            src={"/assets/control2.png"}
            alt=""
            srcSet="" 
           /> */}
          <img
            className="instruct3"
            src={"/assets/control4.png"}
            alt=""
            srcSet=""
          />
        </>
      )}

      <img className="instruct2" src={"/assets/mouse.png"} alt="" srcSet="" />
    </>
  );
}

export default Topbar;
