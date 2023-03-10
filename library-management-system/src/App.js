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
import { AddAdmin } from "./admin/AddAdmin";
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
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const { student } = useContext(studentContext);
  const { nonStudent } = useContext(nonStudentContext);
  const { admin } = useContext(adminContext);

  //for add to cart function
  const [pendingData, setPendingData] = useState([]);

  useEffect(() => {
    const fetchPendingData = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setPendingData(res.data);
    };
    fetchPendingData();
  }, []);

  const { products } = pendingData;
  // console.log(products)
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  // end
  return (
    <div className="App">
      <BrowserRouter>
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
              <Route
                element={
                  nonStudent || student ? (
                    <User student={student} nonStudent={nonStudent} />
                  ) : (
                    <Login />
                  )
                }
              >
                <Route
                  path="/Library"
                  element={
                    <Library student={student} nonStudent={nonStudent} />
                  }
                />
                <Route
                  path="/userSettings"
                  element={
                    <UserSettings student={student} nonStudent={nonStudent} />
                  }
                />
                <Route
                  path="/browselibrary"
                  element={
                    <BrowseLibrary student={student} nonStudent={nonStudent} />
                  }
                />
                <Route
                  path="/userViewDetails"
                  element={
                    <UserViewDetails
                      student={student}
                      nonStudent={nonStudent}
                      products={products}
                      onAdd={onAdd}
                    />
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <Cart
                      student={student}
                      nonStudent={nonStudent}
                      onAdd={onAdd}
                      onRemove={onRemove}
                    />
                  }
                />
                <Route
                  path="/transactions"
                  element={
                    <Transactions student={student} nonStudent={nonStudent} />
                  }
                />
                <Route
                  path="/libraryCard"
                  element={
                    <LibraryCard student={student} nonStudent={nonStudent} />
                  }
                />
                <Route
                  path="/userSeeLoanedBooksDetails"
                  element={
                    <UserSeeLoanedBooksDetails
                      student={student}
                      nonStudent={nonStudent}
                    />
                  }
                />
                <Route
                  path="/userSeeAppliedBooksDetails"
                  element={
                    <UserSeeAppliedBooksDetails
                      student={student}
                      nonStudent={nonStudent}
                    />
                  }
                />
                <Route
                  path="/userSeeReturnedBooksDetails"
                  element={
                    <UserSeeReturnedBooksDetails
                      student={student}
                      nonStudent={nonStudent}
                    />
                  }
                />
                <Route
                  path="/userSeeDeclinedBooksDetails"
                  element={
                    <UserSeeDeclinedBooksDetails
                      student={student}
                      nonStudent={nonStudent}
                    />
                  }
                />
                <Route
                  path="/categorySidebarResult"
                  element={
                    <CategorySidebarResult
                      student={student}
                      nonStudent={nonStudent}
                    />
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
