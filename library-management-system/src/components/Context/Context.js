import { createContext, useReducer } from "react";
import { studentReducer } from "./Reducer";
import { nonStudentReducer } from "./Reducer";
import { adminReducer } from "./Reducer";
import { useEffect } from "react";

const studentINITIAL_STATE = {
  student: JSON.parse(localStorage.getItem("student")) || null,
  isFetching: false,
  error: false,
};

const adminINITIAL_STATE = {
  admin: JSON.parse(localStorage.getItem("admin")) || null,
  isFetching: false,
  error: false,
};

const nonStudentINITIAL_STATE = {
  nonStudent: JSON.parse(localStorage.getItem("nonStudent")) || null,
  isFetching: false,
  error: false,
};

export const studentContext = createContext(studentINITIAL_STATE);
export const nonStudentContext = createContext(nonStudentINITIAL_STATE);
export const adminContext = createContext(adminINITIAL_STATE);

export const StudentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, studentINITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(state.student));
  }, [state.student]);
  return (
    <studentContext.Provider
      value={{
        student: state.student,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </studentContext.Provider>
  );
};
export const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, adminINITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(state.admin));
  }, [state.admin]);
  return (
    <adminContext.Provider
      value={{
        admin: state.admin,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </adminContext.Provider>
  );
};

export const NonStudentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(nonStudentReducer, nonStudentINITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("nonStudent", JSON.stringify(state.nonStudent));
  }, [state.nonStudent]);
  return (
    <nonStudentContext.Provider
      value={{
        nonStudent: state.nonStudent,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </nonStudentContext.Provider>
  );
};
