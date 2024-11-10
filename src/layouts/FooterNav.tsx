import { Layout } from "antd";

const { Footer } = Layout;

const FooterNav = () => {
  return (
    <Footer style={{ textAlign: "center", backgroundColor: "#f0f0f0" }}>
      Iris's insights © Last update: {new Date().toLocaleDateString()} Created
      by Arneg
    </Footer>
  );
};
export default FooterNav;
