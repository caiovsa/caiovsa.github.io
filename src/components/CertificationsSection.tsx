import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "@/data/certifications";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gradient"
        >
          Courses & Certifications
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-6 hover:neon-glow transition-all group"
            >
              <Award className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-mono text-foreground font-semibold mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground font-mono mb-3">{cert.issuer}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-mono"
                >
                  <ExternalLink className="h-3 w-3" />
                  View
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
