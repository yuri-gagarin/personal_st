import React, { useState, useEffect, useRef, useContext } from "react";
// css imports //
import "./css/terminalTextLine.css";
import { Store, AppState } from "../../state/Store";
// additional components //
import BlinkingCursor from './BlinkingCursor';

interface LineProps {
  text: string
};

const TerminalTextLine: React.FC<LineProps> = (props): JSX.Element => {
  const { text } = props;
  const [ lineText, setLineText ] = useState<string[]>([]);
  const [ typeSound, setTypeSound ] = useState<HTMLAudioElement>()
  const appState: AppState = useContext(Store);
  const { screenLoaded } = appState.screenState;
  const tickLimit = useRef<number>(0);

  useEffect(() => {
    const keyStrokeSound: Element = document.getElementsByClassName("keystrokeSoundTerminal")[0];
    setTypeSound(() => {
      return keyStrokeSound as HTMLAudioElement;
    });
  }, []);

  useEffect(() => {
    if (screenLoaded) {
      if (text[tickLimit.current]) {
        setTimeout(() => {
          setLineText(() => {
            if (typeSound) {
              typeSound.play();
            }
            return [...lineText].concat(text[tickLimit.current])
          })
          tickLimit.current += 1;
        }, 300);
      }
    }
  }, [lineText, screenLoaded]);
  //useInterval(tickFunction, 1000, text.length, tickLimit)

  return (
    <div className="terminalTextLine">
      {
        lineText.map((char, index) => {
          return (
            <span className="textCharacter" key={index}>
              {char}
            </span>
          );
        })
      }
      <BlinkingCursor />
      <audio className="keystrokeSoundTerminal">
        <source src="/media/sounds/keys/keystroke.wav"></source>
      </audio>
    </div>
  );
};

export default TerminalTextLine;