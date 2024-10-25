"use client"
import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const LineGraph = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Trips Over Time',
                data: [30, 20, 50, 40, 60, 80],
                borderColor: '#ba68c8', 
                backgroundColor: 'rgba(56, 189, 248, 0.2)', 
                fill: true,
                tension: 0.4, 
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'white'
                }
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white'
                }
            },
        },
    };

    return (
        <div className="w-full h-full">
            <h2 className="w-fit font-semibold mb-4 text-white">Trips Over Time</h2>
            <div className='p-4 rounded-3xl border border-purple-300 shadow-lg shadow-gray-500 h-96'>
                <Line data={data} options={{ ...options, maintainAspectRatio: false }} />
            </div>
        </div>

    );
}

export default LineGraph