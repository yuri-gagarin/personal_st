import React, { useContext } from "react";
import "./css/terminalScreen.css";

import TerminalTextLine from "./TerminalTextLine";
import { Store } from "../../state/Store";

const TerminalScreen: React.FC<{}> = (props): JSX.Element => {
  const { state } = useContext(Store);
  const { screenState } = state;
  console.log(screenState.instructions)
  return (
    <div className="textLine">
      <div className="retroText">
        <TerminalTextLine text={screenState.greeting} />
        {
          screenState.instructions.map((text) => {
            return (
              <TerminalTextLine text={text}/>
            )
          })
        }
      </div>
    </div>
  )
};

export default TerminalScreen;