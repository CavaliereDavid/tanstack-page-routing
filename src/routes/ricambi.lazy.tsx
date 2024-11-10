import { createLazyFileRoute } from "@tanstack/react-router";
import ContentNav from "../layouts/ContentArea";
import { useMode } from "../context/ModeContext";
import FatturatoGrid from "../components/FatturatoGrid";
import FloatButtonGroupComponent from "../pages/servizi/components/FloatButtonGroupComponent";
import { FloatButton } from "antd";
import { PieChartOutlined } from "@ant-design/icons";

export const Route = createLazyFileRoute("/ricambi")({
  component: Ricambi,
});

function Ricambi() {
  const { mode } = useMode();

  return (
    <div className="p-2">
      <ContentNav mode={mode}>
        <div style={{ padding: "24px" }}>
          <FatturatoGrid />
        </div>
      </ContentNav>
      <FloatButtonGroupComponent>
        <FloatButton icon={<PieChartOutlined />} />
      </FloatButtonGroupComponent>
    </div>
  );
}
