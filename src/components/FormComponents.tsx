import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  Cascader,
  TreeSelect,
  DatePicker,
  Button,
} from "antd";

const { RangePicker } = DatePicker;

export const InputField: React.FC = () => (
  <Form.Item
    label="Input"
    name="Input"
    rules={[{ required: true, message: "Please input!" }]}
  >
    <Input />
  </Form.Item>
);

export const InputNumberField: React.FC = () => (
  <Form.Item
    label="InputNumber"
    name="InputNumber"
    rules={[{ required: true, message: "Please input!" }]}
  >
    <InputNumber style={{ width: "100%" }} />
  </Form.Item>
);

export const TextAreaField: React.FC = () => (
  <Form.Item
    label="TextArea"
    name="TextArea"
    rules={[{ required: true, message: "Please input!" }]}
  >
    <Input.TextArea />
  </Form.Item>
);

export const MentionsField: React.FC = () => (
  <Form.Item
    label="Mentions"
    name="Mentions"
    rules={[{ required: true, message: "Please input!" }]}
  >
    <Mentions />
  </Form.Item>
);

export const SelectField: React.FC = () => (
  <Form.Item
    label="Select"
    name="Select"
    rules={[{ required: true, message: "Please input!" }]}
  >
    <Select />
  </Form.Item>
);

export const CascaderField: React.FC = () => (
  <Form.Item
    label="Cascader"
    name="Cascader"
    rules={[{ required: true, message: "Please input!" }]}
  >
    <Cascader />
  </Form.Item>
);

export const TreeSelectField: React.FC = () => (
  <Form.Item
    label="TreeSelect"
    name="TreeSelect"
    rules={[{ required: true, message: "Please input!" }]}
  >
    <TreeSelect />
  </Form.Item>
);

export const DatePickerField: React.FC = () => (
  <Form.Item
    label="DatePicker"
    name="DatePicker"
    rules={[{ required: true, message: "Please input!" }]}
  >
    <DatePicker />
  </Form.Item>
);

export const RangePickerField: React.FC = () => (
  <Form.Item
    label="RangePicker"
    name="RangePicker"
    rules={[{ required: true, message: "Please input!" }]}
  >
    <RangePicker />
  </Form.Item>
);

export const SubmitButton: React.FC = () => (
  <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
);
