import React, { useState } from "react";

const AppBLContext = React.createContext({
  auth: false,
  data: {
    name: "",
    surname: "",
  },
});

const AppBLContextProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({ name: "", surname: "" });
  const setValues = (newProfileData) => {
    setProfileData(newProfileData);
  };
  return (
    <AppBLContext.Provider value={{ profileData, setValues }}>
      {children}
    </AppBLContext.Provider>
  );
};

export { AppBLContextProvider, AppBLContext };
