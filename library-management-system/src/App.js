import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./views/Login";
import { AdminLogin } from "./views/AdminLogin";
import { Signup } from "./views/Signup";
import { Admin } from "./admin/Admin";
import { Dashboard } from "./admin/Dashboard";
import { Settings } from "./admin/Settings";
import { TotalBooks } from "./admin/TotalBooks";
import { AddBook } from "./admin/AddBook";
import { LandingPage } from "./views/LandingPage";
import { PasswordRecovery } from "./views/PasswordRecovery";
import { User } from "./User/User";
import { Library } from "./User/Library";
import { UserSettings } from "./User/UserSettings";
import BrowseLibrary from "./User/BrowseLibrary";
import { UserViewDetails } from "./User/UserViewDetails";
import { Cart } from "./User/Cart";
import { Transactions } from "./User/Transactions";
import { AdminTransactions } from "./admin/AdminTransactions";
import { SeeLoanedBooksDetails } from "./components/SeeLoanedBooksDetails";
import { LibraryCard } from "./User/LibraryCard";
import { SeeAppliedBooksDetails } from "./components/SeeAppliedBooksDetails";
import { SeeReturnedBooksDetails } from "./components/SeeReturnedBooksDetails";
import { SeeDeclinedBooksDetails } from "./components/SeeDeclinedBooksDetails";
import { UserSeeAppliedBooksDetails } from "./components/UserSeeAppliedBooksDetails";
import { UserSeeLoanedBooksDetails } from "./components/UserSeeLoanedBooksDetails";
import { UserSeeReturnedBooksDetails } from "./components/UserSeeReturnedBooksDetails";
import { UserSeeDeclinedBooksDetails } from "./components/UserSeeDeclinedBooksDetails";
import { Members } from "./admin/Members";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route element={<Admin />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/totalbooks" element={<TotalBooks />} />
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/adminTransactions" element={<AdminTransactions/>} />
            <Route path="/seeLoanedBooksDetails" element={<SeeLoanedBooksDetails />} />
            <Route path="/seeAppliedBooksDetails" element={<SeeAppliedBooksDetails />} />
            <Route path="/seeReturnedBooksDetails" element={<SeeReturnedBooksDetails />} />
            <Route path="/seeDeclinedBooksDetails" element={<SeeDeclinedBooksDetails />} />
            <Route path="/members" element={<Members />} />
          </Route>
          <Route element={<User />}>
            <Route path="/Library" element={<Library />} />
            <Route path="/userSettings" element={<UserSettings />} />
            <Route path="/browselibrary" element={<BrowseLibrary />} />
            <Route path="/userViewDetails" element={<UserViewDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/libraryCard" element={<LibraryCard />} />
            <Route path="/userSeeLoanedBooksDetails" element={<UserSeeLoanedBooksDetails />} />
            <Route path="/userSeeAppliedBooksDetails" element={<UserSeeAppliedBooksDetails />} />
            <Route path="/userSeeReturnedBooksDetails" element={<UserSeeReturnedBooksDetails />} />
            <Route path="/userSeeDeclinedBooksDetails" element={<UserSeeDeclinedBooksDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
