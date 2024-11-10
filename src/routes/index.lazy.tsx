import { AreaChartOutlined } from "@ant-design/icons";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Divider, FloatButton, Spin } from "antd";
import BasicBarChart from "../charts/BasicBarChart";
import PieChart from "../charts/PieChart";
import MapComponent from "../components/MaComponent";
import SimpleTable from "../components/SimpleTable";
import StatisticGrid from "../components/StatisticGrid";
import { useMode } from "../context/ModeContext";
import useAxios from "../hooks/useAxios";
import ContentNav from "../layouts/ContentArea";
import FloatButtonGroupComponent from "../pages/servizi/components/FloatButtonGroupComponent";
import { RevenueData } from "../types/RevenueData";
import "./index.lazy.css";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { mode } = useMode();

  // const [revenue, setRevenue] = useState<RevenueData | undefined>()

  // useEffect(() => {
  //   API.get<RevenueData>('revenueData').then((res) => {
  //       setRevenue(res.data)
  //   })
  // }, [])

  const { pending, data, error } = useAxios<RevenueData>("/revenueData")

  return (
    <div className="p-2">
      <ContentNav mode={mode}>
        <div style={{ padding: "24px" }}>
          <Divider plain>Content 0</Divider>

          <div className="revenue-overview">
            {(!pending && data) ? Object.entries(data).map(([key, content]) => (
              <div className="revenue-component" key={key}>
                <StatisticGrid year={key} data={content} />
                <PieChart />
              </div>
            )) : <Spin />}
          </div>

          <Divider plain>Content 1</Divider>

          <BasicBarChart />

          <Divider plain>Content 2</Divider>

          <h1>Clienti - Top 10</h1>
          <div className="card-title">
            <SimpleTable />
            <MapComponent />
          </div>

          <Divider plain>Content 3</Divider>

          <h1>CTA - Top 10</h1>
          <div className="card-title">
            <SimpleTable />
            <MapComponent />
          </div>

          <Divider plain>Content 4</Divider>

          <h1>Punti vendita </h1>
          <div>
            <MapComponent />
          </div>
        </div>
      </ContentNav>
      <FloatButtonGroupComponent>
        <FloatButton icon={<AreaChartOutlined />} />
      </FloatButtonGroupComponent>
    </div>
  );
}
