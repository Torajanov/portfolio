import { useEffect } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../utils/translations';

const Home = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.01;
      const moveY = (clientY - window.innerHeight / 2) * 0.01;

      const element = document.querySelector('.floating-element') as HTMLElement;
      if (element) {
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/src/Abdulatif-Torajanov-CV.pdf';
  link.download = 'Abdulatif-Torajanov-CV.pdf';
  link.click();
};


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="floating-element absolute inset-0 pointer-events-none transition-transform duration-700">
        <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-500" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-ping delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 animate-fade-in">
            <div className="space-y-4">
              <p className="text-cyan-400 text-lg font-medium animate-slide-down">
                {t.home.greeting}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white animate-slide-up">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
                  {t.home.name}
                </span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 animate-slide-up delay-200">
                {t.home.title}
              </h2>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl animate-fade-in delay-300">
              {t.home.description}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in delay-500">
              <button
                onClick={handleDownloadCV}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  {t.home.downloadCV}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <div className="flex gap-3">
                <a
                  href="https://github.com/Torajanov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-lg text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center animate-fade-in delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg border-4 border-white/20 flex items-center justify-center overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/src/img/homerasm.jpg"
                  alt="Abdulatif Torajanov"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Home;
