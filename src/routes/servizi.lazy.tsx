import { createLazyFileRoute } from "@tanstack/react-router";
import ContentNav from "../layouts/ContentArea";
import { useMode } from "../context/ModeContext";
import FatturatoGrid from "../components/FatturatoGrid";
import FloatButtonGroupComponent from "../pages/servizi/components/FloatButtonGroupComponent";
import { FloatButton } from "antd";
import { BarChartOutlined } from "@ant-design/icons";

export const Route = createLazyFileRoute("/servizi")({
  component: Servizi,
});

function Servizi() {
  const { mode } = useMode();

  return (
    <FloatButtonGroupComponent>
      <div className="p-2">
        <ContentNav mode={mode}>
          <div style={{ padding: "24px" }}>
            <FatturatoGrid />
          </div>
        </ContentNav>
        <FloatButton icon={<BarChartOutlined />} />
      </div>
    </FloatButtonGroupComponent>
  );
}
