import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";

const roles = ["AI Engineer", "Data Scientist", "LLM Specialist"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-mono text-primary mb-4 tracking-widest uppercase"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
        >
          Caio Vasconcelos
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="h-10 mb-8"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            {roles[roleIndex]}
            <span className="animate-pulse text-primary">_</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/caiovsa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:neon-glow hover:border-primary/50 transition-all"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/caio-vasconcelos96/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:neon-glow hover:border-primary/50 transition-all"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce" />
      </motion.a>
    </section>
  );
}
