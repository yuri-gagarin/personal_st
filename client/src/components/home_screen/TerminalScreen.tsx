import React, { useContext } from "react";
import "./css/terminalScreen.css";

import TerminalTextLine from "./TerminalTextLine";
import { Store } from "../../state/Store";

const TerminalScreen: React.FC<{}> = (props): JSX.Element => {
  const { state } = useContext(Store);
  const { screenState } = state;
  return (
    <div className="textLine">
      <div className="retroText">
        <TerminalTextLine text={screenState.greeting} />
      </div>
    </div>
  )
};

export default TerminalScreen;