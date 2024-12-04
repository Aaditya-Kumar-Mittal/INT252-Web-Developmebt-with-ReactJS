import React from "react";
import { Route, Routes } from "react-router-dom";
import ETPQuestionUserHome1 from "../pages/ETPQuestionUserHome1";
import ETPQuestionUserAbout1 from "../pages/ETPQuestionUserAbout1";
import ETPQuestionUser1 from "../pages/ETPQuestionUser1";

function ETPQuestionsRouterUserDataPass() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ETPQuestionUserHome1 />} />
        <Route path="/aboutUser" element={<ETPQuestionUserAbout1 />} />
        <Route path="/userUser" element={<ETPQuestionUser1 />} />
      </Routes>
    </div>
  );
}

export default ETPQuestionsRouterUserDataPass;
