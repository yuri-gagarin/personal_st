import React, { FC, useState } from "react";
import "./css/homeScreenControlls.css";
// additional components //
import PowerSwitchComponent from "./PowerSwitchComponent";

const HomeScreenControlls: FC<{}> = (props): JSX.Element => {
  const [powerOn, setPowerOn] = useState(true);

  const togglePowerSwitch = (): void => {
    setPowerOn(!powerOn);
  }

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
