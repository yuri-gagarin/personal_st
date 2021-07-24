import React,  { useEffect, useRef, useState } from "react";
import styles from "./css/modernClassicSwitches.module.css";

export const ModernClassicSwitch = (): JSX.Element => {
  const [ switchState, setSwitchState ] = useState<{ setting: "modern" | "classic"}>({ setting: "classic" });
  const checkboxInput = useRef<HTMLInputElement | null>(null);

  const handleBtnClick = (): void => {
    if (checkboxInput.current && checkboxInput.current.checked) {
      setSwitchState({ setting: "classic" });
    } else {
      setSwitchState({ setting: "modern" });
    }
  };

  useEffect(() => {
    console.log(switchState);
  }, [ switchState ]);
  return (
    <div className={ styles.switchWrapper }>
      <label className={ styles.switchRocker }>
        <input ref={ checkboxInput } type="checkbox" ></input>
        <span className={ styles.switchLeft } onClick={ handleBtnClick }>Modern</span>
        <span className={ `${styles.switchRight} ${ switchState.setting === "classic" ? styles.classicText : ""}` } onClick={ handleBtnClick }>Classic</span>
      </label>
    </div>
  );
};

