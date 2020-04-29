import React from "react";
import "./css/terminalScreen.css";

import BlinkingCursor from "./BlinkingCursor";
import TerminalTextLine from "./TerminalTextLine";

const TerminalScreen: React.FC<{}> = (props): JSX.Element => {
  return (
    <div className="textLine">
      <div className="retroText">
        <TerminalTextLine text={"Hello There"} />
      </div>
      <div className="cursor">
        <BlinkingCursor />
      </div>
    </div>
  )
};

export default TerminalScreen;