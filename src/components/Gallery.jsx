import React from "react";
export default function Gallery(){
    return(
        <div className="grid grid-rows-3 bg-[#e76da6] pt-20 ">
            <div className="pt-10 text-8xl text-sky-800 ml-40">The Gallery
            <p className="text-2xl  text-white py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, doloremque.deserunt.<br/> Sint id necessitatibus, blanditiis repellendus corporis.</p>
            </div>
            <div className="row-span-2 grid grid-cols-5 gap-x-4 mx-10 mt-8 pb-2">

            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="Image 1" className="w-full mb-10 object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="Image 2" className="w-full mb-10 object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="Image 3" className="w-full mb-10 object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="Image 1" className="w-full mb-10 object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="Image 2" className="w-full mb-10 object-cover rounded-2xl" />
            </div>
        </div>

    )
}