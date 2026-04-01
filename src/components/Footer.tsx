import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { translations } from '../translations';
import Logo from './Logo';

interface FooterProps {
  lang: 'en' | 'ar';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];
  const isRtl = lang === 'ar';

  return (
    <footer className={`relative bg-surface pt-24 lg:pt-32 pb-16 border-t border-outline-variant/10 overflow-hidden ${isRtl ? 'font-arabic' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Subtle Background Accents */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full pointer-events-none opacity-30" />
      
      <div className="container-standard relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 xl:grid-cols-[1.35fr_1fr] xl:gap-28 pb-24 border-b border-outline-variant/10">
          
          {/* Brand Identity Column */}
          <div className="xl:col-span-5 space-y-10">
            <Logo className="h-10 sm:h-12" />
            <p className="headline-sm text-on-surface-variant/60 max-w-md break-words">
              {t.footer.copy}
            </p>
            
            {/* Social Handlers */}
            <div className="flex gap-4 sm:gap-6">
              {[
                { icon: Linkedin, href: "https://linkedin.com/..." },
                { icon: Facebook, href: "https://facebook.com/..." }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-surface-container-low border border-outline-variant/10 rounded-md flex items-center justify-center text-on-surface-variant/40 hover:text-primary hover:bg-surface-container-high transition-all duration-300 active:scale-95"
                >
                  <social.icon size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links and Navigation */}
          <div className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
            {/* Navigation Column */}
            <div className="space-y-6 sm:space-y-8">
              <span className="label-sm text-primary/60 uppercase tracking-widest">{(t.footer as any).headers.navigation}</span>
              <ul className="space-y-3 sm:space-y-4">
                {t.nav.links.map((item: any) => (
                  <li key={item.name}>
                    <Link to={item.href} className="label-md text-on-surface-variant/70 hover:text-primary transition-all flex items-center gap-2 sm:gap-3 group break-words">
                      <span className="truncate">{item.name}</span>
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-6 sm:space-y-8">
              <span className="label-sm text-primary/60 uppercase tracking-widest">{(t.footer as any).headers.legal}</span>
              <ul className="space-y-3 sm:space-y-4">
                {t.footer.links.slice(0, 2).map((link, i) => (
                  <li key={i}>
                    <a href="#" className="label-md text-on-surface-variant/70 hover:text-primary transition-all break-words">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Portal */}
            <div className="space-y-6 sm:space-y-8">
              <span className="label-sm text-primary/60 uppercase tracking-widest">{(t.footer as any).headers.uplink}</span>
              <a href="#" className="btn-secondary w-full group !px-4 sm:!px-8">
                <span className="truncate">{t.footer.links[2]}</span>
                <Globe size={16} className={`${isRtl ? 'mr-2 sm:mr-3' : 'ml-2 sm:ml-3'} text-on-surface-variant/40 group-hover:text-primary animate-pulse flex-shrink-0`} />
              </a>
            </div>
          </div>
        </div>

        {/* System Metadata Footer */}
        <div className="pt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 sm:gap-4 bg-surface-container-low px-4 sm:px-6 py-2.5 sm:py-3 rounded-md border border-outline-variant/10 shadow-sm max-w-full overflow-hidden">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse flex-shrink-0" />
            <span className="label-sm text-on-surface-variant/40 uppercase tracking-widest truncate">
              {t.hero.status} // {(t.footer as any).metadata.status.split('//')[1]?.trim() || "Node_Benghazi_2.6"}
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-30">
            <span className="label-sm text-[8px] sm:!text-[9px] uppercase tracking-widest text-center">{t.footer.copy.split('//')[0]}</span>
            <div className="hidden sm:block h-4 w-px bg-outline-variant/20" />
            <span className="label-sm text-[8px] sm:!text-[9px] uppercase tracking-widest text-center">{(t.footer as any).metadata.ledger}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;