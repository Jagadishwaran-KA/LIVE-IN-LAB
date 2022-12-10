import React from 'react'

import { FaLeaf } from 'react-icons/fa'
function Header() {
    return (
        <div className='overflow-x-hidden overflow-y-hidden cursor-pointer'>
            <div className='flex justify-evenly items-center bg-gray-100 w-full h-full p-6'>
                <h1 className='text-xl flex space-x-2 p-1'>
                    <FaLeaf className='text-green-500 text-3xl' />
                    Agri Connect
                </h1>
                <div className='flex justify-between p-3 space-x-10'>
                    <p className='text-xl text-black '>Home</p>
                    <p className='text-xl  text-black decoration-[#20E58F]  underline'>Products</p>
                    <p className='text-xl text-black '>About</p>
                </div>
                <button className='bg-[#20E58F] w-24 p-2 rounded-md text-black hover:bg-black hover:text-white'>Sign Out</button>
            </div>
        </div>
    )
}

export default Header
