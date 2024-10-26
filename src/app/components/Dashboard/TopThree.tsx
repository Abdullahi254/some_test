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


function TopThree(res: any) {
  console.log("top three", res)
  const visitedDestinations:Record<string, number>  = {}
  res.dts.trips.forEach((trip: any)=>{
    if(visitedDestinations[trip.dropoff_location]){
      visitedDestinations[trip.dropoff_location] = visitedDestinations[trip.dropoff_location] + 1
    }else{
      visitedDestinations[trip.dropoff_location] = 1
    }
  })
  const sortedDestinations = Object.entries(visitedDestinations)
  .sort((a, b) => b[1] - a[1]); 


const topPlaces = sortedDestinations.slice(0, 3).map(entry => entry[0]);
const topCounts = sortedDestinations.slice(0, 3).map(entry => entry[1]);
  const data = {
    datasets: [
      {
        label: 'Top Three Destination',
        data: topCounts, 
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
            {topPlaces.map((label, index) => (
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