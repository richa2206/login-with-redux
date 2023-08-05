import React from "react";
// import "./Logout.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/actions";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      <h1>
        Welcome <span className="user__name">Richa</span>
      </h1>
      <button type="btn" className="logout__button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
