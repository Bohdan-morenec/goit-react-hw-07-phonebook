import {
  addContactRequest,
  addСontactSuccess,
  aadContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchСontactSuccess,
  fetchContactError,
} from "./contacts-actions";

import axios from "axios";

export const addСontact = (value) => async (dispatch) => {
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post("/users", value);

    dispatch(addСontactSuccess(data));
  } catch (error) {
    dispatch(aadContactError(error));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/users/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export const fetchContact = () => async (dispatch) => {
  dispatch(fetchContactRequest);

  try {
    const { data } = await axios.get("/users");

    dispatch(fetchСontactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};
