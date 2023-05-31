import { useState } from "react";
import { AUTH_TOKEN } from "./constant";

const [userData, setUserData] = useState(null);

const UserData = (data) => {
  setUserData(data);
  console.log(userData)
};

export  const getUserData = () => {
  return this.userData;
  //localStorage.removeItem(AUTH_TOKEN);
};