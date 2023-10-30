import React from "react";
import CartButton from "../Card/CartButton";
import classes from "./MainHeader.module.css";
const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>Redux Cart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
