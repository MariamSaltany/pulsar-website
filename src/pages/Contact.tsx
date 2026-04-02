import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Terminal, Send, ShieldCheck } from 'lucide-react';
import { translations } from '../translations';

interface ContactProps {
  lang: 'en' | 'ar';
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const t = translations[lang];
  const isRtl = lang === 'ar';

  return (
    <div 
      className={`min-h-screen bg-surface-container-low pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden relative ${isRtl ? 'font-arabic' : 'font-sans'}`} 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none"></div>
      
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <header className={`mb-10 md:mb-24 ${isRtl ? 'text-right lg:text-end' : 'text-center lg:text-start'}`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 px-4 py-2 bg-pulsar-red/5 border border-pulsar-red/10 rounded-full mb-6 md:mb-8"
          >
            <div className="w-2 h-2 bg-pulsar-red animate-pulse rounded-full"></div>
            <span className="font-mono text-[10px] text-pulsar-red font-bold uppercase tracking-[0.3em]">{t.contact.tag}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`font-headline font-extrabold text-4xl sm:text-6xl md:text-8xl tracking-tighter text-on-surface mb-6 md:mb-8 leading-[0.9] ${isRtl ? 'text-right' : ''}`}
          >
            {isRtl ? t.contact.title : (
              t.contact.title.split(' ').map((word: string, i: number) => (
                <React.Fragment key={i}>
                  {i === 1 ? <span className="text-pulsar-red">{word} </span> : word + ' '}
                </React.Fragment>
              ))
            )}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant max-w-2xl text-lg md:text-xl font-light leading-relaxed mx-auto lg:mx-0"
          >
            {t.contact.description}
          </motion.p>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Contact Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 space-y-6 md:space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              {/* Email */}
              <div className="group flex items-start gap-4 md:gap-6 p-6 md:p-8 rounded-2xl bg-surface-container-lowest hairline-border hover:bg-white transition-all duration-500">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-pulsar-red group-hover:scale-110 transition-transform duration-500">
                  <Mail size={24} />
                </div>
                <div className="overflow-hidden">
                  <span className="block font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-[0.2em] mb-2">Direct_Channel</span>
                  <span className="block text-lg md:text-xl font-headline font-bold text-on-surface tracking-tight truncate">{t.contact.info.email}</span>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-start gap-4 md:gap-6 p-6 md:p-8 rounded-2xl bg-surface-container-lowest hairline-border hover:bg-white transition-all duration-500">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-pulsar-red group-hover:scale-110 transition-transform duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-[0.2em] mb-2">HQ_Coordinates</span>
                  <span className="block text-lg md:text-xl font-headline font-bold text-on-surface tracking-tight">{t.contact.info.location}</span>
                  <span className="block font-mono text-[10px] text-on-surface-variant/40 mt-2">{t.contact.info.coordinates}</span>
                </div>
              </div>
            </div>

            {/* System Status Strip */}
            <div className="p-6 md:p-8 rounded-2xl bg-on-surface text-surface flex items-center justify-between overflow-hidden relative">
              <div className={`absolute inset-0 opacity-10 pointer-events-none ${isRtl ? '-scale-x-100' : ''}`}>
                <Terminal className="absolute -inline-end-4 -bottom-4 rotate-12" size={120} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-1.5 bg-pulsar-red rounded-full animate-pulse"></div>
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-bold">{t.contact.info.status}</span>
                </div>
                <span className="font-mono text-[9px] opacity-50 uppercase tracking-[0.2em]">{t.contact.info.uplink}</span>
              </div>
              <ShieldCheck className="text-pulsar-red relative z-10" size={32} />
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-surface-container-lowest p-6 sm:p-10 md:p-16 rounded-3xl hairline-border relative overflow-hidden">
              {/* Animated Background Glow - positioned logically */}
              <div className={`absolute top-0 ${isRtl ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} w-64 h-64 bg-pulsar-red/5 blur-[100px] rounded-full -translate-y-1/2`}></div>
              
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8 md:py-12"
                  >
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-pulsar-red/10 rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-10">
                      <ShieldCheck className="text-pulsar-red" size={32} />
                    </div>
                    <h3 className="font-headline text-2xl md:text-4xl font-bold text-on-surface mb-4 md:mb-6 uppercase tracking-tight">{t.contact.success.title}</h3>
                    <p className="text-on-surface-variant text-base md:text-lg font-light max-w-sm mx-auto mb-8 md:mb-12 leading-relaxed">
                      {t.contact.success.description}
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="group inline-flex items-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-on-surface text-surface rounded-full font-headline font-bold text-xs md:text-sm uppercase tracking-widest overflow-hidden relative transition-all hover:scale-105 active:scale-95"
                    >
                      <div className="absolute inset-0 bg-pulsar-red translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                      <span className="relative z-10">{t.contact.success.action}</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 md:space-y-10 relative z-10"
                    onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
                  >
                    <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                      <div className="space-y-2 md:space-y-4">
                        <label className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-[0.3em] px-2 block">
                          {t.contact.form.name}
                        </label>
                        <input 
                          required
                          type="text"
                          placeholder={t.contact.form.namePlaceholder}
                          className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 md:px-6 py-3.5 md:py-5 focus:border-pulsar-red focus:bg-white outline-none transition-all font-headline font-medium text-on-surface placeholder:text-on-surface-variant/30"
                        />
                      </div>
                      <div className="space-y-2 md:space-y-4">
                        <label className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-[0.3em] px-2 block">
                          {t.contact.form.email}
                        </label>
                        <input 
                          required
                          type="email"
                          placeholder={t.contact.form.emailPlaceholder}
                          className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 md:px-6 py-3.5 md:py-5 focus:border-pulsar-red focus:bg-white outline-none transition-all font-headline font-medium text-on-surface placeholder:text-on-surface-variant/30"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 md:space-y-4">
                      <label className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-[0.3em] px-2 block">
                        {t.contact.form.details}
                      </label>
                      <textarea 
                        required
                        rows={5}
                        placeholder={t.contact.form.detailsPlaceholder}
                        className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl px-4 md:px-6 py-3.5 md:py-5 focus:border-pulsar-red focus:bg-white outline-none transition-all font-headline font-medium text-on-surface placeholder:text-on-surface-variant/30 resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="group w-full relative inline-flex items-center justify-center gap-4 md:gap-6 px-8 md:px-12 py-4 md:py-6 bg-on-surface text-surface rounded-full font-headline font-bold text-lg md:text-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <div className="absolute inset-0 bg-pulsar-red translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                      <span className="relative z-10">{t.contact.form.submit}</span>
                      <Send className={`relative z-10 transition-transform ${isRtl ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'} group-hover:-translate-y-1`} size={20} />
                    </button>

                    <div className="flex items-center justify-center gap-4 opacity-30">
                      <div className="h-px flex-1 max-w-10 bg-on-surface"></div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.4em] whitespace-nowrap text-center">Secure_Transmission_Active</span>
                      <div className="h-px flex-1 max-w-10 bg-on-surface"></div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;