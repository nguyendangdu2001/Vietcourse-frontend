import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppStateType } from "../Redux/reducer";
import { AppActions } from "./actions";

export type TAction<T> = ThunkAction<T,AppStateType,null,AppActions> 
export type TDispatch = ThunkDispatch<AppStateType,null,AppActions>