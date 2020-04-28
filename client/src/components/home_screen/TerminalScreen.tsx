import React from "react";
import "./css/terminalScreen.css";

import BlinkingCursor from "./BlinkingCursor";

const TerminalScreen: React.FC<{}> = (props): JSX.Element => {
  return (
    <div className="textLine">
      <div className="retroText">
        <p>Hello there</p>
      </div>
      <div className="cursor">
        <BlinkingCursor />
      </div>
    </div>
  )
};

export default TerminalScreen;