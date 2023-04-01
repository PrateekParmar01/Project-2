import React from "react";
export default function RSVP(){
    return(
        <div class="grid md:grid-cols-2 font-serif">
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" className="md:w-full md:h-full w-0 h-0 object-cover mr-0"/>
            <div className="md:pt-40 md:text-8xl text-6xl text-sky-800 md:ml-40 ml-10 pt-10">RSVP
            <p className="flex md:text-2xl text-xl gap-2 text-black p-6 md:mt-6"><span>I,</span><span><input placeholder=" Name" className="md:w-64 w-20 border border-black"/></span><span>am</span><span><input placeholder=" Attending/Not attending" className="md:w-96 w-[209px] border border-black" /></span></p>
            <p className="flex md:text-2xl text-xl gap-2 text-black p-6"><span>and I am bringing</span><input placeholder=" Number of persons" className="md:w-64 w-[133px] border border-black"></input><span>with me.</span></p>
            </div>
        </div>

    )
}