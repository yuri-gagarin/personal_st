import React from "react";
// initial state interfaces //
interface ScreenState {
  powerOn: boolean,
  screenLoaded: boolean,
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
interface AppContext {
  state: AppState,
  dispatch: any
};
// initialization of default app state //
const initialState: AppState = {
  screenState: {
    powerOn: false,
    screenLoaded: false,
    title: "Main Screen"
  },
  userState: {
    name: "Guest"
  }
};

const initialContext: AppContext = {
  state: initialState,
  dispatch: null
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
    case "SCREEN_LOADED": {
      return {
        ...state,
        screenState: {
          ...state.screenState,
          screenLoaded: true
        }
      };
    };
    default: {
      return state;
    };
  }
};

export const userReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "RGEISTER_GUEST": {
      return {
        ...state,
        userState: {
          name: action.payload
        }
      };
    };
    default: {
      return state;
    };
  }
};


export const Store = React.createContext<AppContext>(initialContext);

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(screenReducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  )
};