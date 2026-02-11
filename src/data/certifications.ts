export interface Certification {
  title: string;
  issuer: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    title: "Data Scientist Nanodegree",
    issuer: "Udacity",
    link: "https://www.udacity.com/",
  },
  {
    title: "Data Analyst Nanodegree",
    issuer: "Udacity",
    link: "https://www.udacity.com/",
  },
  {
    title: "Data Scientist with Python",
    issuer: "DataCamp",
    link: "https://www.datacamp.com/",
  },
  {
    title: "Machine Learning with Python",
    issuer: "Coursera",
    link: "https://www.coursera.org/",
  },
  {
    title: "Statistics and Data Science MicroMasters",
    issuer: "MIT (MITx)",
    link: "https://www.edx.org/",
  },
  {
    title: "SQL for Data Science",
    issuer: "DataCamp",
    link: "https://www.datacamp.com/",
  },
];
