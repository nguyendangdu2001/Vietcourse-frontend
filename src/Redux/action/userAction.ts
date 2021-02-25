import Axios from "axios";
import Cookie from "js-cookie";
import * as userConstants from "../../types/actions";
import { nodeApiLink } from "../../config/Api/NodeServerLink";
import { Dispatch } from "redux";
import { TAction } from "../../types/thunkAction";

const authenticateUserHandler = (apiLink: String, token: String): TAction<void> => async (
  dispatch
) => {
  try {
    dispatch({ type: userConstants.USER_LOGIN_REQUEST });
    const { data } = await Axios.post(`${nodeApiLink}${apiLink}`, { ...token });
    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: { ...data } });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: userConstants.USER_LOGIN_ERROR, payload: error });
  }
};

const signin = (userName: string, password: string): TAction<void> => async (dispatch) => {
  dispatch({ type: userConstants.USER_LOGIN_REQUEST, payload: { userName, password } });
  try {
    const { data } = await Axios.post(
      `${nodeApiLink}/api/auth/local`,
      { userName, password },
      { withCredentials: true }
    );

    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: { ...data } });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: userConstants.USER_LOGIN_ERROR, payload: error });
    console.log(error);
  }
};

const loginWithGoogle = (access_token: string): TAction<void> => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_LOGIN_REQUEST });
    const { data } = await Axios.post(`${nodeApiLink}/api/auth/google`, { access_token });
    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: { ...data } });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: userConstants.USER_LOGIN_ERROR, payload: error });
  }
};
const loginWithFacebook = (access_token: string): TAction<void> => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_LOGIN_REQUEST });
    const { data } = await Axios.post(`${nodeApiLink}/api/auth/facebook`, {
      access_token,
    });
    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: { ...data } });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: userConstants.USER_LOGIN_ERROR, payload: error });
  }
};

const fetchUserData = (): TAction<void> => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.USER_LOGIN_REQUEST });
    const { data } = await Axios.get(`${nodeApiLink}/api/users/profile`);
    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: { ...data } });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: userConstants.USER_LOGIN_ERROR, payload: error });
  }
};

const signup = (name: string, userName: string, password: string): TAction<void> => async (
  dispatch
) => {
  dispatch({ type: userConstants.USER_SIGNUP_REQUEST, payload: { name, userName, password } });
  try {
    const { data } = await Axios.post(
      `${nodeApiLink}/api/auth/signup`,
      { name, userName, password },
      { withCredentials: true }
    );
    console.log(typeof data);

    dispatch({ type: userConstants.USER_SIGNUP_SUCCESS, payload: { ...data } });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: userConstants.USER_SIGNUP_ERROR, payload: error });
    console.log(error);
  }
};

const logout = (): TAction<void> => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: userConstants.USER_LOGOUT_REQUEST });
    await Axios.get(`${nodeApiLink}/api/auth/logout`);
    dispatch({ type: userConstants.USER_LOGOUT_SUCCESS });
    Cookie.remove("userInfo");
  } catch (error) {
    dispatch({ type: userConstants.USER_LOGOUT_ERROR, payload: error });
  }
};
const addCartItem = (cart: string[]): TAction<void> => async (dispatch) => {
  dispatch({ type: userConstants.USER_ADD_CART_ITEM, payload: cart });
};
const removeCartItem = (cart: string[]): TAction<void> => async (dispatch) => {
  dispatch({ type: "USER_ADD_CART_ITEM", payload: cart });
};
export {
  signin,
  signup,
  fetchUserData,
  loginWithGoogle,
  loginWithFacebook,
  logout,
  addCartItem,
  removeCartItem,
  authenticateUserHandler,
};
