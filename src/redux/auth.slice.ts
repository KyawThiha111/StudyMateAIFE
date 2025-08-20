// src/redux/auth.slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "@/api/auth.api";

interface userType {
    name:string,
    email:string
}
interface AuthState {
  userinfo:userType|null;
  accessToken:string|null;
  isAuthenticated: boolean;
}

/*  const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
}; */ 

const initialState: AuthState = {
    userinfo:null,
  accessToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login:(state,action:PayloadAction<{user:AuthState["userinfo"],token:string}>)=>{
      state.userinfo = action.payload.user;
      state.accessToken = action.payload.token;
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.userinfo = null;
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state.accessToken = action.payload.loginToken;
      state.isAuthenticated = true;
    });
    builder.addMatcher(authApi.endpoints.signup.matchFulfilled, (state, action) => {
      state.accessToken = action.payload.loginToken;
      state.isAuthenticated = true;
    });
  },
});

export const { logout,login} = authSlice.actions;
export default authSlice.reducer;
