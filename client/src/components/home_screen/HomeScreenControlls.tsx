import React, { FC, useState, useEffect, useContext } from "react";
import "./css/homeScreenControlls.css";
// additional components //
import PowerSwitchComponent from "./PowerSwitchComponent";
import { Store } from "../../state/Store";

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
  const { state, dispatch } = useContext(Store);
  const { screenState } = state;
  // screenState reducer //

  const dispatchWithTimeout = (action: any, payload: any, delay: number): void => {
    setTimeout(() => {
      dispatch({ type: action, payload: payload });
    }, delay);
  };
 
  const turnOnPowerSwitch = (e: React.MouseEvent): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      dispatch({ type: "POWER_ON", payload: {} });
      dispatch({ type: "SET_GREETING", payload: greeting });
      dispatchWithTimeout("SCREEN_LOADED", null, 1000);
    } else {
      dispatch({ type: "POWER_ON", payload: {} });
      dispatch({ type: "SET_GREETING", payload: greeting });
      dispatchWithTimeout("SCREEN_LOADED", null, 1000);
    }
  };
  const turnOffPowerSwitch = (e: React.MouseEvent): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      dispatch({ type: "POWER_OFF", payload: {} });
      dispatch({ type: "CLEAR_GREETING", payload: { title: "", greeting: "", instructions: [] } });
      dispatchWithTimeout("SCREEN_UNLOADED", null, 500);
    } else {
      dispatch({ type: "POWER_OFF", payload: {} });
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
