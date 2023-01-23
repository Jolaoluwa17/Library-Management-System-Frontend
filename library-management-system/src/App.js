import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import { Admin } from "./admin/Admin";
import { Dashboard } from "./admin/Dashboard";
import { Settings } from "./admin/Settings";
import { LandingPage } from "./views/LandingPage";
import { PasswordRecovery } from "./views/PasswordRecovery";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Admin />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/PasswordRecovery" element = {<PasswordRecovery/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
