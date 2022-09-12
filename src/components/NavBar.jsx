import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-evenly">
        <Link to="/registration">Log In</Link>

        <Link to="/login">Sing In</Link>

        <Link to="/link">Link</Link>
      </div>
    </>
  );
}

export default NavBar;
