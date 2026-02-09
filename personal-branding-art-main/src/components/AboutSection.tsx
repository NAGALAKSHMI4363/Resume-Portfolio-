import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Mail, Phone, FileText, ExternalLink } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology in CSE - AI",
    institution: "Krishna Chaitanya Institute of Technology and Sciences",
    period: "08/2022 – Present",
    grade: "CGPA: 7.8",
    location: "Markapur, India"
  },
  {
    degree: "Intermediate (APBIE) - MPC",
    institution: "Kamala Junior College",
    period: "07/2020 – 03/2022",
    grade: "CGPA: 8.0",
    location: "Markapur, India"
  },
  {
    degree: "SSC",
    institution: "Siddhartha High School",
    period: "06/2019 – 04/2020",
    grade: "CGPA: 9.8",
    location: "Kunta Junction, India"
  }
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(270_60%_20%/0.1)] blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.img 
              src="https://img.icons8.com/fluency/96/user-male-circle.png" 
              alt="About" 
              className="w-14 h-14"
              animate={{ 
                filter: ["drop-shadow(0 0 10px hsl(175 80% 50% / 0.3))", "drop-shadow(0 0 20px hsl(175 80% 50% / 0.5))", "drop-shadow(0 0 10px hsl(175 80% 50% / 0.3))"]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="section-heading">ABOUT ME</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get to know more about me, my background, and what drives my passion for data analytics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Career Objective & Resume */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 mb-8">
              <h3 className="sub-heading mb-5 flex items-center gap-3">
                <motion.img 
                  src="https://img.icons8.com/fluency/96/goal.png" 
                  alt="Career" 
                  className="w-10 h-10"
                  animate={{ 
                    filter: ["drop-shadow(0 0 8px hsl(175 80% 50% / 0.3))", "drop-shadow(0 0 16px hsl(175 80% 50% / 0.5))", "drop-shadow(0 0 8px hsl(175 80% 50% / 0.3))"]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                CAREER OBJECTIVE
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ambitious B.Tech Computer Science (AI) student and aspiring Data Analyst with practical experience 
                in data analysis, machine learning, and data visualization. Skilled in Python, SQL, Power BI, 
                and frontend technologies, focused on delivering meaningful, data-driven insights.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 border-t border-border/50 pt-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>yvsnl365@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>9014792275</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Markapur, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Resume Preview Card */}
            <motion.div
              className="glass-card p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                       style={{ background: 'var(--gradient-primary)' }}>
                    <FileText className="w-7 h-7 text-background" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>MY RESUME</h4>
                    <p className="text-sm text-muted-foreground">View or download my full resume</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href="/resume/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient flex-1 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} />
                  View Resume
                </a>
                <a
                  href="/resume/Resume.pdf"
                  download="Nagalakshmi_Resume.pdf"
                  className="btn-outline-glow flex-1 flex items-center justify-center gap-2"
                >
                  <FileText size={18} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="sub-heading mb-10 flex items-center gap-4">
              <motion.img 
                src="https://img.icons8.com/fluency/96/graduation-cap.png" 
                alt="Education" 
                className="w-12 h-12"
                animate={{ 
                  filter: ["drop-shadow(0 0 10px hsl(175 80% 50% / 0.3))", "drop-shadow(0 0 20px hsl(175 80% 50% / 0.5))", "drop-shadow(0 0 10px hsl(175 80% 50% / 0.3))"]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              EDUCATION
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="glass-card p-6 ml-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <span className="badge-glow text-xs">{edu.grade}</span>
                      </div>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>{edu.period}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {edu.location}
                        </span>
                      </div>
                    </div>
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

export default AboutSection;