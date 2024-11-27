import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import { MainWrapper } from "./ui/main-wrapper";
import { PAGE_URLS } from "../shared/model/constants";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainWrapper />}>
          <Route path={PAGE_URLS.home}/>
          <Route path={PAGE_URLS.tasks}/>
          <Route path={PAGE_URLS.friends}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
