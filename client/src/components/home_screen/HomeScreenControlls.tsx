import React, { FC, useState, useEffect, useContext, MouseEvent, useReducer } from "react";
import "./css/homeScreenControlls.css";
// additional components //
import PowerSwitchComponent from "./PowerSwitchComponent";
import { Store, AppState, ScreenState } from "../../state/Store";
import screenReducer from "./../../state/reducers/screenReducer";

interface InitialGreeting {
  title: string,
  greeting: string,
  instructions: string[]
};

const greeting: InitialGreeting = {
  title: "Terminal",
  greeting: "Hello there and welcome...",
  instructions: [
    "Please enter your name",
    "Or",
    "Please select option"
  ]
};

const HomeScreenControlls: FC<{}> = (props): JSX.Element => {
  const [powerButtonSound, setPowerButtonSound] = useState<HTMLAudioElement>();
  const initAppState: AppState = useContext(Store);
  // screenState reducer //
  const [ appState, dispatch ] = useReducer(screenReducer, initAppState);
  const screenState: ScreenState = appState.screenState;

  const dispatchWithTimeout = (action: any, payload: any, delay: number): void => {
    setTimeout(() => {
      dispatch({ type: action, payload: payload });
    }, delay);
  };
 
  const turnOnPowerSwitch = (e: React.MouseEvent): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      dispatch({ type: "POWER_ON", payload: null });
      dispatch({ type: "SET_GREETING", payload: greeting });
      dispatchWithTimeout("SCREEN_LOADED", null, 1000);
    } else {
      dispatch({ type: "POWER_ON", payload: null });
      dispatch({ type: "SET_GREETING", payload: greeting });
      dispatchWithTimeout("SCREEN_LOADED", null, 1000);
    }
  };
  const turnOffPowerSwitch = (e: React.MouseEvent): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      dispatch({ type: "POWER_OFF", payload: null });
      dispatch({ type: "CLEAR_GREETING", payload: { title: "", greeting: "", instructions: [] } });
      dispatchWithTimeout("SCREEN_UNLOADED", null, 500);
    } else {
      dispatch({ type: "POWER_OFF", payload: null });
      dispatch({ type: "CLEAR_GREETING", payload: { title: "", greeting: "", instructions: [] } });
      dispatchWithTimeout("SCREEN_UNLOADED", null, 500);
    }
  };

  // lifecycle hooks //
  useEffect(() => {
    const powerButtonSound: HTMLAudioElement = new Audio("./../../media/sounds/keys/power_button.mp3");
    setPowerButtonSound(powerButtonSound);
  }, []);

  useEffect(() => {
    /*
    if (powerButtonSound && !screenState.powerOn) {
      powerButtonSound.play();
      dispatch({ type: "POWER_ON", payload: null });
      dispatch({ type: "SET_GREETING", payload: greeting });
      dispatchWithTimeout("SCREEN_LOADED", null, 1000);
    }
    */
  }, [powerButtonSound])

  return (
    <div id="crtControls">
      { console.log(screenState.powerOn)}
      <PowerSwitchComponent 
        title={"My Retro TV"}
        powerOn={screenState.powerOn}
        turnOnPowerSwitch={turnOnPowerSwitch}
        turnOffPowerSwitch={turnOffPowerSwitch}
      />
    </div>
  );
};

export default HomeScreenControlls;
