import React, { FC } from "react";
import "./css/powerSwitchComponent.css";

interface PowerSwitchProps {
  title: string,
  powerOn: boolean,
  togglePowerSwitch(): void
};

const PowerSwitchComponent: FC<PowerSwitchProps> = (props: PowerSwitchProps): JSX.Element => {
  const { title, powerOn = true, togglePowerSwitch } = props;
  if (powerOn) {
    return (
      <div id="crtScreenOnSwitch" onClick={togglePowerSwitch}>
      </div>
    );
  } else {
    return (
      <div id="crtScreenOffSwitch" onClick={togglePowerSwitch}>

      </div>
    );
  }
};

export default PowerSwitchComponent;