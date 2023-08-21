import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchWeather from "./pages/SearchWeather";
import DayCardWeather from "./pages/DayCardWeather";
import WeekCardWeather from "./pages/WeekCardWeather";
import { ErrorPage } from "./pages/ErrorPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchWeather />}>
          <Route
            path="week/:area"
            element={<WeekCardWeather></WeekCardWeather>}
          ></Route>
          <Route
            path="day/:area"
            element={<DayCardWeather></DayCardWeather>}
          ></Route>
        </Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
