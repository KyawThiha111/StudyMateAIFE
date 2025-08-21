// src/redux/persist.ts
import storage from "redux-persist/lib/storage";
const persistSlices = ["auth","latestLesson"]
export const persistConfig = {
  key: "root",
  storage:storage,
  devTools:true,
  whitelist: persistSlices, // persist only the auth slice
};
