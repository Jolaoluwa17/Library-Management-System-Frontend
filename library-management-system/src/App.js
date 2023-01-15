import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import { Admin } from "./components/Admin";
import { Dashboard } from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Admin />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
