// src/api/auth.api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {baseAPI} from "./base.config"

export const authApi = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
    login: builder.mutation<{ loginToken: string }, { email: string; password: string }>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    signup: builder.mutation<{ loginToken: string }, { email: string; password: string; name: string }>({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
    }),
  }),
})

export const { useLoginMutation, useSignupMutation } = authApi;
