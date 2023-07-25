import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import defaultAvatar from "../../public/profile.png"
import Image from 'next/image';
import { Router, useRouter } from 'next/router';

const Navbar = ({ connectToWallet, signer_address, signOut, format_signer_bal }) => {
    const router = useRouter();

    const [showProfile, SetShowProfile] = useState(false);

    useEffect(() => {
        SetShowProfile(false);
    }, [router.pathname])

    return (
        <nav className="bg-white w-full z-20 top-0 left-0 border-b border-gray-200 fixed">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center">
                    <img src="../smalllogo.png" className="h-[60px] mt-[12px]" alt="Flowbite Logo" />
                </Link>
                <div className="flex md:order-2 relative">
                    {!signer_address ? <button onClick={() => connectToWallet()} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect Wallet</button>
                        :
                        <>
                            <button
                                type="button"
                                className="flex items-center focus:outline-none"
                                aria-label="toggle profile dropdown"
                                onClick={() => SetShowProfile(!showProfile)}
                            >
                                <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full object-cover">
                                    <Image
                                        src={defaultAvatar}
                                        height={100}
                                        width={100}
                                        alt="avatar"
                                        style={{
                                            borderRadius: "50%",
                                            width: "50px",
                                            height: "43px",
                                        }}
                                    />
                                </div>
                                <div className='relative'>
                                    <p className='text-[black] ml-1'>{signer_address.slice(0, 5) + "..." + signer_address.slice(38)}</p>
                                    <p className='text-[black] ml-1 absolute top-[21px] text-[12px]'>{format_signer_bal} MATIC</p>
                                </div>
                            </button>

                            {showProfile && (
                                <div className="absolute left-[-60px] top-11 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                                    <Link
                                        href={`/profile/${signer_address}`}
                                        className="flex items-center p-3 text-sm text-black capitalize transition-colors duration-300 transform hover:bg-gray-200"
                                    >
                                        <svg
                                            className="w-5 h-5 mx-1"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                                                fill="currentColor"
                                            ></path>
                                            <path
                                                d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>

                                        <span className="mx-1">View Profile</span>
                                    </Link>
                                    <Link
                                        href="/AddTicket"
                                        className="flex items-center p-3 text-sm text-black capitalize transition-colors duration-300 transform  hover:bg-gray-200"
                                    >
                                        <svg
                                            className="w-5 h-5 mx-1"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21 19H3C1.89543 19 1 18.1046 1 17V16H3V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V16H23V17C23 18.1046 22.1046 19 21 19ZM5 7V16H19V7H5Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>

                                        <span className="mx-1">Resell Ticket</span>
                                    </Link>
                                    <Link
                                        href={"#"}
                                        onClick={signOut}
                                        className="flex items-center p-3 text-sm text-black capitalize transition-colors duration-300 transform  hover:bg-gray-200"
                                    >
                                        <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                                        </svg>

                                        <span className="mx-1">signOut</span>
                                    </Link>
                                </div>
                            )}
                        </>
                    }
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link href="/About" className="block py-2 pl-3 pr-4 text-gray-500 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">About Us</Link>
                        </li>
                        <li>
                            <Link href="/BuyTicket" className="block py-2 pl-3 pr-4 text-gray-500 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Buy Flight Tickets</Link>
                        </li>
                        <li>
                            <Link href="/AddTicket" className="block py-2 pl-3 pr-4 text-gray-500 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Resell Your Tickets</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar