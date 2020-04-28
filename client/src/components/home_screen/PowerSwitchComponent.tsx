import React, { FC, useContext } from "react";
import "./css/powerSwitchComponent.css";

interface PowerSwitchProps {
  title: string,
  powerOn: boolean,
  turnOnPowerSwitch(e: React.MouseEvent): void,
  turnOffPowerSwitch(e: React.MouseEvent): void
};

const PowerSwitchComponent: FC<PowerSwitchProps> = (props: PowerSwitchProps): JSX.Element => {
  const { title, powerOn, turnOnPowerSwitch, turnOffPowerSwitch} = props;
  if (powerOn) {
    return (
      <div id="crtScreenOnSwitch" onClick={turnOffPowerSwitch}>
      </div>
    );
  } else {
    return (
      <div id="crtScreenOffSwitch" onClick={turnOnPowerSwitch}>

      </div>
    );
  }
};

export default PowerSwitchComponent;