import React from "react";
import { AuthContext } from "./AuthContext";

const ContextProvider = ({ children }) => {
  const userInfo = { name: "kana" };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default ContextProvider;
