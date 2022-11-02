import React, { Component } from "react";
import Brands from "./brands/brands";
import Content from "./content/content";
import Header from "./header/header";

import styles from "./information.module.scss";
const Information = () => {
  return (
    <div className={`${styles[`information`]}`}>
      <div className={`${styles[`information__container`]}`}>
        <div className={`${styles[`information__header`]}`}>
          <Header />
        </div>
        <div className={`${styles[`information__content`]} `}>
          <Content />
        </div>
        <div className={`${styles[`information__brands`]}`}>
          <Brands />
        </div>
      </div>
    </div>
  );
};

export default Information;
