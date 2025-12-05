import { useState } from 'react';
import { Award, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../utils/translations';

const About = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.about.description}
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/5 dark:to-blue-500/5 p-8 rounded-2xl backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.about.description2}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowCertificates(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Award className="w-5 h-5" />
                {t.about.certificates}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />

              <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10 p-12   md:p-12 rounded-3xl backdrop-blur-lg border-2 border-white/20 dark:border-white/10">

                {/* RESPONSIVE GRID — MEDIA FIX */}
                <div className="grid grid-cols-2 gap-5 md:gap-7">

                  {[
                    { number: '1+', label: language === 'en' ? 'Years Experience' : language === 'uz' ? 'Yillik tajriba' : 'Лет опыта' },
                    { number: '50+', label: language === 'en' ? 'Projects Done' : language === 'uz' ? 'Loyihalar' : 'Проектов' },
                    { number: '10+', label: language === 'en' ? 'Happy Clients' : language === 'uz' ? 'Mijozlar' : 'Клиентов' },
                    { number: '8+', label: language === 'en' ? 'Technologies' : language === 'uz' ? 'Texnologiyalar' : 'Технологий' },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="
              text-center p-5 md:p-7 
              bg-white/20 dark:bg-slate-800/40 
              rounded-xl backdrop-blur-md 
              hover:scale-110 transition-transform duration-300 
              hover:shadow-xl hover:shadow-blue-500/30
            "
                    >
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-1 md:mb-2">
                        {stat.number}
                      </div>

                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {showCertificates && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative animate-scale-in">
            <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 p-6 flex justify-between items-center z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.modal.certificates}
              </h3>
              <button
                onClick={() => setShowCertificates(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[4/2] bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-300 dark:border-blue-700">
                  <div className="text-center text-gray-500 dark:text-gray-400">

                    <img
                      src="/src/img/Screenshot 2025-12-06 003722.png"
                      alt={
                        language === 'en'
                          ? 'Certificate placeholder'
                          : language === 'uz'
                            ? 'Sertifikat joyi'
                            : 'Место для сертификата'
                      }
                      className="w-full h-auto rounded-lg border border-gray-300 dark:border-gray-700 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
