import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  ArrowRight, 
  Terminal, 
  Brain,
  Search,
  UserCheck,
  Radar,
  Users,
  GitBranch,
  Cloud,
  Eye,
  Quote
} from 'lucide-react';
import { translations } from '../translations';

interface ServicesProps { lang: 'en' | 'ar'; }

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang];
  const isRtl = lang === 'ar';

  return (
    <div className={`bg-surface text-on-surface selection:bg-pulsar-red/30 selection:text-pulsar-red min-h-screen dot-grid pt-32 pb-32 ${isRtl ? 'font-arabic' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-8 lg:px-12 pt-24 pb-40">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-[10px] tracking-[0.3em] text-primary font-bold mb-8 flex items-center gap-4"
            >
              <span className="w-10 h-[1px] bg-primary/30"></span>
              PROTOCOL_V4 // SYSTEM_ACTIVE
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`font-headline font-extrabold text-6xl lg:text-[110px] headline-tight text-on-surface mb-10 ${isRtl ? 'text-right' : 'text-left'}`}
            >
              {t.services.heroTitle.split(' ').map((word: string, i: number) => (
                <React.Fragment key={i}>
                  {word}{i === 0 && <br/>}
                </React.Fragment>
              ))}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`font-body text-xl lg:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light tracking-tight ${isRtl ? 'text-right' : 'text-left'}`}
            >
              {t.services.heroDesc}
            </motion.p>
          </div>
          
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-surface-container-lowest hairline-border p-8 rounded-xl shadow-ambient"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Shield size={20} className="text-primary" />
                  <span className="font-mono text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">NODE_STATUS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-[10px] font-bold text-emerald-500 uppercase">STABLE</span>
                </div>
              </div>
              <div className="text-on-surface text-3xl font-headline font-bold mb-1">99.9997%</div>
              <div className="text-[10px] font-mono text-on-surface-variant/50 uppercase tracking-widest mb-4">Uptime Performance</div>
              <div className="w-full bg-surface-container-low h-1 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '94%' }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  className="bg-primary h-full"
                ></motion.div>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-outline-variant/10">
                  <span className="text-[9px] font-bold text-on-surface-variant/40 uppercase tracking-wider">Node Location</span>
                  <span className="text-[9px] font-mono font-bold">BENGHAZI_HQ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-on-surface-variant/40 uppercase tracking-wider">Active Protocols</span>
                  <span className="text-[9px] font-mono font-bold text-primary">AES-256-GCM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Division 01: Cybersecurity Ops */}
      <section className="max-w-screen-2xl mx-auto px-8 lg:px-12 py-32 border-t border-outline-variant/10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] tracking-[0.3em] text-on-surface-variant/50 font-bold mb-4 uppercase">
              {isRtl ? 'القسم_01' : 'DIVISION_01'}
            </div>
            <h2 className="font-headline font-extrabold text-5xl text-on-surface tracking-tighter mb-6">{t.services.cybersecurity.title}</h2>
            <p className="text-on-surface-variant text-lg font-light leading-relaxed">{t.services.cybersecurity.desc}</p>
          </div>
          <div className="font-mono text-[10px] tracking-widest text-on-surface-variant/60 border border-outline-variant/10 px-6 py-3 rounded-full bg-surface-container-lowest shadow-sm">
            SEC_AUTH // LEVEL_5_CLEARANCE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.cybersecurity.categories.map((category: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-container-lowest p-12 hairline-border rounded-xl card-hover group"
            >
              <div className="font-mono text-[9px] text-primary font-bold mb-8 tracking-[0.2em]">
                UNIT_01{String.fromCharCode(65 + idx)}
              </div>
              <h3 className="font-headline font-bold text-2xl mb-8 text-on-surface tracking-tight group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item: any, itemIdx: number) => (
                  <li key={itemIdx} className="flex items-center gap-4 text-sm text-on-surface-variant font-medium">
                    <span className="w-1 h-1 bg-primary rounded-full"></span> {item.title}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Division 02: Digital Transformation */}
      <section className="max-w-screen-2xl mx-auto px-8 lg:px-12 py-32">
        <div className="flex items-center gap-8 mb-20">
          <div className="font-mono text-[10px] tracking-[0.4em] text-on-surface-variant/50 font-bold uppercase whitespace-nowrap">
            TRANSFORMATION_V2 // OPTIMAL
          </div>
          <div className="h-[1px] flex-grow bg-outline-variant/10"></div>
        </div>

        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.3em] text-on-surface-variant/50 font-bold mb-4 uppercase">
              {isRtl ? 'القسم_02' : 'DIVISION_02'}
            </div>
            <h2 className="font-headline font-extrabold text-5xl text-on-surface tracking-tighter mb-8 leading-[1.1]">
              {t.services.transformation.title}
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light mb-12">
              {t.services.transformation.desc}
            </p>
            
            <div className="bg-surface-container-low p-8 rounded-xl border border-primary/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GitBranch size={40} className="text-primary" />
              </div>
              <h4 className="font-headline font-bold text-lg mb-3 tracking-tight">Pulsar Bridge™</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Advanced legacy integration systems bridging historical data silos with future-ready architectures.
              </p>
              <div className="mt-6 font-mono text-[9px] text-primary font-bold uppercase tracking-widest">LEGACY_OPTIMIZED</div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.services.transformation.categories.map((category: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 bg-surface-container-lowest hairline-border rounded-xl card-hover group"
                >
                  <div className="text-[10px] font-mono text-on-surface-variant/30 mb-6">REF_02.{idx + 1}</div>
                  <h4 className="font-headline font-bold text-xl mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {category.subtitle || category.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                    {category.desc.length > 120 ? category.desc.substring(0, 120) + '...' : category.desc}
                  </p>
                  <div className="pt-4 border-t border-outline-variant/5 text-[9px] font-mono text-on-surface-variant/40 tracking-widest uppercase">
                    {idx === 0 ? 'BPMS_SUITE' : idx === 1 ? 'CLOUD_NATIVE' : idx === 2 ? 'AI_CORE_FABRIC' : 'ALPHA_STRATEGY'}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 px-8 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="inline-block relative mb-12">
            <Quote className="text-pulsar-red opacity-20" size={64} fill="currentColor" />
          </div>
          <blockquote className="font-headline text-4xl md:text-6xl font-extralight tracking-tight text-on-surface max-w-5xl mx-auto leading-[1.15] mb-12">
            {t.services.quote.text.split(' ').map((word: string, i: number) => (
              <React.Fragment key={i}>
                {word === 'liability' || word === 'stagnation' || word === 'مسؤولية' || word === 'ركود' ? (
                  <span className="text-pulsar-red font-bold italic">{word} </span>
                ) : (
                  word + ' '
                )}
              </React.Fragment>
            ))}
          </blockquote>
          <div className="flex justify-center items-center gap-6">
            <div className="h-[0.5px] w-16 bg-pulsar-red opacity-30"></div>
            <span className="font-mono text-xs tracking-[0.4em] text-on-surface-variant uppercase font-semibold">{t.services.quote.author}</span>
            <div className="h-[0.5px] w-16 bg-pulsar-red opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-48 px-8 text-center bg-surface">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-pulsar-red/5 border border-pulsar-red/10 rounded-full mb-12">
            <div className="w-2 h-2 bg-pulsar-red animate-pulse rounded-full"></div>
            <span className="font-mono text-[10px] text-pulsar-red font-bold uppercase tracking-[0.3em]">{t.services.finalHandshake}</span>
          </div>
          <h2 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface mb-16 leading-[0.9]">
            {t.services.initiateUpgrade}
          </h2>
          <div className="flex flex-col items-center gap-8">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center gap-6 px-12 py-6 bg-on-surface text-surface rounded-full font-headline font-bold text-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-pulsar-red translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10">{t.services.cta}</span>
              <ArrowRight className={`relative z-10 group-hover:translate-x-2 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-2' : ''}`} size={24} />
            </Link>
            <span className="font-mono text-[10px] text-on-surface-variant/40 uppercase tracking-[0.4em]">{t.services.encryption}</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
