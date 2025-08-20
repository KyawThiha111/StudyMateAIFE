import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import authReducer from "./auth.slice";
import { baseAPI } from "@/api/base.config";
import { persistConfig } from "./persist";
import latestLessonReducer from "./latestlession.slice"
const rootReducer = combineReducers({
  auth: authReducer,
  latestLesson:latestLessonReducer,
  [baseAPI.reducerPath]: baseAPI.reducer,
});



const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer as any,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseAPI.middleware
    ),
});

export const persistor = persistStore(store);

// Inferred types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

