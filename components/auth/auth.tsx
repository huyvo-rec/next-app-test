import React, { Component, useState } from "react";
import { useRouter } from "next/router";
import { Button, Form, Input, InputNumber } from "antd";
import Image from "next/image";
import postUserInfor from "../../redux/authSlice";

import { IFormItem } from "../../contants/IFormItem";

import FormItem from "../form-item/form-item";
import Fb from "../../assets/images/icons8-facebook-48.png";

import styles from "./auth.module.scss";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../redux/store";

const Auth = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const [form, setForm] = useState<IFormItem>({
    fullname: "",
    email: "",
    password: "",
    numberID: 0,
    expiryDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputNumber = (value: 0 | null) => {
    setForm({
      ...form,
      numberID: value as IFormItem["numberID"],
    });
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = () => {
    dispatch(postUserInfor(form));
    router.push("/information");
  };
  return (
    <div className={`${styles[`auth`]}`}>
      <div className={`${styles[`auth__welcome`]}`}>
        <div className={`${styles[`auth__welcome--black`]}`}>
          Create Acount,
        </div>
        <div className={`${styles[`auth__welcome--gray`]}`}>
          Sign up to get started!
        </div>
      </div>

      <Form
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        layout="vertical"
        autoComplete="off"
        className={`${styles[`auth__form`]}`}
      >
        <div className={`${styles[`form__input`]}`}>
          <FormItem
            form={form}
            handleInputChange={handleInputChange}
            handleInputNumber={handleInputNumber}
          />
        </div>

        <div className={`${styles[`form__forgot-password`]}`}>
          Forgot password?
        </div>
        <Button
          htmlType="submit"
          className={`${styles[`form__button--gradients`]}`}
          // onClick={handleAuth}
        >
          Sign up
        </Button>
        <Button className={`${styles[`form__button--facebook`]}`}>
          <Image src={Fb} alt="logo-fb" />
          Connect with Facebook
        </Button>
      </Form>
      <div className={`${styles[`auth__text`]}`}>
        {`I'm already a member,`}
        <span>Sign In</span>
      </div>
    </div>
  );
};

export default Auth;
