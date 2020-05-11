import React, { FC, useContext } from "react";
import "./css/homeScreenComponent.css";
//import crtBezel from "../../public/images/screen/crt_bezel.jpg";
import { Store } from "../../state/Store";
// additional components //
import TerminalScreen from "./TerminalScreen";

interface HomeScreenProps {
  title: string
};

const HomeScreenComponent: FC<HomeScreenProps> = (props: HomeScreenProps): JSX.Element => {
  const { state } = useContext(Store);
  const { screenState } = state;
  const handleClick = (e: React.MouseEvent) => {

  };

  return (
    <React.Fragment>
      <div id="mainMonitorBezel">
        <div id="mainMonitor">
          <div id="monitorCRT" className={`${screenState.powerOn ?  "on" : "turn-off off"}` } onClick={handleClick}>
          <div className="monitorScanline"></div>
          <TerminalScreen />
          </div>
        </div>
      </div>
    </React.Fragment>
    
  );
};

export default HomeScreenComponent;