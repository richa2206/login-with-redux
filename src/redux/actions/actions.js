// import { LOGIN, LOGOUT } from "../constants";
export const login = (users) => {
  return {
    type: "LOGIN",
    payload: users,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
