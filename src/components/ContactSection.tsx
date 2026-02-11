import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-gradient"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
        >
          <a href="mailto:caiovsa2@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
            <Mail className="h-4 w-4" />
            caiovsa2@gmail.com
          </a>
          <span className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
            <MapPin className="h-4 w-4" />
            Brazil
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-16"
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

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Caio Vasconcelos. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
