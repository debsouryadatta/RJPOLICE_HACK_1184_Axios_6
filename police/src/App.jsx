import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./Login/login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}