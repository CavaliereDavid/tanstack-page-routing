import React from "react";
import { Card } from "antd";

type FatturatoCardProps = {
  year: number;
  amount: number;
};

const FatturatoCard: React.FC<FatturatoCardProps> = ({ year, amount }) => (
  <Card title={`Fatturato ${year}`} bordered={false}>
    {`€ ${amount.toLocaleString()}`}
  </Card>
);

export default FatturatoCard;
