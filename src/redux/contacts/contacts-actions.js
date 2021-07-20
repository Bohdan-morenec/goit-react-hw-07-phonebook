import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = " http://localhost:3000";
// export const addСontact = (value) => ({
//   type: "addСontact",
//   payload: value,
// });

// export const addСontact = createAction("addСontact");

export const addContactRequest = createAction("contact/addContactRequest");
export const addСontactSuccess = createAction("contact/addСontactSuccess");
export const aadContactError = createAction("contact/aadContactError");

export const deleteContactRequest = createAction(
  "contact/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contact/deleteContactSuccess"
);
export const deleteContactError = createAction("contact/deleteContactError");

export const fetchContactRequest = createAction("contact/fetchContactRequest");
export const fetchСontactSuccess = createAction("contact/fetchСontactSuccess");
export const fetchContactError = createAction("contact/fetchContactError");
// export const addСontact = (value) => (dispatch) => {
//   dispatch({ type: "addContactRequest" });

//   axios
//     .post("/users", value)
//     .then(({ data }) => dispatch({ type: "addСontactSuccess", payload: data }))
//     .catch((error) => dispatch({ type: "aadContactError", payload: error }));
// };
// export const deleteContact = (value) => ({
//   type: "deleteContact",
//   payload: value,
// });

// export const deleteContact = createAction("deleteContact");

// export const filterContact = (value) => ({
//   type: "filterContact",
//   payload: value,
// });

export const filterContact = createAction("filterContact");
