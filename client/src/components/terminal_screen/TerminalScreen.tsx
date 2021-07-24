import React, { useContext } from "react";
import styles from "./css/terminalScreen.module.css";

import { TerminalTextPrinter } from "./TerminalTextPrinter";
import { Store } from "../../state/Store";

const TerminalScreen: React.FC<{}> = (props): JSX.Element => {
  const { state } = useContext(Store);
  const { instructions } = state.screenState;
  
  return (
    <div className={ styles.terminalTextArea }>
      <div className={ styles.retroText }>
        <TerminalTextPrinter key={`textLine`} textArr={instructions}/>
      </div>
    </div>
  )
};

export default TerminalScreen;