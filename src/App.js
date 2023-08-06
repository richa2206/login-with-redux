import { useDispatch, useSelector } from "react-redux";
import React from "react";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
// import userReducer from "./redux/reducer/reducer";
import { login, logout } from "./redux/actions/actions";

function App() {
  const user = useSelector((data) => data.users);
  return (
    <div className="App">
      {/* <div>{JSON.stringify(user)}</div> */}
      {user.name.length <= 0 ? <Login /> : <Logout />}
    </div>
  );
}

export default App;
