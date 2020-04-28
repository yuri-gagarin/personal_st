import React, { FC, useState, useEffect, useContext, MouseEvent } from "react";
import "./css/homeScreenControlls.css";
// additional components //
import PowerSwitchComponent from "./PowerSwitchComponent";
import { Store } from "../../Store";

const HomeScreenControlls: FC<{}> = (props): JSX.Element => {
  // const [powerOn, setPowerOn] = useState(true);
  const { state, dispatch } = useContext(Store);
  const { screenState } = state;
  const [powerButtonSound, setPowerButtonSound] = useState<HTMLAudioElement>();

  const turnOnPowerSwitch = (e: React.MouseEvent): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      dispatch({ type: "POWER_ON" });
    } else {
      dispatch({ type: "POWER_ON" });
    }
  };
  const turnOffPowerSwitch = (e: React.MouseEvent): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      dispatch({ type: "POWER_OFF" });
    } else {
      dispatch({ type: "POWER_OFF" });
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
