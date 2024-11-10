import { createLazyFileRoute } from "@tanstack/react-router";
import ContentNav from "../layouts/ContentArea";
import { useMode } from "../context/ModeContext";
import FloatButtonGroupComponent from "../pages/servizi/components/FloatButtonGroupComponent";
import { Flex, FloatButton } from "antd";
import { AreaChartOutlined } from "@ant-design/icons";
import BasicAreaChart from "../charts/BasicAreaChart";
import SetSingleStyleBarChart from "../charts/SetSingleStyleBarChart";
import SmoothedLineChart from "../charts/SmoothedLineChart";
import TooltipDataZoom from "../charts/TooltipDataZoom";
import ComplexForm from "../components/ComplexForm";
import FatturatoGrid from "../components/FatturatoGrid";
import FormVariantSelector from "../components/FormVariantSelector";
import SearchableTable from "../components/SearchableTable";
import SimpleTable from "../components/SimpleTable";
import StatisticGrid from "../components/StatisticGrid";
import BasicBarChart from "../charts/BasicBarChart";
import MapComponent from "../components/MaComponent";
import PieChartGrid from "../charts/PieChartGrid";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { mode } = useMode();

  return (
    <div className="p-2">
      <ContentNav mode={mode}>
        <div style={{ padding: "24px" }}>
          <StatisticGrid />
          <PieChartGrid />

          <BasicBarChart />
          <Flex style={{ width: "75%" }}>
            <h1>Clienti - Top 10</h1>
            <SimpleTable />
            <MapComponent />
          </Flex>

          <Flex style={{ width: "75%" }}>
            <h1>CTA - Top 10</h1>
            <SimpleTable />
            <MapComponent />
          </Flex>

          <Flex style={{ width: "75%" }}>
            <h1>Punti vendita </h1>
            <MapComponent />
          </Flex>
        </div>
      </ContentNav>
      <FloatButtonGroupComponent>
        <FloatButton icon={<AreaChartOutlined />} />
      </FloatButtonGroupComponent>
    </div>
  );
}
