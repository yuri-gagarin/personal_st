import React from "react";
// initial state interfaces //
export interface ScreenState {
  powerOn: boolean,
  screenLoaded: boolean,
  title: string,
  greeting: string,
  instructions: string[]
};
export interface UserState {
  name: string
};
export interface AppState {
  screenState: ScreenState,
  userState: UserState
};
export interface AppAction {
  type: string,
  payload: any
};

// initialization of default app state //
const initialState: AppState = {
  screenState: {
    powerOn: false,
    screenLoaded: false,
    title: "",
    greeting: "",
    instructions: []
  },
  userState: {
    name: "Guest"
  }
};


export const Store = React.createContext<AppState>(initialState);

export const StoreProvider = (props: any): JSX.Element => {
  return (
    <Store.Provider value={{ ...initialState }}>
      { console.log("called") }
      {props.children}
    </Store.Provider>
  )
};