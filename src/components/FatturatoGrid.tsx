import React from "react";
import { Row, Col } from "antd";
import FatturatoCard from "./FatturatoCard";

const FatturatoGrid: React.FC = () => (
  <Row gutter={16}>
    <Col span={8}>
      <FatturatoCard year={2024} amount={500000} />
    </Col>
    <Col span={8}>
      <FatturatoCard year={2023} amount={450000} />
    </Col>
    <Col span={8}>
      <FatturatoCard year={2022} amount={400000} />
    </Col>
  </Row>
);

export default FatturatoGrid;
