import React from "react";
import classes from "./header.module.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={classes.Header}>
      <img src={logo} className={classes.HeaderLogo} alt="logo" />
      <p className={classes.HeaderTitle}>Todo List</p>
      <div className={classes.HeaderLink}>
        <Link to="/" className={classes.HeaderLink}>
          HOME
        </Link>{" "}
        |{" "}
        <Link to="/about" className={classes.HeaderLink}>
          ABOUT
        </Link>
      </div>
    </header>
  );
};

export default Header;
