import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Wrench } from 'lucide-react';

const projects = [
  {
    title: "Bella-Vista Restaurant Website",
    description: "Built a responsive restaurant website using HTML, CSS, and JavaScript. Implemented interactive menu and improved UI/UX for better engagement. Optimized layout for mobile and desktop devices.",
    tools: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    github: "https://github.com/NAGALAKSHMI4363/Bella-Vista-Restaurant-website.git",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
  },
  {
    title: "Customer Churn Prediction",
    description: "Built a machine learning model to predict customer churn by performing data preprocessing, exploratory data analysis (EDA), and feature engineering. Trained and evaluated models such as Logistic Regression, Random Forest, and XGBoost.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "XGBoost"],
    github: "https://github.com/NAGALAKSHMI4363/CUSTOMER-CHURN-PREDICTION.git",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Developed a machine learning–based credit card fraud detection system using Python, applying data preprocessing and classification techniques to accurately identify fraudulent transactions and handle imbalanced data.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/NAGALAKSHMI4363/CREDIT-CARD-FRAUD-DETECTION-USING-ML.git",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[hsl(270_60%_15%/0.15)] blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.img 
              src="https://img.icons8.com/fluency/96/project-management.png" 
              alt="Projects" 
              className="w-14 h-14"
              animate={{ 
                filter: ["drop-shadow(0 0 10px hsl(175 80% 50% / 0.3))", "drop-shadow(0 0 20px hsl(175 80% 50% / 0.5))", "drop-shadow(0 0 10px hsl(175 80% 50% / 0.3))"]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="section-heading">PROJECTS</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcasing my practical experience in data analysis, machine learning, and web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground uppercase">Tools & Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-outline-glow flex items-center justify-center gap-2 text-sm py-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient flex items-center justify-center gap-2 text-sm py-2 px-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;