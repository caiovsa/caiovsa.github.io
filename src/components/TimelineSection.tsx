import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { timeline } from "@/data/timeline";

export default function TimelineSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gradient"
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full glass neon-glow flex items-center justify-center z-10">
                {entry.type === "education" ? (
                  <GraduationCap className="h-4 w-4 text-primary" />
                ) : (
                  <Briefcase className="h-4 w-4 text-accent" />
                )}
              </div>

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-[45%] glass rounded-xl p-6 ${
                  i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <span className="text-xs font-mono text-primary">{entry.year}</span>
                <h3 className="font-mono text-foreground font-semibold mt-1">{entry.title}</h3>
                <p className="text-sm text-muted-foreground font-mono">{entry.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{entry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
