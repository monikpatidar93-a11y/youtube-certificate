import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from "./pages/Verify";
import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Certificate from "./pages/Certificate";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/certificate" element={<Certificate />} />

      </Routes>

    </BrowserRouter>
  );
}
<Route
  path="/verify/:id"
  element={<Verify />}
/>

export default App;