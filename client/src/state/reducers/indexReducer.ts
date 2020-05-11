import combineReducers from "react-combine-reducers";
// reducers //
import screenReducer, { initialScreenState } from "./screenReducer";
import userReducer, { initialUserState } from "./userReducer";

export const [indexReducer, rootState] = combineReducers({
  screenState: [screenReducer, initialScreenState],
  userState: [userReducer, initialUserState]
});

