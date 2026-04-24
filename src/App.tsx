/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
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
  Moon
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
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div id="cursor-follower" ref={cursorRef} className="hidden md:block" />;
}

// --- Navigation ---
function Navigation() {
  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-5xl px- gutter flex justify-between items-center px-8 py-4 glass rounded-2xl border border-primary/20 shadow-rose/10 w-full mt-4">
      <div className="flex items-center gap-3">
        <img 
          alt="Vertex Logo" 
          className="w-10 h-10 object-contain" 
          src="https://lh3.googleusercontent.com/aida/ADBb0uh69dFZEkXW4WQPoDQ0iqhIz3uM3Vkks9FgU5DvQVG9QwBSEk3JYXfFCdpvxrR1K8zk35HsNBph53ce7eA4CX8NGA9yGycoTMergTgEc7qojp2r5qIZcFsxBA8TfDI85-1b7b33baDRUFHcVJY9HTYh4Py_hnArc8jriA_h72DenWtJmfbwWS0XR7osaTkKRZZqdfBZliIqam22tq8PcwSLh459gjVhAwOjibfWMbWvhacMVIUP9zkN6H-77ARlMh-5w-q2PMyErg" 
        />
        <span className="text-2xl font-black tracking-tighter text-primary font-display uppercase">Vertex</span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-display tracking-[0.2em] uppercase text-[10px] font-bold">
        <a href="#" className="text-primary border-b border-primary pb-1">Home</a>
        <a href="#" className="text-on-surface/50 hover:text-primary transition-colors">Work</a>
        <a href="#" className="text-on-surface/50 hover:text-primary transition-colors">About</a>
        <a href="#" className="text-on-surface/50 hover:text-primary transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 p-1 rounded-full bg-zinc-900 border border-white/5">
          <Sun size={14} className="text-on-surface/40" />
          <Moon size={14} className="text-primary" />
        </div>
        <button className="bg-primary/10 text-primary border border-primary/30 w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all">
          <ArrowRight size={14} />
        </button>
      </div>
    </nav>
  );
}

