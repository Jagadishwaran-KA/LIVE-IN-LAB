import React from 'react'
import { FaRegSmileBeam } from "react-icons/fa"
import { HiOutlineHome } from "react-icons/hi"
import { FiShoppingBag } from "react-icons/fi"
import { AiOutlineUserAdd } from "react-icons/ai"
import { CiShoppingTag } from "react-icons/ci"
import { BsPlusCircle } from "react-icons/bs"
import { RiUserShared2Line } from "react-icons/ri"
import { TfiStatsUp } from "react-icons/tfi"
function Sidebar() {
    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <div className='w-full h-full flex absolute'>
                <div className='w-64 h-full fixed bg-slate-200 top-0 left-0  px-5 py-7'>
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
                <div className='relative w-full h-96 flex items-center flex-col space-y-32'>
                    <h1 className='text-3xl mt-10'>Enter Product Details to Add</h1>
                    <form class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Product Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Gold Rice" />

                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Product Type
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Grains" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Product Rate
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder='$-' />

                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                    Expiry Date
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="date" />
                            </div>

                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                    Add Image
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="file" />
                            </div>
                        </div>
                        <button className='bg-[#20E58F] p-3 w-24 font-semibold rounded-md'>Add</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
