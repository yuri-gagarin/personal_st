import React, { useState, useEffect  } from "react";
// css imports //
// additional components //
import { TerminalTextLine } from "./TerminalTextLine";
import  styles  from "./css/terminalTextPrinter.module.css";

interface TextPrinterProps {
  textArr: string[];
};
interface TerminalPrinterState {
  [name: string]: string | number | (HTMLAudioElement | null);
  keyStrokeSound: (HTMLAudioElement | null);
  currentLinePos: number;
}
export const TerminalTextPrinter: React.FC<TextPrinterProps> = ({ textArr }): JSX.Element => {
  const [ terminalPrinterState, setTerminalPrinterState ] = useState<TerminalPrinterState>({ currentLinePos: 0, keyStrokeSound: null });

  const markLineDone = (lineNumber: number): void => {
    setTerminalPrinterState({ ...terminalPrinterState, currentLinePos: lineNumber + 1 });
  };

  // lifecycle methods //
  useEffect(() => {
    const keyStrokeSound: HTMLAudioElement = document.getElementsByClassName("keystrokeSoundTerminal")[0] as HTMLAudioElement;
    if (textArr && textArr.length > 0) {
      const termPrinterState: TerminalPrinterState = { currentLinePos: 0, keyStrokeSound: keyStrokeSound };
      for (let i = 0; i < textArr.length; i++) {
        termPrinterState[`${i}`] = textArr[i];
      }
      setTerminalPrinterState({ ...termPrinterState });
    }
  }, [ textArr ]);

  useEffect(() => {
    if (terminalPrinterState.keyStrokeSound) terminalPrinterState.keyStrokeSound.play().catch(() => console.log("Can't play keystroke sound"));
  }, [ terminalPrinterState.keyStrokeSound ]);

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