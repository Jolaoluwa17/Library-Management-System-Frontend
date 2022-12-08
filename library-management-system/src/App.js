import {
  BrowserRouter as Router,
  Routes,
  Route,
//   BrowserRouter,
} from "react-router-dom";
import {Login} from "./views/Login";
import {Signup} from "./views/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
