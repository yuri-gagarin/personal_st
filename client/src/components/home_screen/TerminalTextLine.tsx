import React, { useState, useEffect, useRef, useContext } from "react";
// css imports //
import "./css/terminalTextLine.css";
import { Store } from "../../Store";
// additional components //
import BlinkingCursor from './BlinkingCursor';
import axios from 'axios';

const useInterval = (callback: (n: any) => void, delay: number, limit: number, ticks: React.MutableRefObject<number>): void => {
  const savedCallback = useRef<any>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick (): void {
      savedCallback.current();
      ticks.current += 1;
      console.log(ticks.current)
    }
    if (delay !== null) {
      let id: NodeJS.Timeout = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    console.log(ticks.current);
  }, [delay, ticks.current])
}
interface LineProps {
  text: string
};

const TerminalTextLine: React.FC<LineProps> = (props): JSX.Element => {
  const { text } = props;
  const [ lineText, setLineText ] = useState<string[]>([]);
  const [ typeSound, setTypeSound ] = useState<HTMLAudioElement>()
  const { dispatch, state } = useContext(Store);
  const { screenLoaded } = state.screenState;
  const tickLimit = useRef<number>(0);

  useEffect(() => {
    setTypeSound(() => {

      return new Audio("/public")
    })
  },[]);
  useEffect(() => {
    console.log(tickLimit.current);
    if (screenLoaded) {
      if (text[tickLimit.current]) {
        setTimeout(() => {
          setLineText(() => {
            return [...lineText].concat(text[tickLimit.current])
          })
          tickLimit.current += 1;
        }, 200);
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
    </div>
  );
};

export default TerminalTextLine;