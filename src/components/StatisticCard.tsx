import React from "react";
import { Card, Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

type StatisticCardProps = {
  year: string;
  total: string;
  symbol: string;
  percentage: string;
};

const StatisticCard: React.FC<StatisticCardProps> = ({
  year,
  total,
  symbol,
  percentage,
}) => {
  const isPositive = symbol === "↑";
  const defaultStyle = isPositive ? { color: "#3f8600" } : { color: "#cf1322" };

  return (
    <Card bordered={false}>
      <Statistic
        title={`Anno: ${year}`}
        value={total}
        valueStyle={defaultStyle}
        prefix={isPositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        suffix={`(${percentage})`}
      />
    </Card>
  );
};

export default StatisticCard;
