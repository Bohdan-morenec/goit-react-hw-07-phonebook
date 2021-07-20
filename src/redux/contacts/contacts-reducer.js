import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactRequest,
  addСontactSuccess,
  aadContactError,
  filterContact,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchСontactSuccess,
  fetchContactError,
} from "../../redux/contacts/contacts-actions";

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case "addСontact":
//       return [...state, payload];

//     case "deleteContact":
//       return state.filter((todo) => todo.id !== payload);

//     default:
//       return state;
//   }
// };

const itemsReducer = createReducer([], {
  [fetchСontactSuccess]: (_, { payload }) => payload,
  [addСontactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((todo) => todo.id !== payload),
});

const logerReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addСontactSuccess]: () => false,
  [aadContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchСontactSuccess]: () => false,
  [fetchContactError]: () => false,
});

// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case "filterContact":
//       return payload;

//     default:
//       return state;
//   }
// };

const filterReducer = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loger: logerReducer,
});
