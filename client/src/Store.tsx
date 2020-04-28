import React from "react";
// initial state interfaces //
interface ScreenState {
  powerOn: boolean,
  title: string
};
interface UserState {
  name: string
};
interface AppState {
  screenState: ScreenState,
  userState: UserState
};
interface AppAction {
  type: string,
  payload: any
};
// initialization of default app state //
const initialState: AppState = {
  screenState: {
    powerOn: false,
    title: "Main Screen"
  },
  userState: {
    name: "Guest"
  }
};

export const screenReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "POWER_OFF": {
      return {
        ...state,
        screenState: {
          ...state.screenState,
          powerOn: false
        }
      };
    };
    case "POWER_ON": {
      return {
        ...state,
        screenState: {
          ...state.screenState,
          powerOn: true,
        }
      };
    };
    default: {
      return state;
    };
  }
};


export const Store = React.createContext<AppState>(initialState);

export const StoreProvider = (props: any): JSX.Element => {
  return (
    <Store.Provider value={initialState}>
      {props.children}
    </Store.Provider>
  )
};