import { Dispatch} from "react";
import { AppAction } from "../Store";

export const dispatchWithTimeout = (dispatch: Dispatch<AppAction>, action: AppAction, timeout?: number): void => {
  const timeoutTime = timeout ? timeout : 1000;
  setTimeout(() => {
    dispatch(action);
  }, timeoutTime);
};
