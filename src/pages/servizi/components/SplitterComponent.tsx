import { Menu, Splitter } from "antd";
import Desc from "./Desc";
import { createElement } from "react";
import {
  AreaChartOutlined,
  BarChartOutlined,
  DashOutlined,
  DollarOutlined,
  LineChartOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const icons = [
  {
    key: "0",
    icon: createElement(DashOutlined),
    label: "Dashboard",
  },
  {
    key: "1",
    icon: createElement(AreaChartOutlined),
    label: "Area chart",
  },
  {
    key: "2",
    icon: createElement(PieChartOutlined),
    label: "Pie chart",
  },
  {
    key: "3",
    icon: createElement(BarChartOutlined),
    label: "Bar chart",
  },
  {
    key: "4",
    icon: createElement(LineChartOutlined),
    label: "Line chart",
  },
  {
    key: "5",
    icon: createElement(DollarOutlined),
    label: "Revenue card",
  },
];

const SpliterComponent = () => {
  return (
    <Splitter style={{ height: 200, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
      <Splitter.Panel defaultSize="20%" min="10%" max="35%">
        <Desc text="First" />
        <Menu items={icons}></Menu>
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text="Second" />
        <Menu items={icons}></Menu>
      </Splitter.Panel>
    </Splitter>
  );
};

export default SpliterComponent;
