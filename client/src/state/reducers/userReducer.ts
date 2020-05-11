type SetGuest = {
  readonly type: "SET_GUEST";
  readonly payload: {
    guestName: string
  };
};
type SaveGuest = {
  readonly type: "SAVE_GUEST";
  readonly payload: {
    guestName: string
  };
};
type SetAdmin = {
  readonly type: "SET_ADMIN";
  readonly payload: {
    adminName: string
  };
};
type SaveAdmin = {
  readonly type: "SAVE_ADMIN",
  readonly payload: {
    adminName: string
  }
};

export type UserAction = SetGuest | SaveGuest | SetAdmin | SaveAdmin;

export type UserState = {
  guestName: string,
  adminName: string,
  loggedIn: boolean
};

export const initialUserState: UserState = {
  guestName: "",
  adminName: "",
  loggedIn: false 
};

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "SET_GUEST": 
      return {
        ...state,
        guestName: action.payload.guestName
      };
    case "SAVE_GUEST": 
      return {
        ...state,
        guestName: action.payload.guestName
      };
    case "SET_ADMIN": 
      return {
        ...state,
        adminName: action.payload.adminName
      };
    case "SAVE_ADMIN": 
      return {
        ...state,
        adminName: action.payload.adminName
      };
    default: return state;
  }
};

export default userReducer;