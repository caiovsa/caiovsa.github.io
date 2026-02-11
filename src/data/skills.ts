export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "AI / ML",
    skills: ["LLMs", "GenAI", "NLP", "Deep Learning", "Scikit-learn", "PyTorch", "TensorFlow", "LangChain"],
  },
  {
    category: "Data Tools",
    skills: ["Pandas", "NumPy", "Tableau", "Power BI", "Spark", "Airflow"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "CI/CD", "Linux"],
  },
];
