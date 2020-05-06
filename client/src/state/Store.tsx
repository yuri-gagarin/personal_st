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

/*
export const userReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_GUEST": {
      return {
        ...state,
        userState: {
          ...state.userState,
          name: action.payload.name
        }
      };
    };
    case "SET_ADMIN": {
      return {
        ...state,
        userState: {
          ...state.userState,
          name: "Administrator"
        }
      };
    };
    case "SAVE_GUEST": {
      return {
        ...state,
        userState: {
          ...action.payload
        }
      };
    };
    default: return state
  }
}
*/


export const Store = React.createContext<AppState>(initialState);

export const StoreProvider = (props: any): JSX.Element => {
  return (
    <Store.Provider value={initialState}>
      {props.children}
    </Store.Provider>
  )
};