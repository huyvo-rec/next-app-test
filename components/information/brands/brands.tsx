import Image from "next/image";
import React from "react";

import logoANGEL from "../../../assets/images/logoANGEL.svg";
import logoMEDIUM from "../../../assets/images/logoMEDIUM.svg";
import logoOMS from "../../../assets/images/logoOMS.svg";
import logoUZU from "../../../assets/images/logoUZU.svg";
import logoWEDDING from "../../../assets/images/logoWEDDING.svg";
import styles from "./brands.module.scss";

const Brands = () => {
  return (
    <div className={`${styles[`brands`]}`}>
      <div className={`${styles[`brands__item`]}`}>
        <Image
          src={logoANGEL}
          alt="logo"
          className={`${styles[`filter-gray`]}`}
        />
        <Image
          src={logoMEDIUM}
          alt="logo"
          className={`${styles[`filter-gray`]}`}
        />
        <Image
          src={logoOMS}
          alt="logo"
          className={`${styles[`filter-gray`]}`}
        />
        <Image
          src={logoUZU}
          alt="logo"
          className={`${styles[`filter-gray`]}`}
        />
        <Image
          src={logoWEDDING}
          alt="logo"
          className={`${styles[`filter-gray`]}`}
        />
      </div>
    </div>
  );
};

export default Brands;
