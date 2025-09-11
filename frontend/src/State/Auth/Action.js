import axios from "axios"
import { AIP_BASE_URL } from "../../config/apiConfig"
import {
  GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS,
  LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS
} from "./ActionType"

// Register Request Handling
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${AIP_BASE_URL}/auth/signup`, userData);
    const data = response.data;

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }

    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFailure(error.response?.data?.message || error.message));
  }
};

// Login Request Handling
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${AIP_BASE_URL}/auth/signin`, userData);
    const data = response.data;

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || error.message));
  }
};

// Get User Profile
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${AIP_BASE_URL}/api/users/profile`, {
      headers: { "Authorization": `Bearer ${jwt}` }
    });
    const user = response.data;
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.response?.data?.message || error.message));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwt");
  dispatch({ type: LOGOUT });
};
