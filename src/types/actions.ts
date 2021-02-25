import { UserInfo } from "./user";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const USER_SIGNUP_REQUEST = "USER_SIGNUP_REQUEST";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_ERROR = "USER_SIGNUP_ERROR";
export const USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_ERROR = "USER_LOGOUT_ERROR";
export const USER_ADD_CART_ITEM = "USER_ADD_CART_ITEM";

export interface UserLoginRequestAction {
  type: typeof USER_LOGIN_REQUEST;
}
export interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  payload: UserInfo;
}
export interface UserLoginErrorAction {
  type: typeof USER_LOGIN_ERROR;
  payload: string;
}
export interface UserSignupRequestAction {
  type: typeof USER_SIGNUP_REQUEST;
}
export interface UserSignupSuccessAction {
  type: typeof USER_SIGNUP_SUCCESS;
  payload: UserInfo;
}
export interface UserSignupErrorAction {
  type: typeof USER_SIGNUP_ERROR;
  payload: string;
}
export interface UserLogoutRequestAction {
  type: typeof USER_LOGOUT_REQUEST;
}
export interface UserLogoutSuccessAction {
  type: typeof USER_LOGOUT_SUCCESS;
}
export interface UserLogoutErrorAction {
  type: typeof USER_LOGOUT_ERROR;
  payload: string;
}
export interface UserAddCartItemAction {
  type: typeof USER_ADD_CART_ITEM;
  payload: string[];
}
export type UserActionTypes =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginErrorAction
  | UserSignupErrorAction
  | UserSignupRequestAction
  | UserSignupSuccessAction
  | UserLogoutRequestAction
  | UserLogoutSuccessAction
  | UserLogoutErrorAction
  | UserAddCartItemAction;

export type AppActions = UserActionTypes;
