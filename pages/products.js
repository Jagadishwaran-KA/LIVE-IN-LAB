import React from 'react'
import Header from '../components/Header'
import { FaRegSmileBeam } from "react-icons/fa"
import { HiOutlineHome } from "react-icons/hi"
import { FiShoppingBag } from "react-icons/fi"
import { AiOutlineUserAdd } from "react-icons/ai"
import { CiShoppingTag } from "react-icons/ci"
import { BsPlusCircle } from "react-icons/bs"
import { RiUserShared2Line } from "react-icons/ri"
import { TfiStatsUp } from "react-icons/tfi"

function products() {
    return (
        <div>
            <Header />
            <div>
                <div className='w-full h-full flex absolute'>
                    <div className='w-64 h-full relative bg-slate-200 top-0 left-0  px-5 py-7'>
                        <div className='p-10 space-y-5'>
                            <div className='flex space-x-2 items-center cursor-pointer w-34 p-2 rounded-sm hover:bg-slate-100 '>
                                <FaRegSmileBeam className='text-xl' />
                                <h1 className='text-lg flex items-center space-x-2'>
                                    {" "}
                                    Jagadish
                                </h1>
                            </div>
                            <div className='flex items-center cursor-pointer w-34 p-2  hover:bg-slate-100  rounded-sm  space-x-2'>
                                <HiOutlineHome className='text-2xl' />
                                <h1 className='text-xl flex items-center'>
                                    Dashboard</h1>
                            </div>
                            <div className='flex space-x-2 items-center cursor-pointer w-34 p-2 rounded-sm hover:bg-slate-100 '>
                                <FiShoppingBag className='text-xl' />

                                <h1 className='text-xl flex items-center'>
                                    Orders</h1>
                            </div>
                            <div className='flex space-x-2 items-center cursor-pointer w-34 p-2 rounded-sm hover:bg-slate-100 '>
                                <CiShoppingTag className='text-xl' />
                                <h1 className='text-xl flex items-center'>
                                    Products</h1>
                            </div>
                            <div className='flex space-x-2 items-center cursor-pointer  w-34 p-2 rounded-sm hover:bg-slate-100 '>
                                <BsPlusCircle className='text-xl' />
                                <h1 className='text-xl  items-center'>
                                    Add </h1>
                            </div>
                            <div className='flex space-x-2 items-center cursor-pointer w-34 p-2 rounded-sm hover:bg-slate-100 '>
                                <AiOutlineUserAdd className='text-xl' />
                                <h1 className='text-xl flex items-center'>
                                    Users</h1>
                            </div>

                            <div className='flex space-x-2 items-center cursor-pointer w-34 p-2 rounded-sm hover:bg-slate-100 '>
                                <TfiStatsUp className='text-xl' />
                                <h1 className='text-xl flex items-center'>
                                    Review</h1>
                            </div>

                            <div className='flex space-x-2 items-center cursor-pointer w-34 p-2 rounded-sm hover:bg-slate-100 '>

                                <RiUserShared2Line className='text-xl' />
                                <h1 className='text-xl flex items-center'>
                                    My Profile</h1>
                            </div>

                        </div>
                    </div>
                    <div className='relative max-w-7xl h-96 items-center  '>
                        <div className='flex justify-evenly space-y-4 flex-wrap'>

                            <div class="w-80 bg-white border items-center border-gray-200 rounded-lg shadow-md dark:bg-slate-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Agri Connect - Connect Together</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">These Products are Directly from Farm. To Home</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#20E58F] rounded-lg hover:bg-[#20E58F]/80  focus:outline-none">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                            <div class="w-80 bg-white border items-center border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Agri Connect - Connect Together</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">These Products are Directly from Farm. To Home</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#20E58F] rounded-lg hover:bg-[#20E58F]/80  focus:outline-none">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                            <div class="w-80 bg-white border items-center border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Agri Connect - Connect Together</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">These Products are Directly from Farm. To Home</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#20E58F] rounded-lg hover:bg-[#20E58F]/80  focus:outline-none">
                                        Buy Now
                                    </a>
                                </div>
                            </div>

                            <div class="w-80 bg-white border items-center border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Agri Connect - Connect Together</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">These Products are Directly from Farm. To Home</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#20E58F] rounded-lg hover:bg-[#20E58F]/80  focus:outline-none">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                            <div class="w-80 bg-white border items-center border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Agri Connect - Connect Together</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">These Products are Directly from Farm. To Home</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#20E58F] rounded-lg hover:bg-[#20E58F]/80  focus:outline-none">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                            <div class="w-80 bg-white border items-center border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Agri Connect - Connect Together</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">These Products are Directly from Farm. To Home</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#20E58F] rounded-lg hover:bg-[#20E58F]/80  focus:outline-none">
                                        Buy Now
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default products
