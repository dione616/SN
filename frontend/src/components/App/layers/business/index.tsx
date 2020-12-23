import React, { useState } from "react";

const AppBLContext = React.createContext({
  auth: false,
  data: {
    name: "",
    surname: "",
  },
  setValues: (newProfileData: any) => {},
});

const AppBLContextProvider = ({ children }: { children: any }) => {
  const [profileData, setProfileData] = useState({ name: "", surname: "" });
  const setValues = (newProfileData: any) => {
    setProfileData(newProfileData);
  };
  return (
    <AppBLContext.Provider
      value={{ auth: false, data: profileData, setValues }}
    >
      {children}
    </AppBLContext.Provider>
  );
};

export { AppBLContextProvider, AppBLContext };
