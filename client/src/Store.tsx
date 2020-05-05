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
export interface AppContext {
  state: AppState,
  dispatch: any
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

const initialContext: AppContext = {
  state: initialState,
  dispatch: null
};

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
    case "SCREEN_UNLOADED": {
      return {
        ...state,
        screenState: {
          ...state.screenState,
          screenLoaded: false
        }
      };;
    };
    case "SET_GREETING": {
      return {
        ...state,
        screenState: {
          ...state.screenState,
          greeting: action.payload.greeting,
          instructions: [...action.payload.instructions]
        }
      };
    };
    case "CLEAR_GREETING": {
      return {
        ...state,
        screenState: {
          ...state.screenState,
          greeting: action.payload.greeting,
          instructions: [...action.payload.instructions]
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