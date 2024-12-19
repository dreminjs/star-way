import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import { MainWrapper } from "./ui/main-wrapper";
import { PAGE_URLS } from "../shared/model/constants";
import { StarPage } from "../pages/star";
import { TasksPage } from "../pages/tasks/ui/tasks-page";
import { InfoPage } from "../pages/info";
import { FriendsPage } from "../pages/friends";

Telegram.WebApp.disableVerticalSwipes()

Telegram.WebApp.expand()

useEffect(() => {
  const tg = window.Telegram.WebApp;
  tg.ready(); // Сообщает Telegram, что приложение готово
}, []);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainWrapper />}>
          <Route path={PAGE_URLS.home} element={<StarPage/>}/>
          <Route path={PAGE_URLS.tasks} element={<TasksPage/>} />
          <Route path={PAGE_URLS.friends} element={<FriendsPage/>  }/>
          <Route path="info" element={<InfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
