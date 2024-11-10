import { Layout, Menu, Switch } from "antd";
import { useMode } from "../context/ModeContext";
import iris from "/iris.svg";
import { HeaderNavProps } from "../types/HeaderNavProps";

const { Header } = Layout;

const HeaderNav: React.FC<HeaderNavProps> = ({ items }) => {
  const { mode, setMode } = useMode();

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <img src={iris} className="iris-image" alt="iris logo" />
      </div>
      <Menu
        mode="horizontal"
        items={items}
        style={{ flex: 1, minWidth: 0, marginLeft: 100 }}
        theme="dark"
      />
      <Switch
        checkedChildren="Editor"
        unCheckedChildren="Viewer"
        checked={mode === "editor"}
        onChange={(checked) => setMode(checked ? "editor" : "viewer")}
      />
    </Header>
  );
};

export default HeaderNav;
