import React, { FC, useState, useEffect, useContext, useCallback } from "react";
import "./css/homeScreenControlls.css";
// additional components //
import PowerSwitchComponent from "./PowerSwitchComponent";
import { Store } from "../../state/Store";
import { ModernClassicSwitch } from "../switches/ModernClassicSwitch";

interface InitialGreeting {
  title: string,
  greeting: string[],
  instructions: string[]
};

const greeting: InitialGreeting = {
  title: "Terminal",
  greeting: ["Hello there and welcome..."],
  instructions: [
    "Please enter your name",
    "Or Please select option",
    "'1'=Load modern version",
    "'2'=Chat with us",
    "'3'=Play a game",
    "'4'=Turn off terminal",
    "'5'=Help"
    ///"Please select option"
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
  //const stabledispatch = useCallback(dispatch, []);
  const stableDispatchWithTimeout = useCallback(dispatchWithTimeout, []);
 
  const turnOnPowerSwitch = (e: React.MouseEvent): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      dispatch({ type: "POWER_ON", payload: {} });
      dispatch({ type: "SET_GREETING", payload: greeting });
      stableDispatchWithTimeout("SCREEN_LOADED", null, 1000);
    } else {
      dispatch({ type: "POWER_ON", payload: {} });
      dispatch({ type: "SET_GREETING", payload: greeting });
      stableDispatchWithTimeout("SCREEN_LOADED", null, 1000);
    }
  };
  const turnOffPowerSwitch = (e: React.MouseEvent): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      dispatch({ type: "POWER_OFF", payload: {} });
      dispatch({ type: "CLEAR_GREETING", payload: { title: "", greeting: [], instructions: [] } });
      stableDispatchWithTimeout("SCREEN_UNLOADED", null, 500);
    } else {
      dispatch({ type: "POWER_OFF", payload: {} });
      dispatch({ type: "CLEAR_GREETING", payload: { title: "", greeting: [], instructions: [] } });
      stableDispatchWithTimeout("SCREEN_UNLOADED", null, 500);
    }
  };

  // lifecycle hooks //
  useEffect(() => {
    const powerButtonSound: HTMLAudioElement = new Audio("./../../media/sounds/keys/power_button.mp3");
    setPowerButtonSound(powerButtonSound);
  }, []);

  /*
  useEffect(() => {
    
    if (powerButtonSound && !screenState.powerOn) {
      setTimeout(() => {
        powerButtonSound.play();
        stabledispatch({ type: "SET_GREETING", payload: greeting });
        stabledispatch({ type: "POWER_ON", payload: {} });
        stableDispatchWithTimeout("SCREEN_LOADED", null, 1000);
      }, 1000);
     
    }
  }, [ powerButtonSound, screenState.powerOn, stabledispatch, stableDispatchWithTimeout ])
  */
 
  return (
    <div id="crtControls">
      <PowerSwitchComponent 
        title={"My Retro TV"}
        powerOn={screenState.powerOn}
        turnOnPowerSwitch={turnOnPowerSwitch}
        turnOffPowerSwitch={turnOffPowerSwitch}
      />
      <ModernClassicSwitch />
    </div>
  );
};

export default HomeScreenControlls;
