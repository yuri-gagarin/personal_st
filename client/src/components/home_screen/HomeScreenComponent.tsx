import React, { FC, useContext } from "react";
import "./css/homeScreenComponent.css";
//import crtBezel from "../../public/images/screen/crt_bezel.jpg";
import { Store, AppState } from "../../state/Store";
// additional components //
import TerminalScreen from "./TerminalScreen";

interface HomeScreenProps {
  title: string
};

const HomeScreenComponent: FC<HomeScreenProps> = (props: HomeScreenProps): JSX.Element => {
  const appState: AppState = useContext(Store);
  console.log(appState);
  const { powerOn } = appState.screenState;
  const handleClick = (e: React.MouseEvent) => {

  };

  console.log(" power is " + powerOn)
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