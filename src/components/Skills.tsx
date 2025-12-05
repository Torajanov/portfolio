import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../utils/translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setAnimate(true), 200);
    }
  }, [inView]);

  const skills = [
    { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500', icon: '🌐' },
    { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-500', icon: '🎨' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-600', icon: '⚡' },
    { name: 'Vue.js', level: 85, color: 'from-green-500 to-emerald-500', icon: '💚' },
    { name: 'React', level: 87, color: 'from-cyan-400 to-blue-500', icon: '⚛️' },
    { name: 'Node.js', level: 83, color: 'from-green-600 to-green-800', icon: '🟢' },
    { name: 'Git/GitHub', level: 90, color: 'from-gray-700 to-gray-900', icon: '🔧' },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen py-20 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t.skills.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl border-2 border-gray-200 dark:border-slate-600 hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>

                <div className="relative h-4 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out`}
                    style={{
                      width: animate ? `${skill.level}%` : '0%',
                      boxShadow: animate ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none',
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                  </div>

                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end pr-2">
                    {animate && (
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-ping"
                        style={{
                          marginRight: `${100 - skill.level}%`,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '⚡', label: 'Fast', sublabel: language === 'en' ? 'Performance' : language === 'uz' ? 'Tezkor' : 'Быстро' },
            { icon: '📱', label: 'Responsive', sublabel: language === 'en' ? 'Design' : language === 'uz' ? 'Dizayn' : 'Дизайн' },
            { icon: '🎯', label: 'Intuitive', sublabel: language === 'en' ? 'UI/UX' : language === 'uz' ? 'UI/UX' : 'UI/UX' },
            { icon: '🔒', label: 'Secure', sublabel: language === 'en' ? 'Code' : language === 'uz' ? 'Kod' : 'Код' },
          ].map((item, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 border border-transparent hover:border-blue-500/50"
            >
              <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">
                {item.label}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
