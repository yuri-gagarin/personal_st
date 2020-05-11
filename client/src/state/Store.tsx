import React, { useReducer } from "react";
// initial state interfaces and types //
import { indexReducer, rootState } from "./reducers/indexReducer";
import { ScreenAction, ScreenState, initialScreenState } from "./reducers/screenReducer";
import { UserAction, UserState, initialUserState } from "./reducers/userReducer";

//
export type AppAction = ScreenAction | UserAction;
//
export type GlobalAppState = {
  screenState: ScreenState,
  userState: UserState
}
type CombinedReducer = (state: GlobalAppState, action: AppAction) => GlobalAppState;

type GlobalContext = {
  state: GlobalAppState,
  dispatch: React.Dispatch<AppAction> 
};

const initialContext: GlobalContext = {
  state: {
    screenState: { ...initialScreenState },
    userState: { ...initialUserState }
  },
  dispatch: (value: AppAction): void => {}
};

export const Store = React.createContext<GlobalContext>(initialContext);

export const StoreProvider = (props: any): JSX.Element => {
  const [ globalState, dispatch ] = useReducer<CombinedReducer>(indexReducer, rootState as GlobalAppState);
  return (
    <Store.Provider value={{ state: globalState, dispatch: dispatch }}>
      {props.children}
    </Store.Provider>
  )
};