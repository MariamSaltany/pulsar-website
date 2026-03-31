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
    <footer className={`relative bg-surface pt-32 pb-16 border-t border-outline-variant/10 overflow-hidden ${isRtl ? 'font-arabic' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Subtle Background Accents */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full pointer-events-none opacity-30" />
      
      <div className="container-standard relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 lg:gap-32 pb-24 border-b border-outline-variant/10">
          
          {/* Brand Identity Column */}
          <div className="lg:col-span-5 space-y-10">
            <Logo className="h-12" />
            <p className="headline-sm text-on-surface-variant/60 max-w-md">
              {t.footer.copy}
            </p>
            
            {/* Social Handlers */}
            <div className="flex gap-6">
              {[
                { icon: Linkedin, href: "https://linkedin.com/..." },
                { icon: Facebook, href: "https://facebook.com/..." }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  className="w-12 h-12 bg-surface-container-low border border-outline-variant/10 rounded-md flex items-center justify-center text-on-surface-variant/40 hover:text-primary hover:bg-surface-container-high transition-all duration-300 active:scale-95"
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links and Navigation */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {/* Navigation Column */}
            <div className="space-y-8">
              <span className="label-sm text-primary/60 uppercase tracking-widest">{(t.footer as any).headers.navigation}</span>
              <ul className="space-y-4">
                {t.nav.links.map((item: any) => (
                  <li key={item.name}>
                    <Link to={item.href} className="label-md text-on-surface-variant/70 hover:text-primary transition-all flex items-center gap-3 group">
                      {item.name}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-8">
              <span className="label-sm text-primary/60 uppercase tracking-widest">{(t.footer as any).headers.legal}</span>
              <ul className="space-y-4">
                {t.footer.links.slice(0, 2).map((link, i) => (
                  <li key={i}>
                    <a href="#" className="label-md text-on-surface-variant/70 hover:text-primary transition-all">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Portal */}
            <div className="col-span-2 md:col-span-1 space-y-8">
              <span className="label-sm text-primary/60 uppercase tracking-widest">{(t.footer as any).headers.uplink}</span>
              <a href="#" className="btn-secondary w-full group">
                {t.footer.links[2]}
                <Globe size={16} className={`${isRtl ? 'mr-3' : 'ml-3'} text-on-surface-variant/40 group-hover:text-primary animate-pulse`} />
              </a>
            </div>
          </div>
        </div>

        {/* System Metadata Footer */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 bg-surface-container-low px-6 py-3 rounded-md border border-outline-variant/10 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
            <span className="label-sm text-on-surface-variant/40 uppercase tracking-widest">
              {t.hero.status} // {(t.footer as any).metadata.status.split('//')[1]?.trim() || "Node_Benghazi_2.6"}
            </span>
          </div>
          
          <div className="flex items-center gap-8 opacity-30">
            <span className="label-sm text-[9px] uppercase tracking-widest">{t.footer.copy.split('//')[0]}</span>
            <div className="h-4 w-px bg-outline-variant/20" />
            <span className="label-sm text-[9px]! uppercase tracking-widest">{(t.footer as any).metadata.ledger}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;