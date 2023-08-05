// import { LOGIN, LOGOUT } from "../constants";
const initialState = {
  users: "null",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, users: action.payload };
    case "LOGOUT":
      return { ...state, users: null };
    default:
      return state;
  }
}
export const selectUser = (state) => state.users.users;
export default userReducer;
