import React from "react";
import styles from "./css/modernClassicSwitches.module.css";

export const ModernClassicSwitch = (): JSX.Element => {

  return (
    <div className={ styles.switchWrapper }>
      <label className={ styles.switchRocker }>
        <input type="checkbox" ></input>
        <span className={ styles.switchLeft }>Modern</span>
        <span className={ styles.switchRight }>Classic</span>
      </label>
    </div>
  );
};

