import React, { useRef } from 'react';
import { 
  ArrowRight, Fingerprint, Shield, Radio, Activity, Command, Zap, Cpu, Lock, ShieldCheck, Radar, Quote
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { translations } from '../translations';
import { PartnerSection } from '../components/PartnerGrid';
import Marquee from '../components/Marquee';
import VectorDecor from '../components/VectorDecor';

const Home: React.FC<{ lang: 'en' | 'ar' }> = ({ lang }) => {
  const t = translations[lang];
  const isRtl = lang === 'ar';
  const containerRef = useRef(null);
  const defaultEase = [0.22, 1, 0.36, 1] as const;
  
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smoothY = useSpring(yRange, { stiffness: 100, damping: 20 });

  return (
    <div ref={containerRef} className={`bg-surface text-on-surface overflow-x-hidden selection:bg-primary/10 selection:text-primary ${isRtl ? 'font-arabic' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 1. HERO: THE SYSTEM CORE */}
      <section className="relative min-h-screen flex items-center overflow-hidden pulsar-grid-light">
        <div className="container-standard grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 py-20 md:py-24 lg:py-32">
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: defaultEase }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-sm label-sm text-primary ${isRtl ? 'border-r-2' : 'border-l-2'} border-primary`}
              >
                <ShieldCheck size={14} fill="currentColor" />
                {t.hero.tag}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`display-lg text-on-surface ${isRtl ? 'text-right' : ''}`}
              >
                {isRtl ? t.hero.title : (
                  <>
                    Reliable <span className="text-primary">Security.</span><br />Better Growth.
                  </>
                )}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className={`body-lg text-on-surface-variant max-w-lg ${isRtl ? 'text-right' : ''}`}
              >
                {t.hero.description}
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className={`flex flex-wrap gap-4 pt-4 ${isRtl ? 'justify-end' : ''}`}
            >
              <Link to="/contact" className="btn-primary group" aria-label={(t.hero as any).ariaConnect}>
                <span>{t.hero.action}</span>
                <ArrowRight className={`ml-2 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} size={18} />
              </Link>
              <Link to="/services" className="btn-secondary group" aria-label={(t.hero as any).ariaServices}>
                <span>{t.hero.viewCaseFiles}</span>
                <ShieldCheck className="ml-2" size={18} />
              </Link>
            </motion.div>
          </motion.div>
          {/* Airy Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: defaultEase }}
            className="relative flex items-center justify-center lg:h-175"
          >
            <div className={`relative w-full aspect-square max-w-125 sm:max-w-105 mx-auto lg:mx-0 ${isRtl ? 'lg:translate-x-12' : 'lg:-translate-x-12'}`}>
              {/* Layered Glass Cards */}
              <div className="absolute inset-0 airy-card p-6 flex flex-col justify-between animate-swap-back">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <div className="label-sm text-primary">Threat Monitor</div>
                    <div className="headline-sm">Cyber-Node Alpha</div>
                  </div>
                  <Radar className="text-primary/40" size={24} />
                </div>
                <div className="flex-1 min-h-0 relative mb-4">
                  <img 
                    alt="Cyber security node map" 
                    className="w-full h-full object-cover rounded-lg opacity-90" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5cBH4F-R2rfI_nN_2zufWmxcRtKxS4roLbM8INwWxDFwbCsANmcLy9ReBDIj0AqVBaf-aHofdNg3O-5uoSmm-3ALLbxSDZ-J03bhzGhAPUDbZjHoseCno0po8ZV1HDkOCb3dDsOgnUmCL_3x5TsoMr5wz_Fybaxjrkhtotvyh66tk_oNOdH15OpIG43fKhgAcwcBDsxD7VtOfRvCnBJu7EuSg_x1AJS4Z-8kJVVbbDiOI8ll1PQmUrvCMUgxorjQNOZ_rb5Ady9Le" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface/40 to-transparent"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="label-sm opacity-60">Status</div>
                    <div className="label-md text-primary flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span> Active Defense
                    </div>
                  </div>
                  <div className={`space-y-1 ${isRtl ? 'text-left' : 'text-right'}`}>
                    <div className="label-sm opacity-60">Uptime</div>
                    <div className="label-md">99.998%</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 airy-card p-8 flex flex-col gap-6 shadow-ambient animate-swap-front">
                <div className="flex justify-between items-center border-b border-outline-variant/15 pb-4">
                  <div className="flex flex-col">
                    <span className="headline-sm">Evolution Engine</span>
                    <div className="flex gap-2 mt-1">
                      <span className="label-sm bg-primary/10 text-primary px-1 rounded-sm">BPM_CORE_ACTIVE</span>
                      <span className="label-sm bg-primary/5 text-primary px-1 rounded-sm">DATA_FLOW_OPTIMIZED</span>
                    </div>
                  </div>
                  <Activity className="text-on-surface-variant/40" size={24} />
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-primary/40">
                    <div className="label-sm mb-1">Operational Readiness</div>
                    <div className="display-sm text-primary/80">98.4% <span className="label-sm opacity-60">NOMINAL</span></div>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-primary">
                    <div className="label-sm mb-1">Autonomous ROI Projection</div>
                    <div className="display-sm text-primary">+85%</div>
                  </div>
                  <div className="p-4 bg-on-surface text-surface rounded-lg">
                    <div className="flex justify-between items-end mb-2">
                      <div className="label-sm opacity-60">PROCESSING LOAD</div>
                      <div className="label-md text-primary">4.2TB/sec</div>
                    </div>
                    <div className="flex gap-0.5 h-8 items-end">
                      {[40, 60, 45, 80, 65, 90, 70, 55, 40, 30].map((h, i) => (
                        <div key={i} className={`flex-1 ${i === 5 ? 'bg-primary' : 'bg-surface/20'}`} style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-outline-variant/15 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center label-sm">
                        {i === 3 ? '+12' : ''}
                      </div>
                    ))}
                  </div>
                  <div className="label-sm opacity-40 font-mono">v4.0.2-STABLE</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1.5 MARQUEE: SYSTEM STATUS */}
      <Marquee lang={lang} speed={60} />

      {/* 2. LOGO MARQUEE: PARTNERS */}
      <div className="py-24 border-y border-outline-variant/15 bg-white/30 backdrop-blur-md relative z-10">
        <PartnerSection lang={lang} />
      </div>

      {/* 3.5 QUOTE: THE STRATEGIC MANDATE */}
      <section className="py-24 section-inner bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block relative mb-12"
          >
            <Quote className="text-primary-container opacity-20" size={48} fill="currentColor" />
          </motion.div>
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-headline text-4xl md:text-6xl font-extralight tracking-tight text-on-surface max-w-5xl mx-auto leading-[1.15] mb-12"
          >
            {t.hero.quote.segments.map((segment: any, i: number) => (
              <React.Fragment key={i}>
                {segment.highlight ? (
                  <span className="text-primary font-bold italic">{segment.text}</span>
                ) : (
                  segment.text
                )}
              </React.Fragment>
            ))}
          </motion.blockquote>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center items-center gap-6"
          >
            <div className="h-[0.5px] w-16 bg-primary opacity-30"></div>
            <span className="font-mono text-xs tracking-[0.4em] text-on-surface-variant uppercase font-semibold">
              {t.hero.quote.author}
            </span>
            <div className="h-[0.5px] w-16 bg-primary opacity-30"></div>
          </motion.div>
        </div>
      </section>

      {/* 4. CALL TO ACTION: THE UPGRADE PROTOCOL */}
      <section className="py-20 sm:py-24 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: defaultEase }}
          className="container-standard text-center"
        >
          <div className="space-y-8">
            <span className="font-mono text-[10px] tracking-[0.5em] text-primary uppercase block">
              UPGRADE_SEQUENCE_AVAILABLE
            </span>
            <h3 className="display-md tracking-tighter">
              {isRtl ? "هل أنت مستعد للسيادة الرقمية؟" : "Ready to Sovereignize?"}
            </h3>
            <div className="flex justify-center gap-6">
              <Link 
                to="/contact" 
                className="btn-primary px-12 py-5 rounded-sm! hover:scale-105 transition-all uppercase tracking-[0.2em] text-xs"
              >
                {t.services.initiateUpgrade}
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;