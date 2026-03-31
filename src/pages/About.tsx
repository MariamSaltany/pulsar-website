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

  return (
    <div className={`bg-surface min-h-screen text-on-surface selection:bg-primary/10 selection:text-primary overflow-x-hidden ${isRtl ? 'font-arabic' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      <main className="container-standard py-32 lg:py-48">
        {/* 1. IDENTITY & VISION HERO */}
        <section className="mb-48 flex flex-col lg:flex-row gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className={`flex items-center gap-4 mb-10 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <span className="h-[1px] w-12 bg-pulsar-red"></span>
              <span className="label-md text-pulsar-red font-bold tracking-[0.5em]">
                {t.about.tag}
              </span>
            </div>
            <h1 className="display-lg text-on-surface mb-12">
              {isRtl ? (
                <>هندسة <br/><span className="text-pulsar-red">السيادة الرقمية.</span></>
              ) : (
                <>Architecting <br/><span className="text-pulsar-red">Digital Sovereignty.</span></>
              )}
            </h1>
            <p className="body-lg text-2xl font-light leading-relaxed mb-16 max-w-xl">
              {t.about.description}
            </p>

            {/* System Status Strip */}
            <div className="flex flex-wrap items-center gap-8 md:gap-16 py-8 border-y border-outline-variant/15 border-x-0">
              <div className="flex flex-col gap-2">
                <span className="label-sm opacity-50">{t.about.status.latency}</span>
                <span className="text-xl font-mono font-medium">12ms</span>
              </div>
              <div className="w-px h-10 bg-on-surface/[0.08]"></div>
              <div className="flex flex-col gap-2">
                <span className="label-sm opacity-50">{t.about.status.encryption}</span>
                <span className="text-xl font-mono font-medium">AES-256</span>
              </div>
              <div className="w-px h-10 bg-on-surface/[0.08]"></div>
              <div className="flex flex-col gap-2">
                <span className="label-sm opacity-50">{t.about.status.identity}</span>
                <span className="text-xl font-mono font-medium text-emerald-600">{t.about.status.verified}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-pulsar-red/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <img 
              alt="Sovereign Core abstract visualization" 
              className="w-full h-auto aspect-square object-contain relative z-10 transition-transform duration-1000 group-hover:scale-[1.02]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH02FedypykNC83GQ_IpYiHvRh-OPbwRXu-XxQQTA_796sqfZWbnf4jkUFNTDbMWX8BX2R7rZ7cpa3EDDkIuOpydCQjC-B1k52HLpBGbey5zhAwhDSnFki3ZPmQKp70gXwTV_gLaXw_4vH516-gKC1WbMWufovDVwTNQdme8nH0KCu_KaAIxdCbw9bvwN2MqJv5OUEfvV1LZFfVsQwo4UXfKgLsvpMWfmOtJBuQa6RM2Is-vSaF5aUw7u5d1pq042oKNw1B5DL9EZT"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* 2. MISSION & VISION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-48">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-center gap-3">
              <Target className="text-pulsar-red" size={32} />
              <h2 className="headline-md">{t.about.mission.title}</h2>
            </div>
            <p className="text-2xl font-light text-on-surface-variant leading-relaxed">
              {t.about.mission.content}
            </p>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-3">
              <Eye className="text-pulsar-red" size={32} />
              <h2 className="headline-md">{t.about.vision.title}</h2>
            </div>
            <p className="text-2xl font-light text-on-surface-variant leading-relaxed">
              {t.about.vision.content}
            </p>
          </motion.div>
        </section>

        {/* 3. METHODOLOGY: THE SOVEREIGN LOOP */}
        <section className="mb-48">
          <div className="mb-20 text-center">
            <span className="label-md text-pulsar-red font-bold tracking-[0.5em] mb-6 block">
              {t.about.methodology.tag}
            </span>
            <h2 className="display-md">{t.about.methodology.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/15 rounded-3xl overflow-hidden">
            {t.about.methodology.steps.map((step: any, idx: number) => {
              const Icons = [SearchCheck, DraftingCompass, RefreshCw];
              const Icon = Icons[idx];
              return (
                <div key={idx} className="bg-surface p-16 flex flex-col items-center text-center group hover:bg-surface-container-low transition-colors">
                  <div className="mb-8 p-6 rounded-full bg-pulsar-red/5 text-pulsar-red group-hover:scale-110 transition-transform">
                    <Icon size={40} />
                  </div>
                  <h3 className="headline-sm mb-4">{step.title}</h3>
                  <p className="text-on-surface-variant font-light">{step.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. CORE VALUES */}
        <section>
          <div className="mb-20">
            <span className="label-md text-pulsar-red font-bold tracking-[0.5em] mb-6 block">
              {t.about.values.tag}
            </span>
            <h2 className="display-md">{t.about.values.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.values.items.map((item: any, idx: number) => {
              const Icons = [ShieldCheck, Sparkles, Shield];
              const Icon = Icons[idx];
              const isDark = idx === 2;
              return (
                <motion.div 
                  key={idx}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-10 hairline rounded-3xl flex flex-col h-full ${isDark ? 'bg-on-surface text-surface' : 'bg-surface'}`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 ${isDark ? 'bg-surface text-on-surface' : 'bg-pulsar-red text-white'}`}>
                    <Icon size={24} />
                  </div>
                  <h4 className="headline-sm mb-4">{item.title}</h4>
                  <p className={`font-light leading-relaxed mb-10 ${isDark ? 'text-surface/70' : 'text-on-surface-variant'}`}>
                    {item.description}
                  </p>
                  <div className={`mt-auto pt-8 border-t font-mono text-[9px] uppercase tracking-[0.2em] ${isDark ? 'border-surface/10 text-surface/30' : 'border-outline-variant/15 text-on-surface/30'}`}>
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
