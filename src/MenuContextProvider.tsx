import React, { createContext, useEffect, useState } from "react";

export const MenuContext = createContext({
  showMenu: false,
  setShowMenu: (val: boolean) => {
    console.log(val);
  },
});

export const MenuContextProvider: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("menu-visible");
    } else {
      document.body.classList.remove("menu-visible");
    }
  }, [showMenu]);

  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
