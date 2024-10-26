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


const LineGraph = ({dts}: any) => {
    console.log(dts.trips)
    const hashMap  = {
    } as any
    const tripsByMonth = dts.trips.forEach((v:any)=>{
        const myDate = new Date(v?.dropoff_date)
        let month = myDate.getMonth()
        let monthString = month.toString()
        if(hashMap[monthString]){
            hashMap[monthString] = hashMap[monthString] + 1
        }
        else{
            hashMap[monthString] = 1
        }
    })
    console.log("my map", hashMap)

    let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    let finalList = list.map(val=>{
        if(hashMap[val]){
            return hashMap[val]
        }else{
            return 0
        }
    })
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Trips Over Time',
                data: finalList,
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