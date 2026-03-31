import React from 'react';
import { motion } from 'motion/react';

interface MarqueeProps {
  items?: string[];
  lang?: 'en' | 'ar';
  direction?: 'left' | 'right';
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ items, lang = 'en', direction = 'left', speed = 40 }) => {
  const defaultItems = lang === 'en' 
    ? ['Cybersecurity', 'Digital Transformation', 'Cloud Systems', 'Data Sovereignty', 'Process Automation', 'Security Audits']
    : ['الأمن السيبراني', 'التحول الرقمي', 'الأنظمة السحابية', 'سيادة البيانات', 'أتمتة العمليات', 'التدقيق الأمني'];

  const displayItems = items || defaultItems;
  return (
    <div className="relative flex overflow-x-hidden bg-surface/80 backdrop-blur-md py-6 sm:py-8 border-y border-outline-variant/10">
      <motion.div
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex whitespace-nowrap will-change-transform"
      >
        {[...displayItems, ...displayItems].map((item, idx) => (
          <div key={idx} className="flex items-center px-6 sm:px-10 md:px-12">
            <span className="display-sm text-on-surface-variant/10 hover:text-primary transition-colors cursor-default uppercase tracking-widest">
              {item}
            </span>
            <div className="mx-6 sm:mx-10 w-1.5 h-1.5 bg-primary/20 rounded-full"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
