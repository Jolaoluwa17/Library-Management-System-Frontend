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
import { AddAdmin } from "./admin/AddAdmin";
import { MembersViewDetails } from "./admin/MembersViewDetails";
import { CategorySidebarResult } from "./components/CategorySidebarResult";
import {
  AdminContextProvider,
  NonStudentContextProvider,
  StudentContextProvider,
} from "./components/Context/Context";
import { useContext } from "react";
import {
  studentContext,
  nonStudentContext,
  adminContext,
} from "./components/Context/Context";
import { useState } from "react";

import { Test } from "./User/Test";
function App() {
  const { student } = useContext(studentContext);
  const { nonStudent } = useContext(nonStudentContext);
  const { admin } = useContext(adminContext);

  let user = student ? student : nonStudent;
  if (!user) {
    user = "";
  }

  //add to cart
  const [cart, setCart] = useState([]);
  const [cartFull, setCartFull] = useState(false);

  const MAX_ITEMS = 1; // Maximum number of items allowed in cart

  const handleClickCart = (item) => {
    if (cart.indexOf(item) !== -1) {
      return;
    }

    if (cart.length === MAX_ITEMS) {
      setCartFull(true);
      return;
    }

    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes></Routes>
        <AdminContextProvider>
          <Routes>
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route element={admin ? <Admin admin={admin} /> : <AdminLogin />}>
              <Route path="/dashboard" element={<Dashboard admin={admin} />} />
              <Route path="/settings" element={<Settings admin={admin} />} />
              <Route
                path="/totalbooks"
                element={<TotalBooks admin={admin} />}
              />
              <Route path="/addbook" element={<AddBook admin={admin} />} />
              <Route path="/addAdmin" element={<AddAdmin admin={admin} />} />
              <Route
                path="/adminTransactions"
                element={<AdminTransactions admin={admin} />}
              />
              <Route
                path="/seeLoanedBooksDetails"
                element={<SeeLoanedBooksDetails admin={admin} />}
              />
              <Route
                path="/seeAppliedBooksDetails"
                element={<SeeAppliedBooksDetails admin={admin} />}
              />
              <Route
                path="/seeReturnedBooksDetails"
                element={<SeeReturnedBooksDetails admin={admin} />}
              />
              <Route
                path="/seeDeclinedBooksDetails"
                element={<SeeDeclinedBooksDetails admin={admin} />}
              />
              <Route path="/members" element={<Members admin={admin} />} />
              <Route
                path="/membersViewDetails"
                element={<MembersViewDetails admin={admin} />}
              />
            </Route>
          </Routes>
        </AdminContextProvider>
        <StudentContextProvider>
          <NonStudentContextProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
              <Route element={nonStudent || student ? <User /> : <Login />}>
                <Route path="/library" element={<Library user={user.user} />} />
                <Route
                  path="/userSettings"
                  element={<UserSettings user={user.user} />}
                />
                <Route
                  path="/browselibrary"
                  element={
                    <BrowseLibrary
                      user={user.user}
                      handleClick={handleClickCart}
                      cartFull={cartFull}
                      setCartFull={setCartFull}
                    />
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <Cart user={user.user} cart={cart} setCart={setCart} />
                  }
                />
                <Route
                  path="/transactions"
                  element={<Transactions user={user.user} />}
                />
                <Route
                  path="/libraryCard"
                  element={<LibraryCard user={user.user} />}
                />
                <Route
                  path="/userSeeLoanedBooksDetails"
                  element={<UserSeeLoanedBooksDetails user={user.user} />}
                />
                <Route
                  path="/userSeeAppliedBooksDetails"
                  element={<UserSeeAppliedBooksDetails user={user.user} />}
                />
                <Route
                  path="/userSeeReturnedBooksDetails"
                  element={<UserSeeReturnedBooksDetails user={user.user} />}
                />
                <Route
                  path="/userSeeDeclinedBooksDetails"
                  element={<UserSeeDeclinedBooksDetails user={user.user} />}
                />
                <Route
                  path="/categorySidebarResult"
                  element={<CategorySidebarResult user={user.user} />}
                />
                <Route
                  path="/test"
                  element={
                    <Test user={user.user} handleClick={handleClickCart} />
                  }
                />
              </Route>
            </Routes>
          </NonStudentContextProvider>
        </StudentContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
