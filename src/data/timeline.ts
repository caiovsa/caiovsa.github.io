export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "work";
}

export const timeline: TimelineEntry[] = [
  {
    year: "2024 - Present",
    title: "AI Engineer & LLM Specialist",
    subtitle: "Working with GenAI & LLMs",
    description: "Developing and deploying large language model solutions, building RAG pipelines, and creating AI-powered applications for enterprise use cases.",
    type: "work",
  },
  {
    year: "2023",
    title: "Post-Graduate in Artificial Intelligence",
    subtitle: "Mackenzie Presbyterian University",
    description: "Specialized studies in machine learning, deep learning, NLP, and computer vision with focus on practical industry applications.",
    type: "education",
  },
  {
    year: "2019 - 2022",
    title: "Data Scientist",
    subtitle: "Data Science & Analytics",
    description: "Applied machine learning models, built data pipelines, and delivered actionable insights through dashboards and analytical reports.",
    type: "work",
  },
  {
    year: "2014 - 2019",
    title: "B.Sc. Electrical Engineering",
    subtitle: "UNIT - Universidade Tiradentes",
    description: "Bachelor's degree in Electrical Engineering with focus on signal processing, automation, and embedded systems.",
    type: "education",
  },
];
