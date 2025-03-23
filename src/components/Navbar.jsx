// import React, { useState } from 'react'
// import Logo from '../assets/Logo.png'
// import { FaChevronRight } from "react-icons/fa";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import ResponsiveMenu from './ResponsiveMenu';

// const Navbar = () => {
//     const [showMenu, setShowMenu] = useState(false)
//     const toggleMenu = () => {
//         setShowMenu(!showMenu)
//     }
//   return (
//     <div className='bg-gray-950 -mb-7 z-50 w-full py-3 fixed px-[100px]'>
//     <div className='flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0'>
//         {/* logo section */}
//         <div>
//             <h2>Abdulatif Torajanov</h2>
//         </div>
//         {/* Menu section  */}
//         <nav className='hidden md:block'>
//             <ul className='flex gap-7 text-xl items-center font-semibold text-white'>
//                 <a href="/"><li className='cursor-pointer'>Home</li></a>
//                 <a href="#about"><li className='cursor-pointer'>About</li></a>
//                 <a href="#project"><li className='cursor-pointer'>Projects</li></a>
//                 <a href="#contact"><button className='px-3 py-1 cursor-pointer rounded-md bg-blue-500 text-white flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] shadow-blue-500 border-blue-400 border-2'>Contact<FaChevronRight/></button></a>
//             </ul>
//         </nav>
//         <div className='md:hidden text-white text-4xl'>
//             {
//                 showMenu ? <HiMenuAlt3 onClick={toggleMenu}/> : <HiMenuAlt1 onClick={toggleMenu} />
//             }
//         </div>
//     </div>
//     <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
// </div>

//   )
// }

// export default Navbar


import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-gray-950 -mb-7 z-50 w-full py-3 fixed px-[100px]">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0">
        {/* logo section */}
        <div>
          <h1 className="text-white  hover:text-[#27ae60] transition-all" style={{fontSize: "30px", fontWeight: '800'  }}>ABDULATIF</h1>
        </div>
        {/* Menu section */}
        <nav className="hidden md:block">
          <ul className="flex gap-7 text-xl items-center font-semibold text-white">
            <a href="/">
              <li className="cursor-pointer hover:text-[#27ae60] transition-colors">
                Home
              </li>
            </a>
            <a href="#about">
              <li className="cursor-pointer hover:text-[#27ae60] transition-colors">
                About
              </li>
            </a>
            <a href="#project">
              <li className="cursor-pointer hover:text-[#27ae60] transition-colors">
                Projects
              </li>
            </a>
            <a href="#contact">
              <button className="px-3 py-1 cursor-pointer rounded-md bg-[#27ae60] text-white flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#,0_0_15px_1d8c51,0_0_30px_#33CCCC] shadow-#1d8c51-500 border-2 border-[#27ae60] transition-all hover:bg-[#1d8c51] hover:border-[#1d8c51]">
                Contact
                <FaChevronRight />
              </button>
            </a>
          </ul>
        </nav>
        <div className="md:hidden text-white text-4xl">
          {showMenu ? (
            <HiMenuAlt3 onClick={toggleMenu} />
          ) : (
            <HiMenuAlt1 onClick={toggleMenu} />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
