import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Job from "./pages/Job";
import Center from "./pages/Center";
import Favorites from "./pages/Favorites";
import Detail from "./components/Detail";
import JobResult from "./pages/JobResult";
import SearchContainer from "./components/SearchContainer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Job />} />
          <Route path="/center" element={<Center />} />
          <Route path="detail">
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="jobResult/*" element={<SearchContainer />}>
            <Route path=":sigun" element={<JobResult />} />
          </Route>
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
