import React, { FC, useState, useEffect } from "react";
import "./css/homeScreenControlls.css";
// additional components //
import PowerSwitchComponent from "./PowerSwitchComponent";

const HomeScreenControlls: FC<{}> = (props): JSX.Element => {
  const [powerOn, setPowerOn] = useState(true);
  const [powerButtonSound, setPowerButtonSound] = useState<HTMLAudioElement>();

  const togglePowerSwitch = (): void => {
    if (powerButtonSound) {
      powerButtonSound.play();
      setPowerOn(!powerOn);
    } else {
      setPowerOn(!powerOn);
    }
  };
  // lifecycle hooks //
  useEffect(() => {
    const powerButtonSound: HTMLAudioElement = new Audio("./../../media/sounds/keys/power_button.mp3");
    console.log(powerButtonSound);
    setPowerButtonSound(powerButtonSound);
  }, []);

  return (
    <div id="crtControls">
      <PowerSwitchComponent 
        powerOn={powerOn} 
        title={"My Retro TV"}
        togglePowerSwitch={togglePowerSwitch}
      />
    </div>
  );
};

export default HomeScreenControlls;
