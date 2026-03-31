import React from 'react';
import { motion } from 'motion/react';

// Import logos to let Vite handle the URL resolution
import fortinetLogo from '../logos.tsx/Fortinet-logo-rgb-black-red.svg';
import exabeamLogo from '../logos.tsx/Exabeam-2024-Logo-Color-Dark-02.svg';
import auraquanticLogo from '../logos.tsx/auraquantic.svg';

interface PartnerLogoProps {
  name: string;
  role?: string;
  index?: number;
}

export const PartnerLogoSVG: React.FC<{ name: string }> = ({ name }) => {
  const nameLower = name.toLowerCase();

  const logoClasses = "w-40 h-auto opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-in-out";

  switch (nameLower) {
    case "fortinet":
      return (
        <img 
          src={fortinetLogo} 
          alt="Fortinet" 
          className={logoClasses}
          referrerPolicy="no-referrer"
        />
      );
    case "exabeam":
      return (
        <img 
          src={exabeamLogo} 
          alt="Exabeam" 
          className={logoClasses}
          referrerPolicy="no-referrer"
        />
      );
    case "auraquantic":
      return (
        <img 
          src={auraquanticLogo} 
          alt="AuraQuantic" 
          className={logoClasses}
          referrerPolicy="no-referrer"
        />
      );
    default:
      return <span className="font-bold tracking-tighter text-lg opacity-30 uppercase">{name}</span>;
  }
};

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, role, index = 0 }) => {

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-video bg-surface-container-low border border-outline-variant/10 flex flex-col items-center justify-center p-6 overflow-hidden group hover:shadow-ambient rounded-md transition-all duration-500"
    >
      <div className="absolute inset-0 opacity-[0.02] pulsar-grid-light" />
      
      <div className="relative z-10 text-on-surface-variant/60 group-hover:text-on-surface transition-all duration-500 transform group-hover:scale-[1.02]">
        <PartnerLogoSVG name={name} />
      </div>

      {role && (
        <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
          <p className="label-sm text-primary uppercase tracking-widest">{role}</p>
        </div>
      )}

      {/* Subtle Corners */}
      <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-outline-variant/20 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-outline-variant/20 group-hover:border-primary transition-colors" />
    </motion.article>
  );
};

export default PartnerLogo;