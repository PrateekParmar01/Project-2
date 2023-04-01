import React from "react";
export default function RSVP(){
    return(
        <div class="grid grid-cols-2">
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" className="w-full object-cover mr-0"/>
            <div className="pt-40 text-8xl text-sky-800 ml-40">RSVP
            <p className="flex text-2xl gap-2 text-black p-6 mt-6"><span>I,</span><span><input placeholder=" Name" className="w-64 border border-black"/></span><span>am</span><span><input placeholder=" Attending/Not attending" className="w-96 border border-black" /></span></p>
            <p className="flex text-2xl gap-2 text-black p-6"><span>and I am bringing</span><input placeholder=" Number of persons" className="w-64 border border-black"></input><span>with me.</span></p>
            </div>
            
                
            
        </div>

    )
}