import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./views/Login";
import { AdminLogin } from "./views/AdminLogin";
import { Signup } from "./views/Signup";
import { Admin } from "./admin/Admin";
import { Dashboard } from "./admin/Dashboard";
import { Settings } from "./admin/Settings";
import { TotalBooks } from "./admin/TotalBooks";
import { AddBook } from "./admin/AddBook";
import { IssueBook } from "./admin/IssueBook";
import { LandingPage } from "./views/LandingPage";
import { PasswordRecovery } from "./views/PasswordRecovery";
import { User } from "./User/User";
import { Library } from "./User/Library";
import { UserSettings } from "./User/UserSettings";
import BrowseLibrary from "./User/BrowseLibrary";
import { UserViewDetails } from "./User/UserViewDetails";
import { Cart } from "./User/Cart";
import { Transactions } from "./User/Transactions";
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
            <Route path="/totalbooks" element={<TotalBooks />} />
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/issuebook" element={<IssueBook />} />
          </Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route element={<User />}>
            <Route path="/Library" element={<Library />} />
            <Route path="/userSettings" element={<UserSettings />} />
            <Route path="/browselibrary" element={<BrowseLibrary />} />
            <Route path="/userViewDetails" element={<UserViewDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/transactions" element={<Transactions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
