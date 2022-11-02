import Image from "next/image";
import { Component, useEffect } from "react";

import Sound from "../../../../assets/images/sound.png";
import Switch from "../../../../assets/images/switch.png";
import { IFormItem } from "../../../../contants/IFormItem";
import { useAppSelector } from "../../../../redux/store";

import styles from "./card.module.scss";

interface Props {
  form?: IFormItem;
}

const Card: React.FC<Props> = ({ form }) => {
  const form1 = useAppSelector((state) => state.auth);
  useEffect(() => {}, [form1]);

  console.log(form1);
  // const { form } = props;
  return (
    <div className={`${styles[`card`]}`}>
      <div className={`${styles[`card__info`]}`}>
        <div className={`${styles[`card__info--top`]}`}>
          <div className={`${styles[`top__logo`]}`}>finely</div>
          <Image
            className={`${styles[`top__sound`]}`}
            src={Sound}
            alt="sound"
          ></Image>
        </div>

        <div className={`${styles[`card__info-numberID`]}`}>
          {/* {(form?.numberID )?.split("-").map((item: string) => (
            <span>{item}</span>
          ))} */}
        </div>

        <div className={`${styles[`card__info-auth`]}`}>
          <Image
            className={`${styles[`auth__switch`]}`}
            src={Switch}
            alt=""
          ></Image>
          <div className={`${styles[`auth__name`]}`}>{form1.fullname}</div>
          <div className={`${styles[`auth__date`]}`}>{form1.expiryDate}</div>
        </div>
      </div>

      <div className={`${styles[`card__text`]}`}>
        Universal Card
        <div className={`${styles[`card__text-dot1`]}`}></div>
        <div className={`${styles[`card__text-dot2`]}`}></div>
      </div>
    </div>
  );
};

export default Card;
