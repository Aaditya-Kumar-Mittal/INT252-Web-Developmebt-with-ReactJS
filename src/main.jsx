import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import ETPCustomHookDemo from "./components/ETPCustomHookDemo.jsx";
import ETPEventHandling1 from "./components/ETPEventHandling1.jsx";
import ETPFormHandling1 from "./components/ETPFormHandling1.jsx";
import ETPMethodsHTTPAxios1 from "./components/ETPMethodsHTTPAxios1.jsx";
import ETPMethodsHTTPFetch1 from "./components/ETPMethodsHTTPFetch1.jsx";
import ETPMethodHTTPPost1 from "./components/ETPMethodHTTPPost1.jsx";
import { BrowserRouter } from "react-router-dom";
import ETPNavigation1 from "./ETPNavigation1.jsx";
import ETPPassFetch1 from "./ETPPassFetch1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <ETPNavigation1 /> */}
      <ETPPassFetch1/>
    </BrowserRouter>

    {/* <ETPCustomHookDemo/> */}
    {/* <ETPEventHandling1 /> */}
    {/* <ETPFormHandling1 /> */}
    {/* <ETPMethodsHTTPAxios1 /> */}
    {/* <ETPMethodsHTTPFetch1 /> */}
    {/* <ETPMethodHTTPPost1/> */}
  </StrictMode>
);
