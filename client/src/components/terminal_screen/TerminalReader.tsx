import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./css/terminalReader.module.css";

export const TerminalReader: React.FC<{}> = (): JSX.Element => {
  const [ inputState, setInputState ] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputState([ ...e.target.value.split("") ]);
  };
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [ inputRef.current ]);

  return (
    <div className={ styles.terminalReaderWrapper }>
      <div className={ styles.typedLine }>
        {
          inputState.map((char, index) => <span key={`key_${index}`} className={ styles.typedChar }>{char}</span> )
        }
      </div>
      <span className={ styles.blinker }>
        <input className={ styles.textInput } ref={ inputRef } onChange= { handleInputChange }></input>
      </span>
    </div>
  )
}