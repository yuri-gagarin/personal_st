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
  const handleClick = (e: React.MouseEvent) => {

  };
  console.log("rendered homescreen")

  return (
    <React.Fragment>
      { console.log(appState) }
      <div id="mainMonitorBezel">
        <div id="mainMonitor">
          <div id="monitorCRT" className={`${appState.screenState.powerOn ?  "on" : "turn-off off"}` } onClick={handleClick}>
          <div className="monitorScanline"></div>
          <TerminalScreen />
          </div>
        </div>
      </div>
    </React.Fragment>
    
  );
};

export default HomeScreenComponent;