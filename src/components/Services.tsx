import { Code, Smartphone, Plug, Server, Zap, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../utils/translations';

const Services = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const services = [
    {
      icon: Code,
      title: t.services.webDev.title,
      description: t.services.webDev.description,
      gradient: 'from-blue-500 to-cyan-500',
      hoverGlow: 'group-hover:shadow-blue-500/50',
    },
    {
      icon: Smartphone,
      title: t.services.responsive.title,
      description: t.services.responsive.description,
      gradient: 'from-cyan-500 to-teal-500',
      hoverGlow: 'group-hover:shadow-cyan-500/50',
    },
    {
      icon: Plug,
      title: t.services.api.title,
      description: t.services.api.description,
      gradient: 'from-teal-500 to-emerald-500',
      hoverGlow: 'group-hover:shadow-teal-500/50',
    },
    {
      icon: Server,
      title: t.services.backend.title,
      description: t.services.backend.description,
      gradient: 'from-blue-600 to-blue-800',
      hoverGlow: 'group-hover:shadow-blue-600/50',
    },
    {
      icon: Zap,
      title: t.services.optimization.title,
      description: t.services.optimization.description,
      gradient: 'from-yellow-500 to-orange-500',
      hoverGlow: 'group-hover:shadow-yellow-500/50',
    },
    {
      icon: Wrench,
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
      gradient: 'from-orange-500 to-red-500',
      hoverGlow: 'group-hover:shadow-orange-500/50',
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t.services.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
              />
              <div
                className={`relative h-full bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-slate-700 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl ${service.hoverGlow}`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
