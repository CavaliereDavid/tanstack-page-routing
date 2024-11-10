import { Space, Switch } from "antd";
import { useMode } from "../../../context/ModeContext";

const SwitchComponent = () => {
  const { mode, setMode } = useMode();

  return (
    <Space direction="vertical">
      <Switch
        checkedChildren="Editor"
        unCheckedChildren="Viewer"
        checked={mode === "editor"}
        onChange={(checked) => setMode(checked ? "editor" : "viewer")}
      />
    </Space>
  );
};

export default SwitchComponent;
