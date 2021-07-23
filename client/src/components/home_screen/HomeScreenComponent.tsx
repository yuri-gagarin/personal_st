import React, { FC, useContext } from "react";
import styles from "./css/homeScreenComponent.module.css";
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
      <div className={ styles.mainMonitorBezel }>
        <div className={ styles.mainMonitor }>
          <div className={`${styles.monitorCRT} ${screenState.powerOn ? styles.on : styles.off}` } onClick={handleClick}>
            <div className={ styles.monitorScanline }></div>
            <TerminalScreen />
            </div>
        </div>
      </div>
    </React.Fragment>
    
  );
};

export default HomeScreenComponent;