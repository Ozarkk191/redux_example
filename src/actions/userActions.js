import axios from "axios";
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
} from "../types/userTypes";

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log("data: ", data);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const listUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DETAIL_REQUEST,
    });

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(data);

    dispatch({
      type: USER_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAIL_FAIL,
      payload: error.message,
    });
  }
};
