import React, { FC, useState, useEffect, useContext, MouseEvent } from "react";
import "./css/homeScreenControlls.css";
// additional components //
import PowerSwitchComponent from "./PowerSwitchComponent";
import { Store } from "../../Store";

interface InitialGreeting {
  greeting: string,
  instructions: string[]
};

const greeting: InitialGreeting = {
  greeting: "Hello there and welcome...",
  instructions: [
    "Please enter your name",
    "Or",
    "Please select option"
  ]
};

const HomeScreenControlls: FC<{}> = (props): JSX.Element => {
  // const [powerOn, setPowerOn] = useState(true);
  const { state, dispatch } = useContext(Store);
  const { screenState } = state;
  const [powerButtonSound, setPowerButtonSound] = useState<HTMLAudioElement>();

  const dispatchWithTimeout = (action: string, delay: number): void => {
    setTimeout(() => {
      dispatch({ type: action });
    }, delay);
  };
 
  const turnOnPowerSwitch = (e: React.MouseEvent): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      dispatch({ type: "POWER_ON" });
      dispatch({ type: "SET_GREETING", payload: greeting });
      dispatchWithTimeout("SCREEN_LOADED", 1000);
    } else {
      dispatch({ type: "POWER_ON" });
      dispatch({ type: "SET_GREETING", payload: greeting });
      dispatchWithTimeout("SCREEN_LOADED", 1000);
    }
  };
  const turnOffPowerSwitch = (e: React.MouseEvent): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      dispatch({ type: "POWER_OFF" });
      dispatch({ type: "CLEAR_GREETING" });
      dispatchWithTimeout("SCREEN_UNLOADED", 500);
    } else {
      dispatch({ type: "POWER_OFF" });
      dispatch({ type: "CLEAR_GREETING" });
      dispatchWithTimeout("SCREEN_UNLOADED", 500);
    }
  };

  // lifecycle hooks //
  useEffect(() => {
    const powerButtonSound: HTMLAudioElement = new Audio("./../../media/sounds/keys/power_button.mp3");
    setPowerButtonSound(powerButtonSound);
  }, []);
  useEffect(() => {
    if (powerButtonSound && !screenState.powerOn) {
      powerButtonSound.play();
      dispatch({ type: "POWER_ON" });
    }
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
