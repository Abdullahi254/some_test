"use client"
import React, { useState } from 'react'



const DistanceComponent = () => {

    const [selectedOption, setSelectedOption] = useState<string>('Any');

    const options = ["Any", "Under 5 min", "5 to 10 min", "10 to 20 min", "More than 20 min"];

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
        console.log("Selected:", e.target.value);
    };
    return (
        <div className="w-full text-white px-6 py-4 rounded-xl border border-1 border-purple-300 flex flex-col space-y-4">
            <h3 className="text-sm text-gray-400 mb-2">Time</h3>
            {options.map((option, index) => (
                <label
                    key={index}
                    className="flex items-center space-x-3 cursor-pointer"
                >
                    <input
                        type="radio"
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                        className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500 accent-purple-600 cursor-pointer"
                    />
                    <span className="text-white text-sm">{option}</span>
                </label>
            ))}
        </div>
    )
}

export default DistanceComponent