import React, { FC, useContext } from "react";
import styles from "./css/homeScreenComponent.module.css";
//import crtBezel from "../../public/images/screen/crt_bezel.jpg";
import { Store } from "../../state/Store";
// additional components //
import TerminalScreen from "../terminal_screen/TerminalScreen";
import { InitialWelcomeScreen } from "./InitialWelcomeScreen";
// helpers //
import { dispatchWithTimeout} from "../../state/helpers/generalAppHeplers";
// constants //
import {  INITIAL_INSTRUCTIONS } from "../../state/stringConstants";

interface HomeScreenProps {
  title: string
};

const HomeScreenComponent: FC<HomeScreenProps> = (props: HomeScreenProps): JSX.Element => {
  const { state, dispatch } = useContext(Store);
  const { screenState } = state;
  const { powerOn } = screenState;

  const handleLaunchTerminal = (): void => {
    dispatch({ type: "SET_GREETING", payload: { title: "Title", greeting: [], instructions: INITIAL_INSTRUCTIONS } });
    dispatch({ type: "POWER_ON", payload: {} });
    dispatchWithTimeout(dispatch, { type: "SCREEN_LOADED", payload: {}});
  }

  return (
    <div className={ styles.mainMonitorBezel }>
      <div className={ styles.mainMonitor }>
        { powerOn ?
        <div className={`${styles.monitorCRT} ${screenState.powerOn ? styles.on : styles.off}` }>
          <div className={ styles.monitorScanline }></div>
          <TerminalScreen />
        </div>
        :
         <InitialWelcomeScreen handleLaunchTerminal={ handleLaunchTerminal } />
        }   
      </div>
    </div>
  );
};

export default HomeScreenComponent;