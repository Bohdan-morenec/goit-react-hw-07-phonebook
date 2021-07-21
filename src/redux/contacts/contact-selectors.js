import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filter;

// export const filteredArrayContact = (state) => {
//   const filterValue = filter(state).toLowerCase();

//   const filterText = (value) => value.toLowerCase().includes(filterValue);

//   return getContacts(state).filter(({ name }) => filterText(name));
// };

export const filteredArrayContact = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const filterValue = filter.toLowerCase();
    const filterText = (value) => value.toLowerCase().includes(filterValue);

    return contacts.filter(({ name }) => filterText(name));
  }
);
