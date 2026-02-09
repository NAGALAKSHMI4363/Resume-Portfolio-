import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, Award } from 'lucide-react';

const internships = [
  {
    title: "AI & ML Intern",
    company: "Vaultsphere AI Technologies Pvt.Ltd",
    period: "12/2025 – Present",
    location: "Hyderabad, India",
    current: true,
    highlights: [
      "Developing and validating machine learning models using Python and industry-standard libraries",
      "Conducting exploratory data analysis and feature engineering to enhance model performance",
      "Evaluating models using appropriate metrics and refining solutions based on results",
      "Contributing to practical, data-driven AI/ML solutions aligned with business requirements"
    ]
  },
  {
    title: "Data Science Intern",
    company: "Reshapp Software Solutions Pvt.Ltd",
    period: "06/2025 – 08/2025",
    location: "Hyderabad, India",
    current: false,
    highlights: [
      "Worked on data analysis and machine learning tasks using real-world datasets",
      "Performed data cleaning, preprocessing, and exploratory data analysis",
      "Assisted in building, evaluating, and interpreting machine learning models",
      "Documented analytical findings and followed best practices in data handling"
    ]
  },
  {
    title: "Full Stack Intern",
    company: "Naresh Technologies",
    period: "05/2024 – 07/2024",
    location: "Hyderabad, India",
    current: false,
    highlights: [
      "Worked with Frontend technologies (HTML, CSS, JavaScript)",
      "Used GitHub for version control and project collaboration",
      "3 months intensive training program"
    ]
  }
];

const certifications = [
  {
    name: "DevOps Workshop",
    org: "Brainovision Solutions India Pvt.Ltd",
    image: "https://img.icons8.com/fluency/96/infinity.png"
  },
  {
    name: "Cloud Computing with GenAI",
    org: "Reshwanth Cloud Solutions Pvt.Ltd",
    image: "https://img.icons8.com/fluency/96/cloud-development.png"
  },
  {
    name: "Python",
    org: "IBM Company",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "Full Stack Python",
    org: "Naresh Technologies (AICTE)",
    image: "https://img.icons8.com/fluency/96/code.png"
  },
  {
    name: "Data Science",
    org: "AICTE",
    image: "https://img.icons8.com/fluency/96/combo-chart.png"
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(175_80%_15%/0.1)] blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.img 
              src="https://img.icons8.com/fluency/96/suitcase.png" 
              alt="Experience" 
              className="w-14 h-14"
              animate={{ 
                filter: ["drop-shadow(0 0 10px hsl(175 80% 50% / 0.3))", "drop-shadow(0 0 20px hsl(175 80% 50% / 0.5))", "drop-shadow(0 0 10px hsl(175 80% 50% / 0.3))"]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="section-heading">EXPERIENCE</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My professional journey and hands-on experience in the tech industry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Internships */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="sub-heading mb-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse-glow">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              INTERNSHIPS
            </h3>

            <div className="space-y-8">
              {internships.map((internship, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="glass-card p-6 ml-4">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <h4 className="font-semibold text-foreground">{internship.title}</h4>
                      {internship.current && (
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-background animate-pulse-glow">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium mb-3">{internship.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {internship.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {internship.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {internship.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="sub-heading mb-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse-glow">
                <Award className="w-6 h-6 text-primary" />
              </div>
              COURSES & CERTIFICATIONS
            </h3>

            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="cert-card p-5 group cursor-pointer"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.12, type: "spring" }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="flex items-center gap-5">
                    <motion.div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary/10 to-secondary/10 p-2 overflow-hidden"
                      animate={{ 
                        boxShadow: ["0 0 15px hsl(175 80% 50% / 0.2)", "0 0 25px hsl(175 80% 50% / 0.4)", "0 0 15px hsl(175 80% 50% / 0.2)"]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                        {cert.name}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        {cert.org}
                      </p>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Award className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;