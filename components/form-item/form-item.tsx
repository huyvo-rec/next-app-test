import { ChangeEventHandler } from "react";
import { Button, Form, Input, InputNumber, Row, Col, DatePicker } from "antd";
import { IFormItem } from "../../contants/IFormItem";

import styles from "./form-item.module.scss";
import { valueType } from "antd/lib/statistic/utils";

interface Props {
  form: IFormItem;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  handleInputNumber: (value: 0 | null) => void;
}

const FormItem = (props: Props) => {
  const { form, handleInputChange, handleInputNumber } = props;

  return (
    <div className={`${styles[`input`]}`}>
      <Form.Item
        name={["Fullname"]}
        rules={[
          {
            required: true,
            // message: "Please input your full name!",
            whitespace: true,
          },
        ]}
        className={`${styles[`input__item`]}`}
      >
        <Input
          type="text"
          name="fullname"
          placeholder="Fullname"
          // required
          onChange={handleInputChange}
          value={form.fullname}
        />
        {/* <label>Full name</label> */}
      </Form.Item>

      <Form.Item
        name={["Email"]}
        rules={[
          {
            type: "email",
            required: true,
            // message: "Please input your email!",
            whitespace: true,
          },
        ]}
        className={`${styles[`input__item`]}`}
      >
        <Input
          type="text"
          name="email"
          placeholder="Email"
          // required
          onChange={handleInputChange}
          value={form.email}
        />
        {/* <label>Email</label> */}
      </Form.Item>
      <Form.Item
        name={["Password"]}
        rules={[
          {
            required: true,
            // message: "Please input your password!",
            whitespace: true,
          },
        ]}
        className={`${styles[`input__item`]}`}
      >
        <Input.Password
          placeholder="Password"
          name="password"
          // required
          onChange={handleInputChange}
          value={form.password}
        />
      </Form.Item>
      <Form.Item
        name={"numberID"}
        rules={[{ type: "number" }]}
        className={`${styles[`input__item`]}`}
      >
        <InputNumber
          name="numberID"
          min={0}
          value={form.numberID as 0}
          // parser={(value) => value!.replace("%", "")}
          onChange={handleInputNumber}
        />
      </Form.Item>
      <Form.Item
        name={["Expiry Date"]}
        rules={[{ required: true }]}
        className={`${styles[`input__item`]}`}
      >
        <Input
          type="text"
          name="expiryDate"
          // required
          onChange={handleInputChange}
          value={form.expiryDate}
        />
        {/* <DatePicker picker="month" value={form.expiryDate as moment.Moment}/> */}
      </Form.Item>
    </div>
  );
};

export default FormItem;
