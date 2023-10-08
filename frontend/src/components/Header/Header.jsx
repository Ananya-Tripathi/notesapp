import React from "react";
import { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import TokenContext from "../../context/TokenContext.js";
import "./header.css";
function Header() {
  const token = localStorage.getItem("authToken");
  const { user } = useContext(TokenContext);

  const logout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <div>
      <nav className="header bg-[#10083c] flex justify-between items-center min-h-[100px] shadow-md shadow-white text-white">
        <div className="logo w-1/4 text-center">
          <NavLink to="/">Notes App</NavLink>
        </div>
        <div className="flex justify-between">
          {token ? (
            <div className="flex items-center justify-center">
              <p className="mr-5">
                welcome,{" "}
                <span className=" text-xl font-bold capitalize">
                  {user.name}
                </span>
              </p>
              <Link to="/create">
                <button className="logout mr-4">Create</button>
              </Link>
              <button onClick={logout} className="logout mr-4">
                Logout
              </button>
            </div>
          ) : (
            <ul className="flex justify-end gap-3 w-3/4 pr-6">
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
