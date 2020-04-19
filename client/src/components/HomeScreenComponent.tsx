import React, { MouseEvent } from "react";
import "./HomeScreenComponent.css";

interface HomeScreenProps {
  title: string,
};

const HomeScreenComponent: React.SFC<HomeScreenProps> = (props: HomeScreenProps): JSX.Element => {
  const { title } = props;

  const handleClick = (e: MouseEvent) => {

  };

  return (
    <div id="mainMonitor">
      <div id="mainMonitorBezel">
        <div id="monitorCRT" onClick={handleClick}>
        <div className="monitorScanline"></div>
        <div className="terminal"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenComponent;