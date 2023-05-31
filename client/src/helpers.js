
//# src/helpers.js
    
import { useState } from "react";
import { AUTH_TOKEN, USER_DATA } from "./constant";

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};

export const setDataUser = (user) => {
  if (user) {
    localStorage.setItem(USER_DATA, user);
  }
};

export const getDataUser = () => {
  return localStorage.getItem(USER_DATA);
};