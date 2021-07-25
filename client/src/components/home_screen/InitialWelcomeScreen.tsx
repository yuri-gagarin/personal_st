import React from "react";
import styles from "./css/initialWelcomeScreen.module.css";

interface Props {
  handleLaunchTerminal: () => void;
}
export const InitialWelcomeScreen: React.FC<Props> = ({ handleLaunchTerminal }): JSX.Element => {

  return (
    <div className={ styles.initialWelcomeScreenWrapper }>
      <div className={ styles.launchButtonWrapper }>
        <button className={ styles.launchButton } onClick={ handleLaunchTerminal }>Launch</button>
      </div>
    </div>
  );
;}