// --- Hero ---
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-gutter py-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 space-y-6 max-w-xl text-left"
      >
        <h1 className="font-display text-7xl md:text-8xl font-black text-on-surface leading-tight tracking-tighter">
          <span className="block">UI/UX</span>
          <span className="text-primary text-glow">DESIGNER</span>
        </h1>
        <p className="body-lg text-on-surface/60 max-w-md leading-relaxed">
          I design digital experiences that are simple, modern and user-focused. 
          Crafting visual languages that resonate.
        </p>
        <div className="pt-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group border border-primary/40 text-on-surface font-display tracking-widest text-xs px-8 py-3 rounded-full hover:bg-primary/10 transition-all flex items-center gap-3 uppercase font-bold"
          >
            VIEW WORK
            <ArrowRight size={16} className="text-primary group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      <div className="hidden lg:flex relative gap-6 h-[500px] items-center z-10">
        <motion.div 
          initial={{ opacity: 0, rotate: -10, y: 50 }}
          whileInView={{ opacity: 1, rotate: -5, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass p-3 rounded-2xl w-56 h-72 shadow-2xl overflow-hidden hover:rotate-0 transition-transform cursor-pointer group"
        >
          <img 
            className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXNQBDi1Z710IskbdIfpefCr5C9RLMaQ4HebPPQsYzDCZHyoTv0XnjpkCDDqKo082016chfT0-MJE84SXiwYiJ_VaF3BAZrJnsz5U_OnbAYpDQP4Yofk_F9zy3v1EyaMO8omNil3Kg5SFtYGbCrCPIX62f0t1UAJSWsogXe2mxgqQlMpkkRF47BkIBc1CVZuCjLMWtyL995vzpTbpSGBs6cp_vdbu4oFDUZbDbRZ55wWPn4UHaMPk6BPmN8UT29SYyypyUBdrmrzg" 
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass p-4 rounded-2xl w-64 h-80 z-10 shadow-[0_0_50px_rgba(255,79,114,0.15)] overflow-hidden hover:scale-105 transition-transform cursor-pointer group"
        >
          <img 
            className="w-full h-full object-cover rounded-xl border border-primary/20 group-hover:border-primary/50 transition-colors" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFkWGr0-3xVBd3e-A7e9wGtEGOjKEI3kC4iwPqfJuIagxAhmHzTuSs5CJC70KY9Y4BWyKEeS1rDs8YzCJENuKpI0QUV2cuH3D2WLHjD4wWmG9aAdWcIUs74YUBTfrDEMbhdnrqZ0mmZOVWSd3KNlRx9YE6zOTB-6zLTPLFJUl8BIbzbNeQsOj3n30iHNGgykm7_Vtnyzwq_bNNnkcVs2qqbYTBiPESY3FVsDqSNBR1KRjQZi5zl9Xd5WV0_TBXRR38GNWu_yb52p4" 
          />
        </motion.div>
      </div>

      {/* Global Background Elements */}
      <motion.div style={{ y }} className="fixed inset-0 z-[-1] opacity-30 select-none overflow-hidden">
        <img 
          alt="Anubis Background"
          src="https://lh3.googleusercontent.com/aida/ADBb0ujiF1czJ5rAHc3uYis_jaQ0YB3JYDSpfKB7xhNmv2lzg1kRRI_BvKy3ar2t_OMjO3EKn7uUE3w2YEK_-1nzC3fa4J9TGz5FtZmvwEM1oDWsDt2XBPwKz77JTrSxuCo2CJV-l0PPZ8Jcn9IU8zTxP_048wA0jU0v-twpfxOx53I2ANFRjzjK6QTIFH3sLiqeu5JSnrUFsRBaczltlrIBiVddFXaPzqpAxAj1ENcMJgpYTzpyFtLR23CMwbHAkh1jNlP8HyZHIT93aQ"
          className="w-full h-full object-contain scale-110 translate-y-20"
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
          <Icon className="text-on-surface/40" size={20} />
          <span className="font-display uppercase tracking-widest text-xs font-bold">{label}</span>
        </div>
        <span className="text-primary/60 font-bold text-sm tracking-tighter">{percentage}%</span>
      </div>
      <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-primary shadow-[0_0_10px_#ff4f72]" 
        />
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="max-w-7xl mx-auto px-gutter py-32 flex flex-col lg:flex-row gap-20 relative overflow-hidden">
      <div className="flex-1 space-y-8 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-8xl md:text-9xl font-black text-primary/5 absolute -z-10 -top-16 -left-10 select-none uppercase"
        >
          About
        </motion.h2>
        <div className="relative pt-6">
          <h3 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
            <span className="text-primary block text-glow mb-2">ABOUT ME</span>
            <span className="italic font-light text-on-surface/80">I create products not just art.</span>
          </h3>
          <p className="body-md text-on-surface/50 max-w-md leading-relaxed mb-10">
            I'm a UI/UX Designer based in Egypt. I specialize in creating clean, 
            effective and user-centered digital experiences that solve real problems 
            through elegant design patterns.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-primary/40 text-on-surface font-display tracking-widest text-[10px] px-8 py-3 rounded-full hover:bg-primary/10 transition-all flex items-center gap-3 uppercase font-bold"
          >
            MORE ABOUT ME
            <ArrowUpRight size={14} className="text-primary" />
          </motion.button>
        </div>
      </div>

      <div className="flex-1">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass p-10 md:p-14 rounded-[40px] space-y-12 border border-primary/10"
        >
          <SkillBar icon={Monitor} label="UI/UX Design" percentage={95} />
          <SkillBar icon={Code} label="Web Design" percentage={90} />
          <SkillBar icon={Smartphone} label="Mobile App Design" percentage={90} />
          <SkillBar icon={FolderSearch} label="Portfolio Design" percentage={85} />
          <SkillBar icon={Armchair} label="Interior Design" percentage={95} />
        </motion.div>
      </div>
    </section>
  );
}

// --- Contact ---
function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-gutter py-20 pb-40">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass p-10 md:p-20 rounded-[50px] border border-primary/10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="space-y-6 relative z-10">
          <span className="text-primary/60 text-[10px] font-display uppercase tracking-[0.4em] font-bold">Let's work together</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tighter">
            Have a project<br/>in mind?
          </h2>
          <div className="pt-6">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 xl:gap-20 relative z-10 w-full xl:w-auto">
          <div className="space-y-3">
            <span className="text-zinc-600 uppercase text-[10px] tracking-[0.3em] font-bold block">Email</span>
            <a 
              href="mailto:Hello@Vertex.com" 
              className="text-on-surface/90 font-display text-2xl hover:text-primary transition-colors hover:text-glow"
            >
              Hello@Vertex.com
            </a>
          </div>
          <div className="space-y-3">
            <span className="text-zinc-600 uppercase text-[10px] tracking-[0.3em] font-bold block">Location</span>
            <p className="text-on-surface/90 font-display text-2xl">Cairo, Egypt</p>
          </div>
          <div className="sm:col-span-2 space-y-4">
            <span className="text-zinc-600 uppercase text-[10px] tracking-[0.3em] font-bold block">Find me on</span>
            <div className="flex gap-4">
              {['Be', 'Dr', 'In'].map((platform) => (
                <motion.div 
                  key={platform}
                  whileHover={{ scale: 1.1, borderColor: '#ff4f72' }}
                  className="w-12 h-12 rounded-full border border-white/10 glass flex items-center justify-center text-xs font-display cursor-pointer hover:text-primary transition-colors"
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
    <footer className="w-full py-12 border-t border-white/5 text-center bg-black/50 backdrop-blur-md">
      <p className="font-display text-[9px] tracking-[0.4em] uppercase text-zinc-600 font-bold">
        © 2026 VERTEX DESIGN STUDIO. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-primary/30">
      <CustomCursor />
      <Navigation />
      <Hero />
      
      {/* Wave Transition (Simple representation) */}
      <div className="w-full h-32 bg-gradient-to-b from-transparent to-surface-container mt-[-100px] relative z-10" />
      
      <main className="bg-surface-container relative z-10">
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
