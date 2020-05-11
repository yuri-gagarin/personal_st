type PowerOn = {
  readonly type: "POWER_ON",
  readonly payload: {}
};
type PowerOff = {
  readonly type: "POWER_OFF",
  readonly payload: {}
};
type ScreenLoaded = {
  readonly type: 'SCREEN_LOADED',
  readonly payload: {} 
};
type ScreenUnloaded = {
  readonly type: "SCREEN_UNLOADED",
  readonly payload: {}
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

export interface ScreenState {
  powerOn: boolean,
  screenLoaded: boolean,
  title: string,
  greeting: string,
  instructions: string[]
};

export const initialScreenState: ScreenState = {
  powerOn: false,
  screenLoaded: false,
  title: "",
  greeting: "",
  instructions: []
};

export type ScreenAction = PowerOn | PowerOff | ScreenLoaded | ScreenUnloaded | SetGreeting | ClearGreeting;

const screenReducer = (state:ScreenState, action: ScreenAction): ScreenState => {
  switch (action.type) {
    case "POWER_ON": 
      return {
        ...state,
        powerOn: true
      };  
    case "POWER_OFF": 
      return {
        ...state,
        powerOn: false,
      };
    case "SCREEN_LOADED": 
      return {
        ...state,
        screenLoaded: true
      };
    case "SCREEN_UNLOADED": 
      return {
        ...state,
        screenLoaded: false
      };
    case "SET_GREETING": 
      return {
        ...state,
          greeting: action.payload.greeting,
          instructions: [...action.payload.instructions]
      };
    case "CLEAR_GREETING": 
      return {
        ...state,
          greeting: action.payload.greeting,
          instructions: [...action.payload.instructions]
      };
    default: 
      return state;
    };
};

export default screenReducer;