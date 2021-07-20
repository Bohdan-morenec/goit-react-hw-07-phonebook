import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactsReducer from "../redux/contacts/contacts-reducer";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import { composeWithDevTools } from "redux-devtools-extension";

// import storage from "redux-persist/lib/storage";

// const contactsPersistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["filter"],
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

// const dulo = { store, persistor };

export default store;
