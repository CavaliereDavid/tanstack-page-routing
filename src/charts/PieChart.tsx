import { useMemo } from "react";
import EChartsReact from "echarts-for-react";

const PieChart = () => {
  const chartOptions = useMemo(
    () => ({
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    }),
    [],
  );

  return (
    <div className="App">
      <EChartsReact style={{width: 'auto', height: '400px', display: 'flex', justifyContent: 'center'}} option={chartOptions} />
    </div>
  );
};

export default PieChart;
