import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, SearchCheck, DraftingCompass, RefreshCw, 
  ShieldCheck, Sparkles, Shield 
} from 'lucide-react';
import { translations } from '../translations';

const About: React.FC<{ lang: 'en' | 'ar' }> = ({ lang }) => {
  const t = translations[lang];
  const isRtl = lang === 'ar';
  const defaultEase = [0.22, 1, 0.36, 1] as const;

  // Animation variants for cleaner code
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: defaultEase }
  };

  return (
    <div 
      className={`bg-surface min-h-screen text-on-surface selection:bg-primary/10 selection:text-primary overflow-x-hidden ${isRtl ? 'font-arabic' : 'font-sans'}`} 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <main className="container-standard px-6 py-20 md:py-32 lg:py-48">
        
        {/* 1. IDENTITY & VISION HERO */}
        <section className="mb-24 md:mb-48 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className={`flex items-center gap-4 mb-6 lg:mb-10 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <span className="h-px w-8 lg:w-12 bg-pulsar-red"></span>
              <span className="text-xs lg:label-md text-pulsar-red font-bold tracking-[0.3em] lg:tracking-[0.5em] uppercase">
                {t.about.tag}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:display-lg text-on-surface mb-6 lg:mb-12 font-bold leading-tight">
              {isRtl ? (
                <>هندسة <br/><span className="text-pulsar-red">السيادة الرقمية.</span></>
              ) : (
                <>Architecting <br/><span className="text-pulsar-red">Digital Sovereignty.</span></>
              )}
            </h1>
            
            <p className="text-lg md:text-2xl font-light opacity-90 leading-relaxed mb-10 lg:mb-16 max-w-xl">
              {t.about.description}
            </p>

            {/* System Status Strip - Mobile Optimized */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-6 lg:gap-16 py-8 border-y border-outline-variant/15">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider opacity-50">{t.about.status.latency}</span>
                <span className="text-lg font-mono font-medium">12ms</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-on-surface/8"></div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider opacity-50">{t.about.status.encryption}</span>
                <span className="text-lg font-mono font-medium">AES-256</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-on-surface/8"></div>
              <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
                <span className="text-[10px] uppercase tracking-wider opacity-50">{t.about.status.identity}</span>
                <span className="text-lg font-mono font-medium text-emerald-600 uppercase">{t.about.status.verified}</span>
              </div>
            </div>
          </motion.div>

          {/* Image Container - Scaled for Mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 relative group"
          >
            <div className="absolute -inset-4 bg-pulsar-red/5 rounded-[2.5rem] blur-3xl opacity-50 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <img 
              alt="Sovereign Core visualization" 
              className="w-full h-auto max-w-100 lg:max-w-none mx-auto aspect-square object-contain relative z-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH02FedypykNC83GQ_IpYiHvRh-OPbwRXu-XxQQTA_796sqfZWbnf4jkUFNTDbMWX8BX2R7rZ7cpa3EDDkIuOpydCQjC-B1k52HLpBGbey5zhAwhDSnFki3ZPmQKp70gXwTV_gLaXw_4vH516-gKC1WbMWufovDVwTNQdme8nH0KCu_KaAIxdCbw9bvwN2MqJv5OUEfvV1LZFfVsQwo4UXfKgLsvpMWfmOtJBuQa6RM2Is-vSaF5aUw7u5d1pq042oKNw1B5DL9EZT"
            />
          </motion.div>
        </section>

        {/* 2. MISSION & VISION - Stacked on Mobile */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-32 md:mb-48">
          <motion.div {...fadeInUp} className="space-y-6 lg:space-y-10">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-pulsar-red/10 rounded-lg">
                <Target className="text-pulsar-red" size={24} />
              </div>
              <h2 className="text-2xl lg:headline-md font-semibold">{t.about.mission.title}</h2>
            </div>
            <p className="text-lg lg:text-2xl font-light text-on-surface-variant leading-relaxed">
              {t.about.mission.content}
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-6 lg:space-y-10">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-pulsar-red/10 rounded-lg">
                <Eye className="text-pulsar-red" size={24} />
              </div>
              <h2 className="text-2xl lg:headline-md font-semibold">{t.about.vision.title}</h2>
            </div>
            <p className="text-lg lg:text-2xl font-light text-on-surface-variant leading-relaxed">
              {t.about.vision.content}
            </p>
          </motion.div>
        </section>

        {/* 3. METHODOLOGY - Card List on Mobile */}
        <section className="mb-32 md:mb-48">
          <div className={`mb-12 lg:mb-20 text-center ${isRtl ? 'lg:text-end' : 'lg:text-start'}`}>
            <span className="text-xs lg:label-md text-pulsar-red font-bold tracking-[0.3em] lg:tracking-[0.5em] mb-4 block uppercase">
              {t.about.methodology.tag}
            </span>
            <h2 className="text-3xl lg:display-md font-bold">{t.about.methodology.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-px bg-transparent md:bg-outline-variant/15 md:rounded-3xl overflow-hidden">
            {t.about.methodology.steps.map((step: any, idx: number) => {
              const Icons = [SearchCheck, DraftingCompass, RefreshCw];
              const Icon = Icons[idx];
              return (
                <div key={idx} className="bg-surface-container-low md:bg-surface p-8 lg:p-16 flex flex-col items-center text-center group transition-all rounded-2xl md:rounded-none">
                  <div className="mb-6 lg:mb-8 p-5 rounded-full bg-pulsar-red/5 text-pulsar-red group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm lg:text-base text-on-surface-variant font-light leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. CORE VALUES - Vertical on Mobile */}
        <section>
          <div className="mb-12 lg:mb-20">
            <span className="text-xs lg:label-md text-pulsar-red font-bold tracking-[0.3em] lg:tracking-[0.5em] mb-4 block uppercase">
              {t.about.values.tag}
            </span>
            <h2 className="text-3xl lg:display-md font-bold">{t.about.values.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {t.about.values.items.map((item: any, idx: number) => {
              const Icons = [ShieldCheck, Sparkles, Shield];
              const Icon = Icons[idx];
              const isDark = idx === 2;
              
              return (
                <motion.div 
                  key={idx}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-8 lg:p-10 border border-outline-variant/10 rounded-3xl flex flex-col h-full shadow-sm ${isDark ? 'bg-on-surface text-surface' : 'bg-surface'}`}
                >
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mb-8 lg:mb-10 ${isDark ? 'bg-surface text-on-surface' : 'bg-pulsar-red text-white'}`}>
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl lg:headline-sm font-bold mb-4">{item.title}</h4>
                  <p className={`text-sm lg:text-base font-light leading-relaxed mb-8 lg:mb-10 ${isDark ? 'text-surface/70' : 'text-on-surface-variant'}`}>
                    {item.description}
                  </p>
                  <div className={`mt-auto pt-6 border-t font-mono text-[10px] uppercase tracking-widest ${isDark ? 'border-surface/10 text-surface/30' : 'border-outline-variant/15 text-on-surface/30'}`}>
                    {item.footer}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;