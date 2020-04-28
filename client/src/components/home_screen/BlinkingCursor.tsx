import React, { useState, useEffect, useRef } from "react";
import "./css/blinkingCursor.css";

const useInterval = (callback: (n: any) => any, delay: number): void => {
  const savedCallback = useRef<any>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick (): void {
      savedCallback.current();
    }
    if (delay !== null) {
      let id: NodeJS.Timeout = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay])
}

const BlinkingCursor: React.FC<{}> = (props): JSX.Element => {
  const [blinker, setBlinker] = useState<boolean>(false);
  const blinkerRef = useRef(null);
  
  useInterval(() => {
    setBlinker(!blinker);
  }, 500);

  useEffect(() => {
    console.log(blinker);
  }, [blinker]);

  return (
    <div className={blinker ? "textCursor" : "textCursor noColor"} ref={blinkerRef}>

    </div>
  )
};

export default BlinkingCursor;