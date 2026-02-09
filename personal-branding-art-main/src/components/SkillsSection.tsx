import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const technicalSkills = [
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  }
];

const tools = [
  {
    name: "Microsoft Excel",
    logo: "https://img.icons8.com/color/96/microsoft-excel-2019.png"
  },
  {
    name: "Power BI",
    logo: "https://img.icons8.com/color/96/power-bi.png"
  },
  {
    name: "Jupyter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
  },
  {
    name: "Pandas",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
  },
  {
    name: "NumPy",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
  },
  {
    name: "Netlify",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
  }
];

const databases = [
  {
    name: "SQL",
    logo: "https://img.icons8.com/color/96/sql.png"
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  }
];

const softSkills = [
  {
    name: "Adaptability",
    logo: "https://img.icons8.com/fluency/96/change.png"
  },
  {
    name: "Analytical Thinking",
    logo: "https://img.icons8.com/fluency/96/brain.png"
  },
  {
    name: "Team Collaboration",
    logo: "https://img.icons8.com/fluency/96/conference-call.png"
  },
  {
    name: "Time Management",
    logo: "https://img.icons8.com/fluency/96/time.png"
  },
  {
    name: "Communication",
    logo: "https://img.icons8.com/fluency/96/speech-bubble.png"
  }
];

interface SkillCardProps {
  name: string;
  logo: string;
  index: number;
}

const SkillCard = ({ name, logo, index }: SkillCardProps) => {
  return (
    <motion.div
      className="skill-card group cursor-pointer flex flex-col items-center justify-center gap-5 p-8"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.08, y: -10 }}
    >
      <motion.div 
        className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center transition-all duration-500 group-hover:drop-shadow-[0_0_25px_hsl(175_80%_50%/0.6)]"
        animate={{ 
          filter: ["drop-shadow(0 0 10px hsl(175 80% 50% / 0.2))", "drop-shadow(0 0 20px hsl(175 80% 50% / 0.4))", "drop-shadow(0 0 10px hsl(175 80% 50% / 0.2))"]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={logo}
          alt={name}
          className="w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </motion.div>
      <span className="text-foreground font-semibold text-base md:text-lg text-center">{name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(175_80%_20%/0.1)] blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.img 
              src="https://img.icons8.com/fluency/96/technical-support.png" 
              alt="Skills" 
              className="w-14 h-14"
              animate={{ 
                filter: ["drop-shadow(0 0 10px hsl(175 80% 50% / 0.3))", "drop-shadow(0 0 20px hsl(175 80% 50% / 0.5))", "drop-shadow(0 0 10px hsl(175 80% 50% / 0.3))"]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="section-heading">SKILLS</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My technical expertise and professional capabilities that I bring to every project.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="sub-heading mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></span>
            TECHNICAL SKILLS
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="sub-heading mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></span>
            TOOLS & TECHNOLOGIES
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <SkillCard key={tool.name} {...tool} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Databases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="sub-heading mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></span>
            DATABASES
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></span>
          </h3>
          <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto">
            {databases.map((db, index) => (
              <SkillCard key={db.name} {...db} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="sub-heading mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></span>
            SOFT SKILLS
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {softSkills.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;