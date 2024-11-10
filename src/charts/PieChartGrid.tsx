import { Row, Col } from "antd";
import PieChart from "./PieChart";

const PieChartGrid = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <PieChart />
        </Col>
        <Col span={8}>
          <PieChart />
        </Col>
        <Col span={8}>
          <PieChart />
        </Col>
      </Row>
    </div>
  );
};

export default PieChartGrid;
