import React, { useState, useEffect, useContext, useCallback } from "react";
import { Store } from "../../state/Store";
import "./css/homeScreenControlls.css";
// additional components //
import PowerSwitchComponent from "./PowerSwitchComponent";
import { ModernClassicSwitch } from "../switches/ModernClassicSwitch";
import { dispatchWithTimeout } from "../../state/helpers/generalAppHeplers";

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



const HomeScreenControlls: React.FC<{}> = (): JSX.Element => {
  const [powerButtonSound, setPowerButtonSound] = useState<HTMLAudioElement>();
  const { state, dispatch } = useContext(Store);
  const { screenState } = state;
  // screenState reducer //
  const stabledispatch = useCallback(dispatch, []);
 
  const turnOnPowerSwitch = (e: React.MouseEvent): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      dispatch({ type: "POWER_ON", payload: {} });
      dispatch({ type: "SET_GREETING", payload: greeting });
      dispatchWithTimeout(dispatch, { type: "SCREEN_LOADED", payload: {} }, 1000);
    } else {
      dispatch({ type: "POWER_ON", payload: {} });
      dispatch({ type: "SET_GREETING", payload: greeting });
      dispatchWithTimeout(dispatch, { type: "SCREEN_LOADED", payload: {} }, 1000);
    }
  };
  const turnOffPowerSwitch = (e: React.MouseEvent): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      dispatch({ type: "POWER_OFF", payload: {} });
      dispatch({ type: "CLEAR_GREETING", payload: { title: "", greeting: [], instructions: [] } });
      dispatchWithTimeout(dispatch, { type: "SCREEN_UNLOADED", payload: {} }, 500);
    } else {
      dispatch({ type: "POWER_OFF", payload: {} });
      dispatch({ type: "CLEAR_GREETING", payload: { title: "", greeting: [], instructions: [] } });
      dispatchWithTimeout(dispatch, { type: "SCREEN_UNLOADED", payload: {} }, 500);
    }
  };

  // lifecycle hooks //
  useEffect(() => {
    const powerButtonSound: HTMLAudioElement = new Audio("./../../media/sounds/keys/power_button.mp3");
    setPowerButtonSound(powerButtonSound);
  }, []);

  
  useEffect(() => {
    
    if (powerButtonSound && !screenState.powerOn) {
      setTimeout(() => {
        powerButtonSound.play();
        stabledispatch({ type: "SET_GREETING", payload: greeting });
        stabledispatch({ type: "POWER_ON", payload: {} });
        dispatchWithTimeout(dispatch, { type: "SCREEN_LOADED", payload: {} }, 1000);
      }, 1000);
     
    }
  }, [ powerButtonSound, screenState.powerOn, stabledispatch ]);
  
 
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
