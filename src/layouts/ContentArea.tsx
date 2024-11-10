import { Layout } from "antd";
import { LayoutPropsWithMode } from "../types/LayoutPropsWithMode";

const { Content } = Layout;

const ContentArea = ({ children }: LayoutPropsWithMode) => {
  return (
    <Content style={{ padding: "0 24px", minHeight: 280 }}>{children}</Content>
  );
};
export default ContentArea;
