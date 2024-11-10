import React from "react";
import { Row, Col } from "antd";
import StatisticCard from "./StatisticCard";

const revenueData = {
  2024: {
    total: "€1.000K",
    symbol: "↑",
    percentage: "+10%",
  },
  2023: {
    total: "€900,2K",
    symbol: "↑",
    percentage: "+5%",
  },
  2022: {
    total: "€850K",
    symbol: "↓",
    percentage: "-2%",
  },
};

const StatisticGrid: React.FC = () => (
  <Row gutter={16}>
    {Object.entries(revenueData).map(
      ([year, { total, symbol, percentage }]) => (
        <Col span={8} key={year}>
          <StatisticCard
            year={year}
            total={total}
            symbol={symbol}
            percentage={percentage}
          />
        </Col>
      ),
    )}
  </Row>
);

export default StatisticGrid;
