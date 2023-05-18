import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Columnchart = () => {
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

    return <>
        <div className="w-[236px] mx-auto">
            <ReactApexChart
                options={options}
                series={series}
                type="radialBar"
                height={250}
                width="100%"
            />
        </div>
    </>
}
export default Columnchart