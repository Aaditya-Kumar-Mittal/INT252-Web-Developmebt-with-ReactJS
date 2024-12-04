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
import { Provider } from "react-redux";
import store1 from "./redux/store1.js";
import ETPReduxStore1 from "./ETPReduxStore1.jsx";
import ETPQuestionTodoList1 from "./questions/ETPQuestionTodoList1.jsx";
import ETPQuestionsUserCardParent1 from "./questions/ETPQuestionsUserCardParent1.jsx";
import ETPQuestionRegistrationForm1 from "./questions/ETPQuestionRegistrationForm1.jsx";
import todoStore1 from "./redux/todoStore1.js";
import ETPQuestionTodoList2 from "./questions/ETPQuestionTodoList2.jsx";
import ETPQuestionsContactForm1 from "./questions/ETPQuestionsContactForm1.jsx";
import ETPQuestionsProfileCardParent1 from "./questions/ETPQuestionsProfileCardParent1.jsx";
import ETPQuestionsRouterUserDataPass from "./questions/ETPQuestionsRouterUserDataPass.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}

    {/* <BrowserRouter>
      <ETPNavigation1 />
    </BrowserRouter> */}

    {/* <BrowserRouter>
      <ETPPassFetch1 />
    </BrowserRouter> */}

    {/* <Provider store={store1}>
      <ETPReduxStore1 />
    </Provider> */}

    {/* <Provider store={todoStore1}>
      <ETPQuestionTodoList2 />
    </Provider> */}

    {/* <ETPQuestionsContactForm1/> */}
    {/* <ETPQuestionsProfileCardParent1/> */}

    {/* <ETPCustomHookDemo/> */}
    {/* <ETPEventHandling1 /> */}
    {/* <ETPFormHandling1 /> */}
    {/* <ETPMethodsHTTPAxios1 /> */}
    {/* <ETPMethodsHTTPFetch1 /> */}
    {/* <ETPMethodHTTPPost1/> */}
    {/* <ETPQuestionsUserCardParent1/>*/}
    {/*<ETPQuestionRegistrationForm1/>  */}

    <BrowserRouter>
      <ETPQuestionsRouterUserDataPass />
    </BrowserRouter>
  </StrictMode>
);
