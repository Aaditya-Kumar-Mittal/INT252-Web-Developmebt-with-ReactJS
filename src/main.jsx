import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import ETPUseStyle from "./components/ETPUseStyle.jsx";
import ETPParent1 from "./components/ETPParent1.jsx";
import ETPPropsParentArray1 from "./components/ETPPropsParentArray1.jsx";
import ETPPropsParentObject1 from "./components/ETPPropsParentObject1.jsx";
import ETPHooksUseState1 from "./components/ETPHooksUseState1.jsx";
import ETPHooksUseEffect1 from "./components/ETPHooksUseEffect1.jsx";
import ETPHooksUseEffect2 from "./components/ETPHooksUseEffect2.jsx";
import ETPHooksUseContext1 from "./components/ETPHooksUseContext1.jsx";
import ETPHooksUseRef1 from "./components/ETPHooksUseRef1.jsx";
import ETPHooksUseReducer1 from "./components/ETPHooksUseReducer1.jsx";
import ETPHooksUseCallback1 from "./components/ETPHooksUseCallback1.jsx";
import ETPHooksUseMemo1 from "./components/ETPHooksUseMemo1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ETPUseStyle/> */}
    {/* <ETPParent1/> */}
    {/* <ETPPropsParentArray1/> */}
    {/* <ETPPropsParentObject1/> */}
    {/* <ETPHooksUseState1/> */}
    {/* <ETPHooksUseEffect1/> */}
    {/* <ETPHooksUseEffect2/> */}
    {/* <ETPHooksUseContext1/> */}
    {/* <ETPHooksUseRef1 /> */}
    {/* <ETPHooksUseReducer1 /> */}
    {/* <ETPHooksUseCallback1 /> */}
    <ETPHooksUseMemo1 />
  </StrictMode>
);
