import {
  FloatButton,
  type FloatButtonGroupProps,
  type SwitchProps,
} from "antd";
import { useMode } from "../../../context/ModeContext";

interface FloatButtonGroupComponentProps extends FloatButtonGroupProps {
  switchProps?: SwitchProps;
}

const FloatButtonGroupComponent: React.FC<FloatButtonGroupComponentProps> = ({
  ...props
}) => {
  const { mode } = useMode();

  if (mode !== "editor") {
    return null;
  }

  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        shape="square"
        style={{ insetInlineEnd: 24 }}
        {...props}
      ></FloatButton.Group>
    </>
  );
};

export default FloatButtonGroupComponent;
