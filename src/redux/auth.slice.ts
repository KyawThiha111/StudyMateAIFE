// src/redux/auth.slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "@/api/auth.api";

interface userType {
    name:string,
    email:string
}
interface AuthState {
  accessToken:string|null;
  isAuthenticated: boolean;
}

/*  const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
}; */ 

const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /* login:(state,action:PayloadAction<{token:string}>)=>{
      state.accessToken = action.payload.token;
      state.isAuthenticated = true
    }, */
    logout: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state.accessToken = action.payload.token;
      state.isAuthenticated = true;
      console.log(action.payload)
    });
    builder.addMatcher(authApi.endpoints.signup.matchFulfilled, (state, action) => {
      state.accessToken = action.payload.token;
      state.isAuthenticated = true;
    });
  },
});

export const { logout} = authSlice.actions;
export default authSlice.reducer;
