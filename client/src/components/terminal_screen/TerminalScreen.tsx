import React, { useContext } from "react";
import styles from "./css/terminalScreen.module.css";
// store for state //
import { Store } from "../../state/Store";
// additional components //
import { TerminalTextPrinter } from "./TerminalTextPrinter";
import { TerminalReader } from "./TerminalReader";

const TerminalScreen: React.FC<{}> = (props): JSX.Element => {
  const { state } = useContext(Store);
  const { instructions } = state.screenState;

  const setPrintingStart = (): void => {

  };
  const setPrintingDone = (): void => {

  };
  
  return (
    <div className={ styles.terminalTextArea }>
      <div className={ styles.retroText }>
        <TerminalTextPrinter 
          key={`textLine`} 
          textArr={[]} 
          setPrintingStart={ setPrintingStart } 
          setPrintingDone={ setPrintingDone }
        />
        <TerminalReader />
      </div>
    </div>
  )
};

export default TerminalScreen;