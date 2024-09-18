import yugen from "../assets/projects/yugen.png";
import textUtilis from "../assets/projects/textUtilis.png";
import portfolio from "../assets/projects/portfolio.png";
import CMS from "../assets/projects/CMS.jpeg";
import laprec from "../assets/projects/laprec.jpeg";
import gabru_manto from "../assets/projects/gabru_manto.jpeg";

export const HERO_CONTENT = `Results-driven Software Engineer with over 3 years of experience in developing innovative solutions that bridge AI/ML with full-stack development. Proficient in Python, Django, Flask, and FastAPI, I have successfully delivered projects across diverse industries, including e-commerce, automotive, and ed-tech.`;

export const ABOUT_TEXT = `Seasoned software engineer with 3+ years background in creating and executing innovative software solutions.
Experienced in all aspects of software development lifecycle and end-to-end project management, from concept
through to development and delivery. Consistently recognized as a hands-on and competent leader, skilled at
coordinating cross-functional teams in a fast-paced and deadline-driven environment to steer timely project
completion. Proficient in programming languages including Python, Javascript and React. Also extensive experience
with AWS in creating and maintaining the infrastructure as well as CI/CD pipelines.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Senior Software Engineer",
    company: "Devsinc",
    description:
      "I have successfully developed and deployed an AI chatbot for a leading bank, automating customer support by utilizing vector-based document search and large language models (LLM). This solution reduced response times by 70% and boosted customer satisfaction by 45%. Additionally, I built and maintained scalable infrastructure using FastAPI to serve AI models for a large-scale application, improving efficiency by 30% with 99.9% uptime. I also spearheaded the development of a SaaS product for over 1,000 car dealerships across the US, providing data-driven insights that increased sales by 15% and enhanced market competitiveness by 20%, contributing millions in revenue growth.",
    technologies: ["Python", "Artificial Intelligence (AI)", "Machine Learning", "NLP", "LLMs", "Django", "Flask", "Pandas", "NumPy", "SikitLearn", "Logistic Regression", "Random Forest", "XGBoost", "SVC", "Statistical Data Analysis", "Docker", "AWS", "GitHub"],
  },
  {
    year: "May 2023 - May 2024",
    role: "Software Engineer",
    company: "Devsinc",
    description:
      "I led the development of a machine learning-based fraud detection system for a bank, focused on detecting fraudulent cheque deposits. This involved end-to-end execution, from data preprocessing and feature engineering to model selection and deployment. Using Random Forest, I fine-tuned the model to achieve 86% accuracy, reducing fraudulent transactions and improving security. Additionally, I implemented the LTI 1.3 protocol for an education platform, overcoming challenges due to limited documentation. My custom integration solution improved system interoperability and reduced tool integration time by 40%.",
    technologies: ["Python", "Artificial Intelligence (AI)", "Machine Learning", "Django", "Flask", "Pandas", "NumPy", "SikitLearn", "Logistic Regression", "Random Forest", "XGBoost", "SVC", "Statistical Data Analysis", "Docker", "AWS", "GitHub"],
  },
  {
    year: "March 2022 - May 2023",
    role: "Associate Software Engineer",
    company: "Devsinc",
    description:
      "I spearheaded the migration of a monolithic e-commerce platform to a serverless architecture in AWS, utilizing Lambda, API Gateway, and DynamoDB. This transformation improved scalability, reduced operational costs by 30%, and enhanced user experience with 25% faster page load times. Additionally, I developed and maintained a scalable resale marketplace from scratch, integrating third-party libraries to enhance functionality and creating detailed documentation for seamless future development. As the point of contact for resolving production issues, I ensured minimal downtime and a smooth shopping experience. Leveraging AWS services such as EC2 and S3, I optimized infrastructure management for scalability and cost-efficiency.",
    technologies: ["Python", "Django", "Flask", "GraphQL", "Docker", "Shopify", "PostgreSQL", "MongoDB", "AWS", "API Gateways", "AWS Lambda", "SaaS", "LTI 1.3", "GitHub"],
  },
  {
    year: "July 2021 - March 2022",
    role: "Software Engineer",
    company: "Ingenious Concepts",
    description:
      "I developed and maintained a dynamic website for Ingenious Concept, a gaming studio specializing in mobile games. I designed and implemented interactive, playable demos that allowed users to preview game features directly on the site. By working closely with the design and development teams, I ensured smooth integration of content updates and game assets. Additionally, I optimized the website’s performance and responsiveness across various devices, significantly enhancing the overall user experience.",
    technologies: ["Python", "Django", "JavaScript", "React.js", "Unity", "C#"],
  },
];

export const PROJECTS = [
  {
    title: "Gabru-Manto",
    image: gabru_manto,
    description:
      "This website, built using the MERN stack, allows users to compare various foods by evaluating their taste and price. It provides a scalable platform to assess and rank different food options based on these criteria.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node",
      "MongoDb",
      "Tailwind",
    ],
  },
  {
    title: "Complaint Management System",
    image: CMS,
    description:
      "The Complaint Management System (CMS) for the SDA project is designed to streamline and automate the process of handling and resolving complaints. It enables users to submit, track, and manage complaints efficiently, ensuring timely responses and resolutions. The system features intuitive dashboards for monitoring complaint status and analytics, improving overall customer satisfaction and operational efficiency.",
    technologies: ["C++", "OOP"],
  },
  {
    title: "Laprec",
    image: laprec,
    description:
      "A personalized laptop recommendation system that helps users find the best laptop based on their preferences and needs. Input your budget, primary use, and desired specifications, and receive tailored recommendations from our comprehensive database.",
    technologies: ["Svelt", "Python", "JavaScript", "HTML", "CSS", "Python"],
  },
  {
    title: "Yugen",
    image: yugen,
    description:
      "This clothing-selling website, developed using MySQL, C#, and ASP.NET, offers a seamless and dynamic shopping experience. It integrates MySQL for robust database management, C# for server-side logic, and ASP.NET for building a responsive and interactive web interface. The platform provides users with an intuitive interface for browsing and purchasing clothing items, with features for managing inventory, processing orders, and handling customer accounts.",
    technologies: ["C#", "mysql", "ASP.NET"],
  },
  {
    title: "Text-Utilis",
    image: textUtilis,
    description:
      "Textutils is a versatile utility designed to manipulate text according to your needs. Whether you want to format, transform, or analyze text, this tool provides a range of features to help you customize and optimize your content efficiently.",
    technologies: ["React", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Lahore, Pakistan. ",
  phoneNo: "+923104706631",
  email: "binabbas.waqas101@gmail.com",
};
