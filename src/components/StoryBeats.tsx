"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function StoryBeats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero (0 - 15%) => Fades out from 10 to 15%
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Engineering Reveal (15 - 40%)
  const engOpacity = useTransform(scrollYProgress, [0.1, 0.15, 0.35, 0.4], [0, 1, 1, 0]);
  const engX = useTransform(scrollYProgress, [0.1, 0.15], [-50, 0]);

  // Gaming (40 - 65%)
  const gameOpacity = useTransform(scrollYProgress, [0.35, 0.4, 0.6, 0.65], [0, 1, 1, 0]);
  const gameX = useTransform(scrollYProgress, [0.35, 0.4], [50, 0]);

  // Cooling (65 - 85%)
  const coolOpacity = useTransform(scrollYProgress, [0.6, 0.65, 0.8, 0.85], [0, 1, 1, 0]);
  const coolY = useTransform(scrollYProgress, [0.6, 0.65], [50, 0]);

  // Reassembly (85 - 100%)
  const reOpactiy = useTransform(scrollYProgress, [0.8, 0.85, 1], [0, 1, 1]);
  const reY = useTransform(scrollYProgress, [0.8, 0.85], [50, 0]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "500vh" }}>
      <div className="sticky top-0 w-full h-screen flex items-center justify-center pointer-events-none p-4 md:p-8">
        
        {/* BEAT 1: HERO */}
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="absolute text-center -mt-[30vh]">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-4">
            Lenovo LOQ
          </h1>
          <h2 className="text-2xl md:text-3xl text-gradient-cyan font-medium mb-6">
            Power, perfected.
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-lg">
            Next-generation gaming and productivity, engineered for those who push limits.
          </p>
        </motion.div>

        {/* BEAT 2: ENGINEERING */}
        <motion.div style={{ opacity: engOpacity, x: engX }} className="absolute left-[5%] md:left-[10%] max-w-md text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Precision-engineered <br/>for performance.</h2>
          <p className="text-white/60 mb-4 text-lg">
            A carefully designed internal architecture balances power, thermals, and efficiency.
          </p>
          <p className="text-white/60 text-lg">
            Every component is optimized to deliver sustained performance—whether you&apos;re gaming, coding, or creating.
          </p>
        </motion.div>

        {/* BEAT 3: GAMING */}
        <motion.div style={{ opacity: gameOpacity, x: gameX }} className="absolute right-[5%] md:right-[10%] max-w-md text-right">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Built for gaming.<br/>Ready for anything.</h2>
          <ul className="text-white/60 text-lg space-y-4">
            <li>12th Gen Intel Core i5 delivers fast, responsive performance.</li>
            <li>RTX 3050 graphics power smooth gameplay and creative workflows.</li>
            <li>Multitask effortlessly—from AAA gaming to heavy coding sessions.</li>
          </ul>
        </motion.div>

        {/* BEAT 4: COOLING */}
        <motion.div style={{ opacity: coolOpacity, y: coolY }} className="absolute left-[5%] md:left-[10%] top-[20%] max-w-md text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Cool under pressure.<br/>Sharp in every frame.</h2>
          <p className="text-white/60 mb-4 text-lg">
            Advanced thermal design keeps performance stable even during intense workloads.
          </p>
          <p className="text-white/60 mb-4 text-lg">
            A 15.6&quot; FHD 144Hz display delivers fluid visuals for gaming, editing, and everyday use.
          </p>
          <p className="text-white/60 text-lg">
            Comfortable keyboard and precision trackpad enhance long coding and productivity sessions.
          </p>
        </motion.div>

        {/* BEAT 5: REASSEMBLY */}
        <motion.div style={{ opacity: reOpactiy, y: reY }} className="absolute text-center mt-[35vh] md:mt-[45vh]">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white">
            Power everything.<br/>Limit nothing.
          </h2>
          <p className="text-xl md:text-2xl text-gradient-cyan font-medium mb-8">
            Lenovo LOQ. Built for gamers. Ready for creators.
          </p>
          <div className="flex gap-4 justify-center items-center pointer-events-auto">
             <Link href="https://www.amazon.in/s?k=lenovo+loq&ref=nb_sb_noss" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-cyan)] text-white font-semibold rounded-full transition-colors shadow-[0_0_20px_rgba(0,80,255,0.4)]">
                Explore LOQ
             </Link>
             <Link href="https://docs.google.com/document/d/1OM3rqPLjNw1-jHCBbZS4Jl4peJaM6KAsiSwQAohfEM0/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-white/80 hover:text-white font-medium underline transition-colors">
                See full specs
             </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
