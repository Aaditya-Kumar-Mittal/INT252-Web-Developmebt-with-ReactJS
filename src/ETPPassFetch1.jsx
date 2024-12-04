import React from "react";
import { Route, Routes } from "react-router-dom";
import PassHome from "./pages/PassHome";
import PassDetails from "./pages/PassDetails";

function ETPPassFetch1() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PassHome />} />
        <Route path="/details" element={<PassDetails/>} />
      </Routes>
    </div>
  );
}

export default ETPPassFetch1;
