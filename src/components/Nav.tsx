import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react'; // Normalized to motion/react
import { Link, useLocation } from 'react-router-dom';
import { translations } from '../translations';
import Logo from './Logo';

interface NavProps {
  scrolled: boolean;
  lang: 'en' | 'ar';
  setLang: (l: 'en' | 'ar') => void;
}

const Nav: React.FC<NavProps> = ({ scrolled, lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const t = translations[lang];
  const isRtl = lang === 'ar';
  
  const navItems = t.nav.links.map((link: any) => ({
    label: link.name,
    path: link.href
  }));

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'
      }`}>
        <div className="container-standard flex items-center justify-between">
          <Link to="/" className="shrink-0">
            <Logo className="h-10 sm:h-12" />
          </Link>
          
          {/* Desktop Matrix */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="group relative py-2 px-3 rounded-md transition-all duration-300 hover:bg-surface-container-low/50">
                <span className={`label-md transition-all duration-300 font-semibold ${
                  location.pathname === item.path ? 'text-primary' : 'text-on-surface-variant/70 group-hover:text-primary'
                }`}>
                  {item.label}
                </span>
                {location.pathname === item.path && (
                  <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-1/2 w-3/4 h-0.5 bg-primary -translate-x-1/2" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {/* Enhanced Language Switcher */}
            <div className="flex bg-surface-container-low p-1 rounded-md border border-outline-variant/10">
              {(['en', 'ar'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${
                    lang === l ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant/50 hover:text-on-surface-variant'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <Link to="/contact" className="btn-primary px-6 py-3 text-[10px] group">
              <span>{t.nav.action}</span>
              <ArrowRight className={`ml-2 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} size={12} />
            </Link>
          </div>

          {/* Mobile UI Toggle & Lang */}
          <div className="flex lg:hidden items-center gap-6">
            <div className="flex bg-surface-container-low p-1 rounded-md border border-outline-variant/10 scale-90">
              {(['en', 'ar'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${
                    lang === l ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant/50'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button onClick={() => setMobileMenuOpen(true)} className="p-3 bg-surface-container-low rounded-full text-on-surface-variant hover:text-primary transition-all active:scale-90">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar System */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-on-surface/20 backdrop-blur-md z-60"
            />
            <motion.aside 
              initial={{ x: isRtl ? '-100%' : '100%' }} animate={{ x: 0 }} exit={{ x: isRtl ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={`fixed ${isRtl ? 'left-0' : 'right-0'} top-0 h-full w-[80vw] max-w-75 bg-surface-container-lowest z-70 p-6 sm:p-10 flex flex-col shadow-ambient`}
            >
              <div className="flex justify-between items-center mb-16">
                <Logo className="h-10" />
                <button onClick={() => setMobileMenuOpen(false)} className="p-3 bg-surface-container-low rounded-full hover:text-primary transition-all active:scale-90">
                  <X size={24} />
                </button>
              </div>
              <nav className="space-y-4 grow">
                {navItems.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`block headline-md transition-all duration-300 py-3 px-4 rounded-lg ${
                      location.pathname === item.path ? `text-primary bg-primary/10 ${isRtl ? '-translate-x-2' : 'translate-x-2'}` : `text-on-surface-variant/60 hover:text-primary hover:bg-surface-container-low ${isRtl ? 'hover:-translate-x-1' : 'hover:translate-x-1'}`
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="pt-10 border-t border-outline-variant/10">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full group">
                  <span>{t.nav.action}</span>
                  <ArrowRight className={`ml-2 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} size={16} />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;