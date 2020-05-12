import React, { useState, useEffect, useRef, useContext } from "react";
// css imports //
import "./css/terminalTextLine.css";
import { Store } from "../../state/Store";
// additional components //
import BlinkingCursor from './BlinkingCursor';

interface LineProps {
  text: string
};

const TerminalTextLine: React.FC<LineProps> = (props): JSX.Element => {
  const { text } = props;
  const [ lineText, setLineText ] = useState<string[]>([]);
  const [ typeSound, setTypeSound ] = useState<HTMLAudioElement>()
  const [ typingDone, setTypingDone ] = useState(false);
  const { state } = useContext(Store);
  const { screenState } = state;
  const { screenLoaded } = screenState;
  const tickLimit = useRef<number>(0);

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
      {
        !typingDone ? <BlinkingCursor /> : null
      }
      <audio className="keystrokeSoundTerminal">
        <source src="/media/sounds/keys/keystroke.wav"></source>
      </audio>
    </div>
  );
};

export default TerminalTextLine;