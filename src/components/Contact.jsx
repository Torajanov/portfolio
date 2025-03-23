// import React from "react";
// import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// const Contact = () => {
//   return (
//     <section id="contact" className="bg-gray-950 py-16 px-[100px]">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
//           Contact Me
//         </h2>
//         <div className="grid lg:grid-cols-2 gap-10">
//           {/* contact info */}
//           <div className="flex flex-col justify-center space-y-8">
//             <div>
//               <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">
//                 Let's Talk
//               </h1>
//               <p className="text-gray-300 my-5">
//                 Ishlagan loyihalarimni va o'zim yaratgan ilovalarimni
//                 portfoliomda ko'rishingiz mumkin. Portfoliom orqali mening
//                 dasturchilikdagi ko'nikmalarim va tajribamni ko'rsatishga
//                 harakat qilganman.
//               </p>
//               <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
//               <p className="text-gray-600 mt-2">
//                 <a href="#" className="text-blue-500 hover:underline">
//                   torajanovabdulatifmail.com
//                 </a>
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-300">Phone</h3>
//               <p className="text-gray-600 mt-2">
//                 <a href="#" className="text-blue-500 hover:underline">
//                   +998-90-050-72-75
//                 </a>
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-300">
//                 Follow Me
//               </h3>
//               <div className="flex gap-3 text-2xl transition-all mt-5">
//                 <div className="flex gap-3 text-2xl transition-all mt-5">
//                   <a
//                     href="https://www.facebook.com/yourusername"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaFacebook className="text-blue-400 hover:text-blue-600 transition-colors" />
//                   </a>
//                   <a
//                     href="https://t.me/Torajanov_o1"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaTelegram className="text-blue-400 hover:text-blue-500 transition-colors" />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/torajanov.o1"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaInstagram className="text-blue-400 hover:text-pink-400 transition-colors" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* contact form */}
//           <div className="bg-gray-900 rounded-lg shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)] shadow-blue-500 p-8">
//             <h3 className="text-3xl font-semibold text-gray-300 mb-6">
//               Get in Touch
//             </h3>
//             <form action="" className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-300"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Your Email"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-300"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-300"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Your Message"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-sm hover:bg-blue-600 transition-colors hover:shadow-lg"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { FaTelegram, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-950 py-16 px-[100px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Contact Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">
                Let's Talk
              </h1>
              <p className="text-gray-300 my-5">
                You can view the projects I’ve worked on and the applications
                I’ve created in my portfolio. Through my portfolio, I aim to
                showcase my skills and experience as a developer.
              </p>
              <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
              <p className="text-gray-600 mt-2">
                <a
                  href="mailto:torajanovabdulatifmail.com"
                  className="text-[#27ae60] hover:text-[#27ae60] hover:underline transition-colors"
                >
                  torajanovabdulatifmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">Phone</h3>
              <p className="text-gray-600 mt-2">
                <a
                  href="tel:+998900507275"
                  className="text-[#27ae60] hover:text-[#27ae60] hover:underline transition-colors"
                >
                  +998-90-050-72-75
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">
                Follow Me
              </h3>
              <div className="flex gap-3 text-2xl transition-all mt-5">
                <a
                  href="https://www.facebook.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#27ae60] transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://t.me/Torajanov_o1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#27ae60] transition-colors"
                >
                  <FaTelegram />
                </a>
                <a
                  href="https://www.instagram.com/torajanov.o1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#27ae60] transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/Torajanov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#27ae60] transition-colors"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          {/* contact form */}
          <div className="bg-gray-900 rounded-lg shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)] shadow-[#27ae60] p-8">
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">
              Get in Touch
            </h3>
            <form action="" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-[#27ae60] focus:border-[#27ae60]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-[#27ae60] focus:border-[#27ae60]"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-[#27ae60] focus:border-[#27ae60]"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#27ae60] text-white py-3 rounded-lg shadow-sm hover:bg-[#27ae60] transition-colors hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
