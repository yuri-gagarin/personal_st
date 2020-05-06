import { 
  userActionConstants, screenActionConstants 
} from "./constants"
const {
  SET_GUEST, SET_ADMIN, SAVE_GUEST
} = userActionConstants;
const  {
  POWER_ON, POWER_OFF,
  SCREEN_LOADED, SCREEN_UNLOADED, 
  SET_GREETING, CLEAR_GREETING
} = screenActionConstants;
export type SetGuest = {
  readonly type: SetGuest,
  readonly guestName: string
};
export type SaveGuest = {
  readonly type: SaveGuest,
  readonly payload: {}
};
export type SetAdmin = {
  readonly type: SetAdmin,
  readonly adminName: string
};
// screen state types //
export type PowerOn = {
  readonly type: PowerOn,
  readonly payload: {}
};
export type PowerOff = {
  readonly type: PowerOff,
  readonly payload: {}
};
export type ScreenLoaded = {
  readonly type: ScreenLoaded,
  readonly payload: {}
};
export type ScreenUnloaed = {
  readonly type: ScreenUnloaed,
  readonly payload: {}
};
export type SetGreeting = {
  readonly type: SetGreeting,
  readonly payload: {
    title: string,
    greeting: string,
    instructions: string[]
  }
};
export type ClearGreeting = {
  readonly payload: {
    title: string,
    greeting: string,
    instuctions: string[]
  }
};
