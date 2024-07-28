"use client";

import { Bar } from "react-chartjs-2";
import {
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Chart as ChartJS,
    ChartData
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



export default function BarChart() {

    const [chartData, setChartData] = useState<any>({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: "Sales",
                    data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                    borderColor: 'rgb(53, 110, 210)',
                    backgroundColor: 'rgb(53, 110, 210, 0.4)',
                }
            ]
        });

        setChartOptions({
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        });
    }, []);

    return (
        <>
            <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    );
}