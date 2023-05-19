import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

// export const persistor = persistStore(store);
