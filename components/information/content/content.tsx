import { Component } from "react";
import { IFormItem } from "../../../contants/IFormItem";

import Slider from "./slider/slider";
import Card from "./card/card";

import styles from "./content.module.scss";

interface Props {
  form?: IFormItem;
}

const Content: React.FC = (props: Props) => {
  const { form } = props;

  return (
    <div className={`${styles[`content`]}`}>
      <div className={`${styles[`content__container`]}`}>
        <div className={`${styles[`content__slider`]}`}>
          <Slider />
        </div>

        <div className={`${styles[`content__card`]}`}>
          <Card form={form} />
        </div>
      </div>
    </div>
  );
};

export default Content;
