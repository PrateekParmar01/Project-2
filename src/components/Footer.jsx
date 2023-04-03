// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="text-white py-6 bg-[#d07113]">
//       <div className="container mx-auto flex justify-between items-center">
//         <p>© 2023 LA</p>
//         <ul className="flex">
//           <li className="mx-3">About Us</li>
//           <li className="mx-3">Contact Us</li>
//           <li className="mx-3">Privacy Policy</li>
//         </ul>
//       </div>
//       <div className="container mx-auto mt-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-lg font-medium mb-2">Contact Us</h3>
//             <p className="text-white mb-2">123 Main St.</p>
//             <p className="text-white mb-2">Anytown, USA 12345</p>
//             <a href="mailto:info@yourcompany.com" className="text-blue-500 hover:underline">info@LA.com</a>
//           </div>
//           <div>
//             <h3 className="text-lg font-medium mb-2">Follow Us</h3>
//             <div className="flex">
//               <a href="#" className="text-white hover:text-gray-200 mr-2">
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a href="#" className="text-white hover:text-gray-200 mr-2">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="text-white hover:text-gray-200">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-medium mb-2">About Us</h3>
//             <p className="text-white mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dapibus eros. Sed ac est sit amet sapien pulvinar malesuada.</p>
//             <button className="bg-[#ae6205] text-white py-2 px-4 rounded hover:bg-[#ec9326] hover:scale-105" style={{transition:'0.5s'}}>Learn More</button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-6 bg-[#d07113] text-center md:text-left">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0">© 2023 LA</p>
        <ul className="flex">
          <li className="mx-3">About Us</li>
          <li className="mx-3">Contact Us</li>
          <li className="mx-3">Privacy Policy</li>
        </ul>
      </div>
      <div className="container mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-2">Contact Us</h3>
          <p className="text-white mb-2">123 Main St.</p>
          <p className="text-white mb-2">Anytown, USA 12345</p>
          <a href="mailto:info@yourcompany.com" className="text-blue-500 hover:underline">info@LA.com</a>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Follow Us</h3>
          <div className="flex">
            <a href="#" className="text-white hover:text-gray-200 mr-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-200 mr-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">About Us</h3>
          <p className="text-white mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dapibus eros. Sed ac est sit amet sapien pulvinar malesuada.</p>
          <button className="bg-[#ae6205] text-white py-2 px-4 rounded hover:bg-[#ec9326] hover:scale-105" style={{transition:'0.5s'}}>Learn More</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
