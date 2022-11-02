import { Component } from "react";

import styles from "./slider.module.scss";

const Slider = () => {
  return (
    <div className={`${styles[`slider`]}`}>
      <div className={`${styles[`slider__text`]}`}>
        <p className={`${styles[`slider__text--gradients`]}`}>
          Your finances in your pocket
        </p>

        <div className={`${styles[`slider__text--black`]}`}>
          Get your personal <span>Credit card now</span>
        </div>
        <div className={`${styles[`slider__text--small`]}`}>
          Rewards and benefits without the downsides of a credit card.
          Simplicity and transparency buit right in. Leave money issue. with us
          and focus on your core business.
        </div>
        <div className={`${styles[`slider__text-button`]}`}>
          <button>Learn more</button>
        </div>
      </div>

      <div className={`${styles[`slider__dot`]}`}>
        <span
          className={`${styles[`dot__item`]} ${styles[`dot__item--active`]}`}
        ></span>
        <span className={`${styles[`dot__item`]}`}></span>
        <span className={`${styles[`dot__item`]}`}></span>
      </div>
    </div>
  );
};

export default Slider;
