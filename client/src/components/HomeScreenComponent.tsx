import React, { MouseEvent } from "react";
import "./HomeScreenComponent.css";
//import crtBezel from "../../public/images/screen/crt_bezel.jpg";

interface HomeScreenProps {
  title: string,
};

const HomeScreenComponent: React.SFC<HomeScreenProps> = (props: HomeScreenProps): JSX.Element => {
  const { title } = props;

  const handleClick = (e: MouseEvent) => {

  };

  return (
    <div id="mainMonitorBezel">
      <div id="mainMonitor">
        <div id="monitorCRT" onClick={handleClick}>
        <div className="monitorScanline"></div>
        <div className="terminal"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenComponent;