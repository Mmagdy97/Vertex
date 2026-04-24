/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Code, 
  Monitor, 
  Smartphone, 
  FolderSearch, 
  Armchair,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react';

// --- Custom Cursor ---
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => document.body.classList.add('interactive-hover');
    const handleMouseLeave = () => document.body.classList.remove('interactive-hover');

    const interactives = document.querySelectorAll('a, button, [role="button"]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div id="cursor-follower" ref={cursorRef} className="hidden md:block" />;
}

// --- Navigation ---
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', active: true },
    { name: 'Work', active: false },
    { name: 'About', active: false },
    { name: 'Contact', active: false },
  ];

  return (
    <>
      <nav className="sticky top-4 z-50 mx-auto max-w-5xl flex justify-between items-center px-6 md:px-8 py-4 glass rounded-2xl border border-primary/20 shadow-rose/10 w-[95%] md:w-full mt-4">
        <div className="flex items-center gap-3">
          <img 
            alt="Vertex Logo" 
            className="w-10 h-10 object-contain" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uh69dFZEkXW4WQPoDQ0iqhIz3uM3Vkks9FgU5DvQVG9QwBSEk3JYXfFCdpvxrR1K8zk35HsNBph53ce7eA4CX8NGA9yGycoTMergTgEc7qojp2r5qIZcFsxBA8TfDI85-1b7b33baDRUFHcVJY9HTYh4Py_hnArc8jriA_h72DenWtJmfbwWS0XR7osaTkKRZZqdfBZliIqam22tq8PcwSLh459gjVhAwOjibfWMbWvhacMVIUP9zkN6H-77ARlMh-5w-q2PMyErg" 
          />
          <span className="text-xl md:text-2xl font-black tracking-tighter text-primary font-display uppercase">Vertex</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-display tracking-[0.2em] uppercase text-[10px] font-bold">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href="#" 
              className={`${link.active ? 'text-primary border-b border-primary pb-1' : 'text-on-surface/50 hover:text-primary'} transition-colors`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 p-1 rounded-full bg-zinc-900 border border-white/5">
            <Sun size={14} className="text-on-surface/40" />
            <Moon size={14} className="text-primary" />
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-on-surface/70 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button className="hidden sm:flex bg-primary/10 text-primary border border-primary/30 w-8 h-8 rounded-full items-center justify-center hover:bg-primary/20 transition-all">
            <ArrowRight size={14} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-surface/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 p-10"
          >
            {navLinks.map((link, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                href="#"
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-display font-black tracking-widest uppercase transition-colors ${link.active ? 'text-primary text-glow' : 'text-on-surface/40 hover:text-primary'}`}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex gap-8 mt-10">
              {['Be', 'Dr', 'In'].map(s => (
                <div key={s} className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center font-display text-primary">{s}</div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- Hero ---
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-[85vh] flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-gutter py-12 md:py-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 space-y-6 max-w-xl text-center md:text-left"
      >
        <h1 className="font-display text-6xl md:text-8xl font-black text-on-surface leading-tight tracking-tighter">
          <span className="block">UI/UX</span>
          <span className="text-primary text-glow">DESIGNER</span>
        </h1>
        <p className="text-base md:text-lg text-on-surface/60 max-w-md mx-auto md:mx-0 leading-relaxed">
          I design digital experiences that are simple, modern and user-focused. 
          Crafting visual languages that resonate with humanity.
        </p>
        <div className="pt-6 flex justify-center md:justify-start">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group border border-primary/40 text-on-surface font-display tracking-widest text-xs px-10 py-4 rounded-full hover:bg-primary/10 transition-all flex items-center gap-3 uppercase font-bold"
          >
            VIEW WORK
            <ArrowRight size={16} className="text-primary group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      <div className="mt-16 md:mt-0 relative flex gap-4 md:gap-6 h-[300px] md:h-[450px] items-center z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, rotate: -10, y: 50 }}
          whileInView={{ opacity: 1, rotate: -5, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass p-2 md:p-3 rounded-2xl w-40 md:w-52 h-56 md:h-64 shadow-2xl overflow-hidden hover:rotate-0 transition-transform cursor-pointer group"
        >
          <img 
            className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXNQBDi1Z710IskbdIfpefCr5C9RLMaQ4HebPPQsYzDCZHyoTv0XnjpkCDDqKo082016chfT0-MJE84SXiwYiJ_VaF3BAZrJnsz5U_OnbAYpDQP4Yofk_F9zy3v1EyaMO8omNil3Kg5SFtYGbCrCPIX62f0t1UAJSWsogXe2mxgqQlMpkkRF47BkIBc1CVZuCjLMWtyL995vzpTbpSGBs6cp_vdbu4oFDUZbDbRZ55wWPn4UHaMPk6BPmN8UT29SYyypyUBdrmrzg" 
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass p-3 md:p-4 rounded-2xl w-48 md:w-60 h-64 md:h-80 z-10 shadow-[0_0_50px_rgba(255,79,114,0.15)] overflow-hidden hover:scale-105 transition-transform cursor-pointer group"
        >
          <img 
            className="w-full h-full object-cover rounded-xl border border-primary/20 group-hover:border-primary/50 transition-colors" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFkWGr0-3xVBd3e-A7e9wGtEGOjKEI3kC4iwPqfJuIagxAhmHzTuSs5CJC70KY9Y4BWyKEeS1rDs8YzCJENuKpI0QUV2cuH3D2WLHjD4wWmG9aAdWcIUs74YUBTfrDEMbhdnrqZ0mmZOVWSd3KNlRx9YE6zOTB-6zLTPLFJUl8BIbzbNeQsOj3n30iHNGgykm7_Vtnyzwq_bNNnkcVs2qqbYTBiPESY3FVsDqSNBR1KRjQZi5zl9Xd5WV0_TBXRR38GNWu_yb52p4" 
          />
        </motion.div>
      </div>

      <motion.div style={{ y }} className="fixed inset-0 z-[-1] opacity-20 md:opacity-30 select-none overflow-hidden h-screen pointer-events-none">
        <img 
          alt="Anubis Background"
          src="https://lh3.googleusercontent.com/aida/ADBb0ujiF1czJ5rAHc3uYis_jaQ0YB3JYDSpfKB7xhNmv2lzg1kRRI_BvKy3ar2t_OMjO3EKn7uUE3w2YEK_-1nzC3fa4J9TGz5FtZmvwEM1oDWsDt2XBPwKz77JTrSxuCo2CJV-l0PPZ8Jcn9IU8zTxP_048wA0jU0v-twpfxOx53I2ANFRjzjK6QTIFH3sLiqeu5JSnrUFsRBaczltlrIBiVddFXaPzqpAxAj1ENcMJgpYTzpyFtLR23CMwbHAkh1jNlP8HyZHIT93aQ"
          className="w-full h-full object-contain scale-[1.5] md:scale-110 translate-y-10 md:translate-y-20"
        />
        <div className="absolute inset-0 vignette" />
      </motion.div>
    </section>
  );
}

// --- Skills Section ---
function SkillBar({ icon: Icon, label, percentage }: { icon: any, label: string, percentage: number }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Icon className="text-on-surface/40" size={18} />
          <span className="font-display uppercase tracking-widest text-[10px] md:text-xs font-bold">{label}</span>
        </div>
        <span className="text-primary/60 font-bold text-xs md:text-sm tracking-tighter">{percentage}%</span>
      </div>
      <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden shadow-inner">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-primary shadow-[0_0_15px_#ff4f72]" 
        />
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-gutter py-24 md:py-32 flex flex-col lg:flex-row gap-16 lg:gap-20 relative overflow-hidden">
      <div className="flex-1 space-y-8 relative order-2 lg:order-1">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-7xl md:text-9xl font-black text-primary/5 absolute -z-10 -top-10 md:-top-16 -left-4 md:-left-10 select-none uppercase pointer-events-none"
        >
          About
        </motion.h2>
        <div className="relative pt-6">
          <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8">
            <span className="text-primary block text-glow mb-2">ABOUT ME</span>
            <span className="italic font-light text-on-surface/80">I create products not just art.</span>
          </h3>
          <p className="text-sm md:text-base text-on-surface/50 max-w-md leading-relaxed mb-10">
            I'm a UI/UX Designer based in Egypt. I specialize in creating clean, 
            effective and user-centered digital experiences that solve real problems 
            through elegant design patterns and deeply researched user journeys.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-primary/40 text-on-surface font-display tracking-widest text-[10px] px-8 py-4 rounded-full hover:bg-primary/10 transition-all flex items-center gap-3 uppercase font-bold w-fit"
          >
            MORE ABOUT ME
            <ArrowUpRight size={14} className="text-primary" />
          </motion.button>
        </div>
      </div>

      <div className="flex-1 order-1 lg:order-2">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-14 rounded-[30px] md:rounded-[40px] space-y-10 md:space-y-12 border border-primary/10 shadow-2xl"
        >
          <SkillBar icon={Monitor} label="UI/UX Design" percentage={95} />
          <SkillBar icon={Code} label="Web Design" percentage={90} />
          <SkillBar icon={Smartphone} label="Mobile Design" percentage={90} />
          <SkillBar icon={FolderSearch} label="Case Studies" percentage={85} />
          <SkillBar icon={Armchair} label="Branding" percentage={95} />
        </motion.div>
      </div>
    </section>
  );
}

// --- Contact ---
function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-gutter py-20 pb-32 md:pb-40">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 md:p-20 rounded-[30px] md:rounded-[50px] border border-primary/10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="space-y-6 relative z-10 w-full text-center xl:text-left">
          <span className="text-primary/60 text-[10px] font-display uppercase tracking-[0.4em] font-bold">Let's work together</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-on-surface leading-tight tracking-tighter">
            Have a project<br className="hidden md:block"/>in mind?
          </h2>
          <div className="pt-6 flex justify-center xl:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary text-on-primary font-display font-medium tracking-widest text-[10px] px-10 py-5 rounded-full shadow-[0_0_30px_rgba(255,79,114,0.3)] hover:shadow-[0_0_50px_rgba(255,79,114,0.5)] transition-all flex items-center gap-3 uppercase font-bold"
            >
              Contact Me
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 xl:gap-20 relative z-10 w-full xl:w-auto mt-10 xl:mt-0 px-4 md:px-0">
          <div className="space-y-3">
            <span className="text-zinc-600 uppercase text-[9px] md:text-[10px] tracking-[0.3em] font-bold block">Email</span>
            <a 
              href="mailto:Hello@Vertex.com" 
              className="text-on-surface/90 font-display text-xl md:text-2xl hover:text-primary transition-colors hover:text-glow block truncate"
            >
              Hello@Vertex.com
            </a>
          </div>
          <div className="space-y-3">
            <span className="text-zinc-600 uppercase text-[9px] md:text-[10px] tracking-[0.3em] font-bold block">Location</span>
            <p className="text-on-surface/90 font-display text-xl md:text-2xl">Cairo, Egypt</p>
          </div>
          <div className="sm:col-span-2 space-y-5">
            <span className="text-zinc-600 uppercase text-[9px] md:text-[10px] tracking-[0.3em] font-bold block">Find me on</span>
            <div className="flex gap-4">
              {['Be', 'Dr', 'In'].map((platform) => (
                <motion.div 
                  key={platform}
                  whileHover={{ scale: 1.1, borderColor: '#ff4f72' }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 glass flex items-center justify-center text-xs md:text-sm font-display cursor-pointer hover:text-primary transition-colors shadow-lg"
                >
                  {platform}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 text-center bg-black/80 backdrop-blur-md">
      <p className="font-display text-[8px] md:text-[9px] tracking-[0.4em] uppercase text-zinc-600 font-bold px-4">
        © 2026 VERTEX DESIGN STUDIO. PROUDLY BASED IN EGYPT.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <Hero />
      
      <div className="w-full h-24 md:h-32 bg-gradient-to-b from-transparent to-surface-container mt-[-80px] md:mt-[-100px] relative z-10" />
      
      <main className="bg-surface-container relative z-10">
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

