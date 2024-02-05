import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// local state
import { userSlice } from "./slices";

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
});
// it's only for RTK Query
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
