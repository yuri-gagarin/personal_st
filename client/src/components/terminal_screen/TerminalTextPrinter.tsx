import React, { useState, useEffect  } from "react";
// css imports //
// additional components //
import { TerminalTextLine } from "./TerminalTextLine";
import  styles  from "./css/terminalTextPrinter.module.css";

interface TextPrinterProps {
  textArr: string[];
  setPrintingStart: () => void;
  setPrintingDone: () => void;
};
interface TerminalPrinterState {
  [name: string]: string | number | (HTMLAudioElement | boolean | null);
  keyStrokeSound: (HTMLAudioElement | null);
  numberOfLines: number;
  currentLinePos: number;
  textLoaded: boolean;
};

export const TerminalTextPrinter: React.FC<TextPrinterProps> = ({ textArr, setPrintingStart, setPrintingDone }): JSX.Element => {
  const [ terminalPrinterState, setTerminalPrinterState ] = useState<TerminalPrinterState>({ currentLinePos: 0, numberOfLines: 0, textLoaded: false, keyStrokeSound: null });
  const markLineDone = (lineNumber: number): void => {
    setTerminalPrinterState({ ...terminalPrinterState, currentLinePos: lineNumber + 1 });
  };

  // lifecycle methods //
  useEffect(() => {
    const keyStrokeSound: HTMLAudioElement = document.getElementsByClassName("keystrokeSoundTerminal")[0] as HTMLAudioElement;
    if (textArr && textArr.length > 0) {
      const termPrinterState: TerminalPrinterState = { ...terminalPrinterState, keyStrokeSound: keyStrokeSound };
      let numberOfLines = 0;
      for (let i = 0; i < textArr.length; i++) {
        termPrinterState[`${i}`] = textArr[i];
        numberOfLines++;
      }
      setTerminalPrinterState({ ...termPrinterState, textLoaded: true, numberOfLines });
    }
  }, [ textArr, terminalPrinterState ]);

  useEffect(() => {
    if (terminalPrinterState.textLoaded) console.log("printing start");
  }, [ terminalPrinterState.textLoaded ]);

  useEffect(() => {
    if (terminalPrinterState.keyStrokeSound) terminalPrinterState.keyStrokeSound.play().catch(() => console.log("Can't play keystroke sound"));
  }, [ terminalPrinterState.keyStrokeSound ]);

  useEffect(() => {
    if (terminalPrinterState.textLoaded && (terminalPrinterState.currentLinePos === terminalPrinterState.numberOfLines)) {
      console.log("printing finished");
      setPrintingDone();
    }
  },  [ terminalPrinterState.currentLinePos, terminalPrinterState.numberOfLines, terminalPrinterState.textLoaded, setPrintingDone ]);

  return (
    <div className={ styles.terminalTextLine }>
      { 
        textArr.map((text, index) => {
          return (
            <TerminalTextLine
              key={ `terminalText${index}`} 
              active={ terminalPrinterState.currentLinePos === index }
              index={ index } 
              text={ text } 
              keyStrokeSound={ terminalPrinterState.keyStrokeSound }
              markLineDone={ markLineDone } 
            /> 
          )
        })
      }
      <audio className="keystrokeSoundTerminal">
        <source src="/media/sounds/keys/keystroke.wav"></source>
      </audio>
    </div>
  );
};