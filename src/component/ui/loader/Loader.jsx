import { Html, useProgress } from "@react-three/drei";
import "./Loader.scss";

function Loading() {
  const { progress } = useProgress();

  return (
    <Html fullscreen>
      <div className="loading-screen">
        <div className="logo-container">
          <div className="upper-img">
            <img src={"/assets/loading-screen/iiitdm.png"} alt=""></img>
          </div>
          <div className="loader ">
            <progress value={progress} max="100">
              Downloading...
            </progress>
          </div>
          {/* <div className="lower-img">
              <img src={lower}></img>
            </div> */}
        </div>
      </div>
    </Html>
  );
}

export default Loading;
