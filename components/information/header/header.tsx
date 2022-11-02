import { Component } from "react";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={`${styles[`header`]}`}>
      <div className={`${styles[`header__logo`]}`}>
        <div className={`${styles[`header__logo-img`]}`}>
          <div className={`${styles[`img__layout1`]}`}></div>
          <div className={`${styles[`img__layout2`]}`}></div>
        </div>
        <div className={`${styles[`header__logo-name`]}`}>finely</div>
      </div>
      <div className={`${styles[`header__menu`]}`}>
        <ul className={`${styles[`header__menu-list`]}`}>
          <li className={`${styles[`list__item`]} ${styles[`font--mulish`]}`}>
            Features
          </li>
          <li className={`${styles[`list__item`]} ${styles[`font--mulish`]}`}>
            About
          </li>
          <li className={`${styles[`list__item`]} ${styles[`font--mulish`]}`}>
            Cards
          </li>
          <li className={`${styles[`list__item`]} ${styles[`font--mulish`]}`}>
            FAQ
          </li>
          <li className={`${styles[`list__item`]} ${styles[`font--mulish`]}`}>
            Contact
          </li>
        </ul>
      </div>
      <div className={`${styles[`header__button`]}`}>
        <button>Get a card</button>
      </div>
    </div>
  );
};

export default Header;
