import combineReducers from "react-combine-reducers";
// reducers //
import screenReducer, { initialScreenState } from "./screenReducer";

export const [indexReducer, rootState] = combineReducers({
  screenState: [screenReducer, initialScreenState]
});

