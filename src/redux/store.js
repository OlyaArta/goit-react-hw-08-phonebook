import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import phonebookReducer from "../redux/phonebook/phonebook-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { authReducer } from "./auth";

const middleware = [
  ...getDefaultMiddleware(),
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
  // // myMiddleware,
  // logger,
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

///////// пример прослойки /////////////////
// const myMiddleware = (store) => (next) => (action) => {
//   console.log("wewe", action);

//   next(action);
// };
//////////////////////////////////////////////
