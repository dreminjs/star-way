import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import { MainWrapper } from "./ui/main-wrapper";
import { PAGE_URLS } from "../shared/model/constants";
import { StarPage } from "../pages/star";
import { TasksPage } from "../pages/tasks/ui/tasks-page";

document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    console.log('Приложение свернуто');
    // Ваш код для обработки сворачивания
  } else {
    console.log('Приложение активно');
    // Ваш код для обработки активации
  }
});

Telegram.WebApp.disableVerticalSwipes()


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainWrapper />}>
          <Route path={PAGE_URLS.home} element={<StarPage/>}/>
          <Route path={PAGE_URLS.tasks} element={<TasksPage/>} />
          <Route path={PAGE_URLS.friends}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
