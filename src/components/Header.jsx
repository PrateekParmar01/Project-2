import React from "react";
export default function Header(){
    return(
        <div className='flex items-center justify-center m-3 bg-[#e67b9f] p-4 rounded  text-white content-center h-20 font-semibold text-lg'>
            <div className="absolute left-8 font">LA</div>
            <div className="mr-8">Home</div>
            <div className="mr-8 ml-8">Gallery</div>
            <div className="mr-8 ml-8">About</div>
            <div className="mr-8 ml-8">Contact Us</div>
            <button className="border border-white rounded py-1 px-6 absolute right-8">Check Now</button>
        </div>
    )
}