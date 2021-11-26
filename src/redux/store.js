import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import phonebookReducer from "./phonebook-reducer";

///////// пример прослойки /////////////////
// const myMiddleware = (store) => (next) => (action) => {
//   console.log("wewe", action);

//   next(action);
// };
//////////////////////////////////////////////

const middleware = [
  ...getDefaultMiddleware(),
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
  // // myMiddleware,
  // logger,
];

// const persistConfig = {
//   key: "contacts",
//   storage,
//   blackList: ["filter"],
// };

export const store = configureStore({
  reducer: {
    // contacts: persistReducer(persistConfig, phonebookReducer),
    contacts: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// export const persistor = persistStore(store);
