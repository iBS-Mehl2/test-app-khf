import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";

const NavigationPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default NavigationPage;
