import React, { useState } from "react";
import MenuAppBar from "./MenuAppBar";
import MenuDrawer from "./MenuDrawer";

const NavigationBar = () => {
  const [openState, setOpenState] = useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenState({ ...openState, [anchor]: open });
  };
  return (
    <>
      <MenuAppBar toggleDrawer={toggleDrawer} />
      <MenuDrawer toggleDrawer={toggleDrawer} openState={openState} />
    </>
  );
};

export default NavigationBar;
