import React, { useState } from "react";
import { Form, type FormProps } from "antd";
import InputField from "./InputField";
import {
  InputNumberField,
  TextAreaField,
  MentionsField,
  SelectField,
  CascaderField,
  TreeSelectField,
  DatePickerField,
  RangePickerField,
  SubmitButton,
} from "./FormComponents";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const ComplexForm: React.FC = () => {
  const [componentVariant, setComponentVariant] =
    useState<FormProps["variant"]>("filled");

  const onFormVariantChange = ({
    variant,
  }: {
    variant: FormProps["variant"];
  }) => {
    setComponentVariant(variant);
  };

  return (
    <Form
      {...formItemLayout}
      onValuesChange={onFormVariantChange}
      variant={componentVariant}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: componentVariant }}
    >
      <InputField />
      <InputNumberField />
      <TextAreaField />
      <MentionsField />
      <SelectField />
      <CascaderField />
      <TreeSelectField />
      <DatePickerField />
      <RangePickerField />
      <SubmitButton />
    </Form>
  );
};

export default ComplexForm;
