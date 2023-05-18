import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import { useState } from "react";
export default function Newchart() {
  const [series, setSeries] = useState([44, 55, 67, 83]);
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              return 249;
            },
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
  });
  return (
    <div className="w-[236px] mx-auto">
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={250}
        width={"100%"}
      />
    </div>
  );
}