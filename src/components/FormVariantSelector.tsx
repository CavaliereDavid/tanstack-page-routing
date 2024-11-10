import React from "react";
import { Form, Segmented } from "antd";

const FormVariantSelector: React.FC = () => (
  <Form.Item label="Form variant" name="variant">
    <Segmented options={["outlined", "filled", "borderless"]} />
  </Form.Item>
);

export default FormVariantSelector;
