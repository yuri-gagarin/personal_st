import React, { MouseEvent, FC, useState, useContext } from "react";
import "./css/homeScreenComponent.css";
//import crtBezel from "../../public/images/screen/crt_bezel.jpg";

interface HomeScreenProps {
  title: string
};

const HomeScreenComponent: FC<HomeScreenProps> = (props: HomeScreenProps): JSX.Element => {
  const { title } = props;
  const on = true;
  const handleClick = (e: MouseEvent) => {

  };

  return (
    <div id="mainMonitorBezel">
      <div id="mainMonitor">
        <div id="monitorCRT" className={`${on ? "turn-off off": "on"}` } onClick={handleClick}>
        <div className="monitorScanline"></div>
        <div className="terminal"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenComponent;