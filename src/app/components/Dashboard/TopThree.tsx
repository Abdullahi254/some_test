"use client"

import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


function TopThree() {
  const data = {
    datasets: [
      {
        label: 'Top Three Destination',
        data: [300, 150, 100], // Replace with actual visit counts
        backgroundColor: [
          'rgba(128, 0, 128, 0.6)', // Purple
          'rgba(255, 0, 0, 0.6)',   // Red
          'rgba(255, 165, 0, 0.6)', // Orange
        ],
        borderColor: [
          'rgba(128, 0, 128, 1)', // Purple
          'rgba(255, 0, 0, 1)',   // Red
          'rgba(255, 165, 0, 1)', // Orange
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white', // Change label color if needed
        },
      },
      title: {
        display: true,
        text: 'Top Three Most Visited',
        color: 'white',
      },
    },
  };
  return (
    <div className="p-4 rounded-3xl border border-purple-300 shadow-md flex flex-wrap space-x-4">
      <div className=""> 
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex items-center">
        <div className="text-white">
          <h3 className="text font-semibold mb-2">Legend</h3>
          <ul>
            {['Most Visited 1', 'Most Visited 2', 'Most Visited 3'].map((label, index) => (
              <li key={index} className="flex items-center mb-1 text-sm">
                <span
                  className="inline-block w-3 h-3 mr-2"
                  style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                ></span>
                {label}: {data.datasets[0].data[index]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default TopThree