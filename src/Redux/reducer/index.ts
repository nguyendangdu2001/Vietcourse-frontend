import { combineReducers } from "redux";
import userReducer from "./userReducer";
// import { firestoreReducer } from 'redux-firestore';
// import { firebaseReducer } from 'react-redux-firebase';
import "../../config/Firebase/fbConfig";
export const Reducer = combineReducers({
  userStatus: userReducer,
  // firestore:firestoreReducer,
  // firebase:firebaseReducer
});
export default Reducer;
export type AppStateType = ReturnType<typeof Reducer>;
