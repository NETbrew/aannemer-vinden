"use client"
// all functional imports are here
import React from 'react'
import { signOut } from 'next-auth/react';

// all the icons used in this component are  here
import { TbLogout } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";



const SideBar = () => {

    const handleSignOut = () => {
        signOut({ callbackUrl: "/" });
    };

    return (
        <div className='w-full h-20 p-3'>
            { /** this is the user profile section */}
            <div className='bg-white w-full rounded-xl p-2 flex items-start'>
                <div className='flex flex-col justify-center h-full mr-2'>
                    <img src='https://thispersondoesnotexist.com/' className='h-12 w-12 rounded-full' alt='user icon'/>
                </div>
                <div>
                    <h1 className='text-black font-bold'>Username <a href='https://www.x.com/'><FaXTwitter  className=' inline'/></a></h1>
                    <button onClick={handleSignOut} className='flex justify-center items-center'>
                        <TbLogout color='#9ca3af' className='mr-1'/>
                        <span className='text-gray-400 underline'>Logout</span>
                    </button>
                </div>
            </div>

            { /** this is the navigation section */}
            <nav>
                
            </nav>
        </div>
    )
}

export default SideBar