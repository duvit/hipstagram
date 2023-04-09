import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import UserPage from "./Pages/MainPage/UserPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
