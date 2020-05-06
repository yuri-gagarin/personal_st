import { AppState } from "./../Store";

type PowerOn = {
  readonly type: "POWER_ON",
  readonly payload: {} | null
};
type PowerOff = {
  readonly type: "POWER_OFF",
  readonly payload: {} | null
};
type ScreenLoaded = {
  readonly type: 'SCREEN_LOADED',
  readonly payload: {} | null
};
type ScreenUnloaded = {
  readonly type: "SCREEN_UNLOADED",
  readonly payload: {} | null
};
type SetGreeting = {
  readonly type: "SET_GREETING",
  readonly payload: {
    title: string,
    greeting: string,
    instructions: string[]
  }
};
type ClearGreeting = {
  readonly type: "CLEAR_GREETING",
  readonly payload: {
    title: string,
    greeting: string,
    instructions: string[]
  }
};

type ScreenAction = PowerOn | PowerOff | ScreenLoaded | ScreenUnloaded | SetGreeting | ClearGreeting;


const screenReducer = (state: AppState, action: ScreenAction): AppState => {
  switch (action.type) {
    case "POWER_ON": 
      console.log("calling power on")
      return {
        ...state,
        screenState: {
          ...state.screenState,
          powerOn: true
        }
      };
    case "POWER_OFF": 
      return {
        ...state,
        screenState: {
          ...state.screenState,
          powerOn: false,
        }
      };
    case "SCREEN_LOADED": 
      return {
        ...state,
        screenState: {
          ...state.screenState,
          screenLoaded: true
        }
      };
    case "SCREEN_UNLOADED": 
      return {
        ...state,
        screenState: {
          ...state.screenState,
          screenLoaded: false
        }
      };
    case "SET_GREETING": 
      return {
        ...state,
        screenState: {
          ...state.screenState,
          greeting: action.payload.greeting,
          instructions: [...action.payload.instructions]
        }
      };
    case "CLEAR_GREETING": 
      return {
        ...state,
        screenState: {
          ...state.screenState,
          greeting: action.payload.greeting,
          instructions: [...action.payload.instructions]
        }
      };
    default: 
      return state;
    };
};

export default screenReducer;