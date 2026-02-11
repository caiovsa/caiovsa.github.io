import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gradient"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm an <span className="text-foreground font-semibold">AI Engineer</span> and{" "}
              <span className="text-foreground font-semibold">Data Scientist</span> with a background in
              Electrical Engineering from UNIT and a post-graduate specialization in Artificial Intelligence
              from Mackenzie Presbyterian University.
            </p>
            <p>
              Currently, I work with <span className="text-primary">Large Language Models (LLMs)</span> and
              Generative AI, building intelligent solutions that bridge the gap between cutting-edge research
              and real-world applications.
            </p>
            <p>
              My journey spans from classical data science — predictive modeling, NLP, and data
              visualization — to modern AI engineering with RAG pipelines, prompt engineering, and
              LLM fine-tuning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
              <div className="relative glass rounded-2xl w-full h-full flex items-center justify-center neon-glow">
                <div className="text-center space-y-2">
                  <p className="font-mono text-5xl text-gradient font-bold">&lt;/&gt;</p>
                  <p className="text-sm text-muted-foreground font-mono">AI · Data · LLMs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
