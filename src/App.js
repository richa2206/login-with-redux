import { useSelector } from "react-redux";
import React from "react";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
// import userReducer from "./redux/reducer/reducer";
import { selectUser } from "./redux/reducer/reducer";

function App() {
  const user = useSelector(selectUser);
  return <div className="App">{user ? <Logout /> : <Login />}</div>;
}

export default App;
