import { Col } from "antd";
import StatisticCard from "./StatisticCard";
import { RevenueData, RevenueYearOverview } from "../types/RevenueData";

// const revenueData = {
//   2024: {
//     total: "€1.000K",
//     symbol: "↑",
//     percentage: "+10%",
//   },
//   2023: {
//     total: "€900,2K",
//     symbol: "↑",
//     percentage: "+5%",
//   },
//   2022: {
//     total: "€850K",
//     symbol: "↓",
//     percentage: "-2%",
//   },
// };

interface Props {
  year: string,
  data: RevenueYearOverview
}

const StatisticGrid = ({ year, data }: Props) => (
  <StatisticCard
    year={year}
    total={data.total}
    symbol={data.symbol}
    percentage={data.percentage}
  />
);

export default StatisticGrid;
