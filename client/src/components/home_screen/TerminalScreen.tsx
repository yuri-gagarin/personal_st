import React, { useContext, useEffect, useState } from "react";
import styles from "./css/terminalScreen.module.css";

import TerminalTextLine from "./TerminalTextLine";
import { Store } from "../../state/Store";

const TerminalScreen: React.FC<{}> = (props): JSX.Element => {
  const { state } = useContext(Store);
  const { greeting, instructions } = state.screenState;
  
  return (
    <div className={ styles.terminalTextArea }>
      <div className={ styles.retroText }>
        <TerminalTextLine key={`textLine`} textArr={instructions}/>
      </div>
    </div>
  )
};

export default TerminalScreen;