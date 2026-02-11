export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Movie Recommendation System",
    description: "Content-based and collaborative filtering recommendation engine built with Python and machine learning algorithms.",
    tags: ["Python", "ML", "Pandas", "Scikit-learn"],
    github: "https://github.com/caiovsa/Movie-Recommendation-System",
  },
  {
    title: "Data Science Blog Post",
    description: "Analysis and blog post exploring data science concepts with real-world datasets and visualizations.",
    tags: ["Python", "Data Analysis", "Visualization"],
    github: "https://github.com/caiovsa/Data-Science-Blog-Post",
  },
  {
    title: "Disaster Response Pipeline",
    description: "NLP pipeline that classifies disaster messages into categories to aid emergency response teams.",
    tags: ["NLP", "Python", "Flask", "SQL"],
    github: "https://github.com/caiovsa/Disaster-Response-Pipeline",
  },
  {
    title: "Dog Breed Classifier",
    description: "Deep learning CNN model that identifies dog breeds from images using transfer learning.",
    tags: ["Deep Learning", "CNN", "PyTorch", "Computer Vision"],
    github: "https://github.com/caiovsa/Dog-Breed-Classifier",
  },
  {
    title: "Sparkify - Churn Prediction",
    description: "Big data project using Spark to predict user churn for a music streaming service.",
    tags: ["PySpark", "Big Data", "ML", "AWS"],
    github: "https://github.com/caiovsa/Sparkify",
  },
  {
    title: "Finding Donors",
    description: "Supervised learning project to identify potential donors for a charity organization.",
    tags: ["Python", "Scikit-learn", "Classification"],
    github: "https://github.com/caiovsa/Finding_Donors",
  },
  {
    title: "Image Classifier",
    description: "Neural network image classifier trained on flower dataset using PyTorch and transfer learning.",
    tags: ["PyTorch", "Deep Learning", "Transfer Learning"],
    github: "https://github.com/caiovsa/Image-Classifier",
  },
  {
    title: "Identify Customer Segments",
    description: "Unsupervised learning project using PCA and clustering to segment customers for a mail-order company.",
    tags: ["Clustering", "PCA", "Python", "Unsupervised ML"],
    github: "https://github.com/caiovsa/Identify-Customer-Segments",
  },
  {
    title: "Bike Share Analysis",
    description: "Exploratory data analysis of bike sharing systems across multiple US cities.",
    tags: ["Python", "Pandas", "EDA", "Statistics"],
    github: "https://github.com/caiovsa/Bike-Share",
  },
  {
    title: "Weather Trends",
    description: "SQL and data visualization project analyzing global and local weather temperature trends.",
    tags: ["SQL", "Data Visualization", "Analysis"],
    github: "https://github.com/caiovsa/Weather-Trends",
  },
  {
    title: "Wikipedia Web Scraper",
    description: "Web scraping tool to extract and analyze data from Wikipedia pages.",
    tags: ["Python", "BeautifulSoup", "Web Scraping"],
    github: "https://github.com/caiovsa/Wikipedia-Web-Scraper",
  },
];
