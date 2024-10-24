"use client"

import Link from 'next/link';
import React from 'react'

import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { RxDashboard } from "react-icons/rx";
import { usePathname} from 'next/navigation'


const Sidebar = () => {
    const pathName = usePathname()
    console.log(pathName)
    return (
        <div className="h-full w-64 bg-[#141414] text-gray-100 flex justify-between flex-col p-4 border-r-2 border-purple-300">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-center mb-8">Trip Finder</h1>
                <ul className="space-y-8">
                    <li className={pathName == '/' ? 'flex items-center space-x-4 p-2 rounded-md hover:text-purple-300 cursor-pointer text-purple-300':
                        'flex items-center space-x-4 p-2 rounded-md hover:text-purple-300 cursor-pointer'
                    }>
                        <FaHome size={20} />
                        <Link href="/">
                            <span>Home</span>
                        </Link>

                    </li>
                    <li className={pathName == '/trips' ? 'flex items-center space-x-4 p-2 rounded-md hover:text-purple-300 cursor-pointer text-purple-300':
                        'flex items-center space-x-4 p-2 rounded-md hover:text-purple-300 cursor-pointer'
                    }>
                        <RxDashboard size={20} />
                        <Link href="/trips">
                            <span>Trips</span>
                        </Link>
                    </li>
                    <li className={pathName == '/settings' ? 'flex items-center space-x-4 p-2 rounded-md hover:text-purple-300 cursor-pointer text-purple-300':
                        'flex items-center space-x-4 p-2 rounded-md hover:text-purple-300 cursor-pointer'
                    }>
                        <FaCog size={20} />
                        <Link href="/settings">
                            <span>Settings</span>
                        </Link>
                    </li>

                </ul>
            </div>

            <ul className="space-y-4">
            <li className={pathName == '/profile' ? 'flex items-center space-x-4 p-2 rounded-md hover:text-purple-300 cursor-pointer text-purple-300':
                        'flex items-center space-x-4 p-2 rounded-md hover:text-purple-300 cursor-pointer'
                    }>
                    <FaUser size={20} />
                    <Link href="/profile">
                        <span>Profile</span>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar