import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../utils/translations';

import Rasm1 from '../img/photo_2025-10-23_16-29-18.jpg';
import Rasm2 from '../img/photo_2025-10-23_16-29-40.jpg';
import Rasm3 from '../img/photo_2025-10-23_16-32-56.jpg';
import Rasm4 from '../img/photo_2025-10-23_16-33-16.jpg';
import Rasm5 from '../img/photo_2025-10-23_16-33-20.jpg';
import Rasm6 from '../img/photo_2025-10-23_16-33-25.jpg';

const Projects = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const projects = [
    { name: 'E-Commerce Platform', description: language === 'en' ? 'A modern e-commerce website with responsive UI' : language === 'uz' ? 'Zamonaviy va responsiv onlayn do‘kon platformasi' : 'Современная и адаптивная платформа интернет-магазина', image: Rasm1, github: 'https://github.com/Torajanov/grille', demo: 'https://grillewebsite.netlify.app/', tags: ['React'] },
    { name: 'Task Management App', description: language === 'en' ? 'Task tracking website built with Vue' : language === 'uz' ? 'Vue yordamida qurilgan vazifalarni boshqarish ilovasi' : 'Сайт управления задачами, созданный на Vue', image: Rasm2, github: 'https://github.com/Torajanov/foodies', demo: 'https://foodies-restaurants.netlify.app/', tags: ['Vue'] },
    { name: 'Weather Dashboard', description: language === 'en' ? 'Weather dashboard with live API' : language === 'uz' ? 'Jonli API orqali ob-havo ma’lumotlari paneli' : 'Панель погоды с данными в реальном времени', image: Rasm3, github: 'https://github.com/Torajanov/vrworldweb', demo: 'http://vrworldweb.netlify.app/', tags: ['React','CSS'] },
    { name: 'Social Media App', description: language === 'en' ? 'Social media style marketing website' : language === 'uz' ? 'Ijtimoiy tarmoq uslubida marketing platformasi' : 'Маркетинговая платформа в стиле соцсетей', image: Rasm4, github: 'https://github.com/Torajanov/miniture-main', demo: 'https://marketings-main.netlify.app/', tags: ['React','Node.js'] },
    { name: 'Portfolio Builder', description: language === 'en' ? 'Portfolio builder created with Vue' : language === 'uz' ? 'Vue yordamida yaratilgan portfolio quruvchi sayt' : 'Генератор портфолио, созданный на Vue', image: Rasm5, github: 'https://github.com/Torajanov/coffe-main', demo: 'https://coffes-main.netlify.app/', tags: ['Vue'] },
    { name: 'Blog Platform', description: language === 'en' ? 'Simple blogging platform' : language === 'uz' ? 'Oddiy blog platformasi' : 'Простая блог-платформа', image: Rasm6, github: 'https://github.com/Torajanov/-Journey', demo: 'https://journey-websait.netlify.app/', tags: ['Node.js'] }
  ];

  return (
<section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{t.projects.title}</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

          <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-slate-700 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
            <div className="relative h-48 overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">{project.name}</h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-cyan-400 rounded-full border border-blue-200 dark:border-blue-800">{tag}</span>
                ))}
              </div>

              {/* BUTTON MEDIA FIX */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-slate-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">{t.projects.viewCode}</span>
                </a>

                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">{t.projects.liveDemo}</span>
                </a>
              </div>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center animate-pulse">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
);
};
export default Projects;
