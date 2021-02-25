import rootReducer, { AppStateType } from "../reducer";
import { applyMiddleware, compose, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import Cookie from "js-cookie";
import { AppActions } from "../../types/actions";

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = userInfo
  ? { userStatus: { auth: true, userInfo: { ...userInfo }, loading: false, error: "" } }
  : {};
console.log(initialState);

export default createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk as ThunkMiddleware<AppStateType, AppActions>)
    //@ts-ignore
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
