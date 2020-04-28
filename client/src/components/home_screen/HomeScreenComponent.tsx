import React, { MouseEvent, FC, useState, useContext } from "react";
import "./css/homeScreenComponent.css";
//import crtBezel from "../../public/images/screen/crt_bezel.jpg";
import { Store } from "./../../Store";
// additional components //
import TerminalScreen from "./TerminalScreen";

interface HomeScreenProps {
  title: string
};

const HomeScreenComponent: FC<HomeScreenProps> = (props: HomeScreenProps): JSX.Element => {
  const { screenState } = useContext(Store).state;
  const { powerOn, title } = screenState;
  const handleClick = (e: React.MouseEvent) => {

  };

  return (
    <div id="mainMonitorBezel">
      <div id="mainMonitor">
        <div id="monitorCRT" className={`${powerOn ?  "on" : "turn-off off"}` } onClick={handleClick}>
        <div className="monitorScanline"></div>
        <TerminalScreen />
        </div>
      </div>
    </div>
  );
};

export default HomeScreenComponent;