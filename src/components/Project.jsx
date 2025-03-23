// import React from 'react'
// import Digital from '../assets/Digital.png'
// import Nike from '../assets/Nike.png'
// import Clothify from '../assets/Clothify.png'
// import { FaGithub } from 'react-icons/fa'

// const Project = () => {
//     const projects = [
//         {
//           title: "Digital Marketing",
//           description:
//             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
//           techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
//           link: "https://business420.netlify.app/",
//           github: 'https://github.com/rohitsingh93300/YTBusiness',
//           image: Digital, // Replace with your project screenshot
//         },
//         {
//           title: "Nike Shoes",
//           description:
//             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
//           techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
//           link: "https://nike-topaz-delta.vercel.app/",
//           github: 'https://github.com/rohitsingh93300/YT-Nike',
//           image: Nike, // Replace with your project screenshot
//         },
//         {
//           title: "Clothify",
//           description:
//             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
//           techStack: ["Next.js", "MongoDB", "Clerk Authentication"],
//           link: "https://clothify-two.vercel.app/",
//           github: 'https://github.com/rohitsingh93300/YT-Clothify',
//           image: Clothify, // Replace with your project screenshot
//         },
//       ];
//   return (
//     <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-[100px]'>
//     <div className='max-w-7xl mx-auto'>
//         <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
//         <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
//             {projects.map((project, index) => (
//                 <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
//                     <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
//                     <div className='p-6'>
//                         <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
//                         <p className='text-gray-300 mb-4'>{project.description}</p>
//                         <div className='flex flex-wrap gap-2 mb-4'>
//                             {project.techStack.map((tech, idx) => (
//                                 <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
//                             ))}
//                         </div>
//                         <div className='flex gap-3'>
//                             <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
//                             <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'><FaGithub/> Github</a>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// </section>

//   )
// }

// export default Project


import React from 'react'
import Make from '../assets/Make.jpg'
import Restaruant from '../assets/Restaruant.jpg'
import Get from '../assets/Get.jpg'
import Houtle from "../assets/Houtle.jpg"
import Coffe from "../assets/Coffe.jpg"
import Jaury from "../assets/Jaury.jpg"
import { FaGithub } from 'react-icons/fa'

const Project = () => {
  const projects = [
    {
      title: "Hosale",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["React"],
      link: "https://grillewebsite.netlify.app/",
      github: 'https://github.com/Torajanov/grille.git',
      image: Make,
    },
    {
      title: "Restaurant",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["React",],
      link: "https://foodies-restaurants.netlify.app/",
      github: 'https://github.com/Torajanov/foodies.git',
      image: Restaruant,
    },
    {
      title: "foodies-main",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["React",],
      link: "https://vrworldweb.netlify.app/",
      github: 'https://github.com/Torajanov/vrworldweb.git',
      image: Get, 
    },
    {
      title: "Marketin",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["React",],
      link: "",
      github: 'https://github.com/Torajanov/miniture-main.git',
      image: Houtle, 
    },
    {
      title: "Coffe-main",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["React",],
      link: "https://coffes-main.netlify.app/",
      github: 'https://github.com/Torajanov/coffe-main.git',
      image: Coffe, 
    },
    {
      title: "Journey-main",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["React",],
      link: "https://journey-websait.netlify.app/",
      github: 'https://github.com/Torajanov/-Journey.git',
      image: Jaury, 
    },
  ];
  
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-[100px]'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projects.map((project, index) => (
            <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
              <div className='p-6'>
                <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.techStack.map((tech, idx) => (
                    <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>
                      {tech}
                    </div>
                  ))}
                </div>
                <div className='flex gap-3'>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block bg-[#27ae60] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#2ecc71] transition-colors'
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'
                  >
                    <FaGithub/> Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
