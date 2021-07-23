import React, { useState, useEffect, useRef, useContext } from "react";
// css imports //
import  styles  from "./css/terminalTextLine.module.css";
import { Store } from "../../state/Store";
// additional components //
import BlinkingCursor from './BlinkingCursor';

interface TerminalTextProps  {
  active: boolean;
  index: number; 
  text: string; 
  markLineDone: (lineNumber: number) => void;
};
type TerminalTextState = {
  loaded: boolean;
  done: boolean;
};
const TerminalText: React.FC<TerminalTextProps> = ({ active, index, text, markLineDone }): JSX.Element => {
  const [ localState, setLocalState ] = useState<TerminalTextState>({ loaded: false, done: false });
  const [ typedText, setTypedText ] = useState<string[]>([]);

  const textCursorPos = useRef<number>(0);


  useEffect(() => {
    setTimeout(() => { setLocalState({ ...localState, loaded: true })}, 2000);
  }, []);

  useEffect(() => {
    if (active && text && text.length > 0 && localState.loaded && text[textCursorPos.current]) {
      setTimeout(() => {
        setTypedText(() => {
          return typedText.concat(text[textCursorPos.current]);
        })
        textCursorPos.current +=1;
      }, 100);
    } else if (text && text.length > 0 && localState.loaded && !text[textCursorPos.current]) {
      markLineDone(index);
    }
  }, [ active, text, typedText, textCursorPos.current, localState.loaded ]);

  return (
    <div className={ styles.terminalText }>
      {
        typedText.map((char, i) => <span key={ `needBetterOneHere${i}`}>{ char }</span> )
      }
      {
        active ? <span className={ styles.blinker }></span> : null
      }
      
    </div>
  )
}

interface LineProps {
  textArr: string[];
};
interface TerminalTextLines {
  [name: string]: string | number;
  currentLinePos: number;
}
const TerminalTextLine: React.FC<LineProps> = ({ textArr }): JSX.Element => {
  const [ terminalTextLines, setTerminalTextLines ] = useState<TerminalTextLines>({ currentLinePos: 0 }) 
  /*
  useEffect(() => {
    const keyStrokeSound: Element = document.getElementsByClassName("keystrokeSoundTerminal")[0];
    setTypeSound(() => {
      return keyStrokeSound as HTMLAudioElement;
    });
  }, []);

  useEffect(() => {
    if (screenLoaded && text.length > 0) {
      if (text[tickLimit.current]) {
        setTimeout(() => {
          setLineText(() => {
            if (typeSound) {
              typeSound.play();
            }
            return [...lineText].concat(text[tickLimit.current])
          })
          tickLimit.current += 1;
        }, 100);
      }
    }
    if ((lineText.length > 0 && text.length) > 0 && (lineText.length === text.length)) {
      console.log("done");
      setTypingDone(true);
    }
  }, [lineText, screenLoaded, text, typeSound]);
  //useInterval(tickFunction, 1000, text.length, tickLimit)
  useEffect(() => {
    if (text.length === 0) {
      setLineText([]);
      tickLimit.current = 0;
    }
  }, [text])
  */
  useEffect(() => {
    if (textArr && textArr.length > 0) {
      const textLines: TerminalTextLines = { currentLinePos: 0 };
      for (let i = 0; i < textArr.length; i++) {
        textLines[`${i}`] = textArr[i];
      }
      setTerminalTextLines({ ...textLines });
    }
  }, [ textArr ]);

  const markLineDone = (lineNumber: number): void => {
    setTerminalTextLines({ ...terminalTextLines, currentLinePos: lineNumber + 1 });
  };

  return (
    <div className={ styles.terminalTextLine }>
      { 
        textArr.map((text, index) => {
          return (
            <TerminalText 
              key={ `terminalText${index}`} 
              active={ terminalTextLines.currentLinePos === index }
              index={ index } 
              text={ text } 
              markLineDone={ markLineDone } 
            /> 
          )
        })
      }
      {
        true ? <BlinkingCursor /> : null
      }
      <audio className="keystrokeSoundTerminal">
        <source src="/media/sounds/keys/keystroke.wav"></source>
      </audio>
    </div>
  );
};

export default TerminalTextLine;