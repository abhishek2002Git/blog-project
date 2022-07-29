import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // to close and open sidebar
  const [sidebar, setSidebar] = useState(false); 
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  // to detect click outside of sidebar and close it
  const [outsideClick, setOutsideClick] = useState(false);
  const closeSidebar = () => {
    setOutsideClick(true);
    console.log(outsideClick);
  }

  return (
    <AppContext.Provider
      value={{
        sidebar, showSidebar, outsideClick, closeSidebar, setSidebar
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export default AppProvider;
