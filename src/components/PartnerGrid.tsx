import React from 'react';
import { motion } from 'motion/react';
import { PartnerLogoSVG } from './PartnerLogo';
import { translations } from '../translations';

const motionEase = [0.22, 1, 0.36, 1] as const;

const PartnerCard = ({ partner, index, lang }: { partner: any, index: number, lang: 'en' | 'ar' }) => {
  const t = translations[lang];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: motionEase }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="airy-card p-8! flex flex-col items-center h-full group">
        {/* Ambient Glow: Subtle */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-700" />

        {/* Icon Container: Ultra Clean */}
<div className="mb-8 p-8 rounded-md bg-surface-container-low border border-outline-variant/10 flex items-center justify-center min-h-30 w-full group-hover:scale-[1.02] transition-all duration-500 shadow-sm group-hover:shadow-ambient">
          <PartnerLogoSVG name={partner.name} />
        </div>

        {/* Text Content */}
        <div className="text-center space-y-2 flex-1 flex flex-col justify-center relative z-10">
          <h3 className="headline-md text-on-surface">
            {partner.name}
          </h3>
          <p className="label-sm text-primary/70 uppercase tracking-widest">
            {partner.role}
          </p>
        </div>

        {/* Bottom Detail: Minimalist */}
        <div className="mt-8 pt-6 border-t border-outline-variant/10 w-full flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="label-sm text-[8px]! text-on-surface-variant/60 uppercase tracking-widest">
              {(t as any).technical?.verifiedNode || "VERIFIED_NODE"}
            </span>
          </div>
          <span className="label-sm text-[9px]! text-primary/30 uppercase tracking-widest">
            0{index + 1}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const PartnerSection = ({ lang }: { lang: 'en' | 'ar' }) => {
  const t = translations[lang];
  const partners = t.alliances.list;

  return (
    <section id="partners" className="py-24 section-inner relative overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: motionEase }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-surface-container-low border border-outline-variant/10 rounded-md mb-6 shadow-sm">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="label-sm text-on-surface-variant/60 uppercase tracking-widest">
              {t.alliances.tag}
            </span>
          </div>
          <h2 className="display-md text-on-surface mb-6">
            {t.alliances.title}
          </h2>
          <div className="flex items-center justify-center gap-2 opacity-30">
            <div className="w-1 h-1 rounded-full bg-on-surface-variant/40" />
            <span className="label-sm text-[8px]! uppercase tracking-widest">{(t as any).technical?.globalAlliance || "Global_Alliance_Network // Verified"}</span>
            <div className="w-1 h-1 rounded-full bg-on-surface-variant/40" />
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {partners.map((p, i) => (
          <PartnerCard key={p.name} partner={p} index={i} lang={lang} />
        ))}
      </div>
    </section>
  );
};
