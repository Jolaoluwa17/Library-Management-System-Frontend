export const studentLoginStart = (studentCredentials) => ({
  type: "LOGIN_START",
});

export const studentLoginSuccess = (student) => ({
  type: "LOGIN_SUCCESS",
  payload: student,
});

export const studentLoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const studentLogout = () => ({
  type: "LOGOUT",
});

export const nonStudentLoginStart = (nonStudentCredentials) => ({
  type: "LOGIN_START",
});

export const nonStudentLoginSuccess = (nonStudent) => ({
  type: "LOGIN_SUCCESS",
  payload: nonStudent,
});

export const nonStudentLoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const nonStudentLogout = () => ({
  type: "LOGOUT",
});

export const adminLoginStart = (adminCredentials) => ({
  type: "LOGIN_START",
});

export const adminLoginSuccess = (admin) => ({
  type: "LOGIN_SUCCESS",
  payload: admin,
});

export const adminLoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const adminLogout = () => ({
  type: "LOGOUT",
});
