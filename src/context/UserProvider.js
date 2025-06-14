// src/context/UserProvider.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    let uid = localStorage.getItem("userUID");
    if (!uid) {
      uid = uuidv4();
      localStorage.setItem("userUID", uid);
    }
    setUserId(uid);
  }, []);

  return (
    <UserContext.Provider value={{ userId }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
