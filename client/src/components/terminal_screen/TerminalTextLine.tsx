import React,  { useContext, useEffect, useRef, useState } from "react";
import { Store } from "../../state/Store";
// style imports //
import styles from "./css/terminalTextLine.module.css";

interface TerminalTextLineProps  {
  active: boolean;
  index: number; 
  text: string; 
  keyStrokeSound: HTMLAudioElement | null;
  markLineDone: (lineNumber: number) => void;
};
export const TerminalTextLine: React.FC<TerminalTextLineProps> = ({ active, index, text, keyStrokeSound, markLineDone }): JSX.Element => {
  const [ typedText, setTypedText ] = useState<string[]>([]);
  const { screenLoaded } = useContext(Store).state.screenState;
  // ref for cursor position //
  const textCursorPos = useRef<number>(0);

  useEffect(() => {
    if (active && screenLoaded && text && keyStrokeSound && text.length > 0 && text[textCursorPos.current]) {
      setTimeout(() => {
        setTypedText(() => {
          return typedText.concat(text[textCursorPos.current]);
        })
        keyStrokeSound.play().catch((err) => console.log("can't play key stroke"));
        textCursorPos.current +=1;
      }, 100);
    } else if (active && text && screenLoaded && text.length > 0 && !text[textCursorPos.current]) {
      markLineDone(index);
    }
  }, [ active, screenLoaded, text, keyStrokeSound, typedText, index, markLineDone ]);

  return (
    <div className={ styles.terminalText }>
      {
        typedText.map((char, i) => <span key={ `needBetterOneHere${i}`}>{ char }</span> )
      }
      {
        active ? <span className={ styles.blinker }></span> : null
      }
      
    </div>
  );
};

