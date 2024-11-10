import React from "react";
import { Form, Input } from "antd";

const InputField: React.FC = () => (
  <Form.Item
    label="Input"
    name="Input"
    rules={[{ required: true, message: "Please input!" }]}
  >
    <Input />
  </Form.Item>
);

export default InputField;
