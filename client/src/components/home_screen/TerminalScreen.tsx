import React from "react";
import "./css/terminalScreen.css";

import TerminalTextLine from "./TerminalTextLine";

const TerminalScreen: React.FC<{}> = (props): JSX.Element => {
  return (
    <div className="textLine">
      <div className="retroText">
        <TerminalTextLine text={"Hello There"} />
      </div>
    </div>
  )
};

export default TerminalScreen;