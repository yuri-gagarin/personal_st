import React from "react";
import styles from "./css/loadingScreen.module.css";

export const LoadingScreen: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={ styles.generalLoadingScreenWrapper }>
      <div className={ styles.loader }>Loading Something</div>
      <div className={ styles.loaderText }>
        Loading<span className={ styles.loadingDot1 }>.</span><span className={ styles.loadingDot2 }>.</span><span className={ styles.loadingDot3 }>.</span>
      </div>
    </div>
  );
};

