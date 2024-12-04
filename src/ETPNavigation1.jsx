import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarNav from "./pages/NavbarNav";
import HomeNav from "./pages/HomeNav";
import AboutNav from "./pages/AboutNav";
import ContactNav from "./pages/ContactNav";

function ETPNavigation1() {
  return (
    <div>
      <NavbarNav />
      <Routes>
        <Route path="/" element={<HomeNav />} />
        <Route path="/aboutNav" element={<AboutNav />} />
        <Route path="/contactNav" element={<ContactNav />} />
      </Routes>
    </div>
  );
}

export default ETPNavigation1;
