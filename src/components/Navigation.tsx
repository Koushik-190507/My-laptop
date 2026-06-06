"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Navigation() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const scrollToPercentage = (e: React.MouseEvent<HTMLAnchorElement>, percentage: number) => {
    e.preventDefault();
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: totalScroll * percentage,
      behavior: "smooth",
    });
  };
  
  return (
    <motion.nav 
      style={{ opacity, backgroundColor: "rgba(5, 5, 5, 0.75)" }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md border-b border-white/5"
    >
      <div className="text-xl font-bold tracking-tight text-white/90">
        Lenovo LOQ
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
        <Link href="https://youtu.be/UVy2hd5uf-I?si=AB7UQhq6wc7WpoI7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Overview</Link>
        <Link href="#" onClick={(e) => scrollToPercentage(e, 0.50)} className="hover:text-white transition-colors">Performance</Link>
        <Link href="#" onClick={(e) => scrollToPercentage(e, 0.75)} className="hover:text-white transition-colors">Cooling</Link>
        <Link href="https://docs.google.com/document/d/1OM3rqPLjNw1-jHCBbZS4Jl4peJaM6KAsiSwQAohfEM0/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Specs</Link>
        <Link href="https://www.amazon.in/s?k=lenovo+loq&ref=nb_sb_noss" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Buy</Link>
      </div>
      <div>
        <Link href="https://www.amazon.in/s?k=lenovo+loq&ref=nb_sb_noss" target="_blank" rel="noopener noreferrer" className="relative inline-block px-6 py-2 text-sm font-semibold text-white rounded-full overflow-hidden group">
          <span className="absolute inset-0 bg-gradient-to-r from-[--color-brand-accent] to-[--color-brand-cyan] opacity-80 group-hover:opacity-100 transition-opacity"></span>
          <span className="relative z-10">Explore LOQ</span>
        </Link>
      </div>
    </motion.nav>
  );
}
