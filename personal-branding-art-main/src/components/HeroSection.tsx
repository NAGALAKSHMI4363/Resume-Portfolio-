import { motion } from 'framer-motion';
import { ChevronDown, FileText, Mail, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] top-[-10%] left-[-10%] bg-[hsl(270_60%_30%/0.3)]" style={{ animationDelay: '0s' }} />
        <div className="glow-orb w-[400px] h-[400px] bottom-[-5%] right-[-5%] bg-[hsl(175_80%_30%/0.25)]" style={{ animationDelay: '2s' }} />
        <div className="glow-orb w-[300px] h-[300px] top-[40%] right-[20%] bg-[hsl(190_85%_25%/0.2)]" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(hsl(175 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 80% 50%) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="text-foreground">Hi, I'm</span>
            <br />
            <span className="text-gradient" style={{ filter: 'drop-shadow(0 0 40px hsl(175 80% 50% / 0.5))' }}>
              Y.V.S Nagalakshmi
            </span>
          </motion.h1>

          {/* Role Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div 
              className="inline-block px-8 py-4 rounded-2xl mb-6"
              style={{ 
                background: 'linear-gradient(135deg, hsl(175 80% 50% / 0.15), hsl(270 60% 55% / 0.15))',
                border: '2px solid hsl(175 80% 50% / 0.4)',
                boxShadow: '0 0 40px hsl(175 80% 50% / 0.3), inset 0 0 30px hsl(175 80% 50% / 0.1)'
              }}
              animate={{ 
                boxShadow: [
                  '0 0 40px hsl(175 80% 50% / 0.3), inset 0 0 30px hsl(175 80% 50% / 0.1)',
                  '0 0 60px hsl(175 80% 50% / 0.5), inset 0 0 40px hsl(270 60% 55% / 0.15)',
                  '0 0 40px hsl(175 80% 50% / 0.3), inset 0 0 30px hsl(175 80% 50% / 0.1)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="text-foreground">Aspiring </span>
                <span 
                  className="text-gradient"
                  style={{ 
                    filter: 'drop-shadow(0 0 30px hsl(175 80% 50% / 0.6))',
                  }}
                >
                  Data Analyst
                </span>
              </h2>
            </motion.div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about transforming data into meaningful insights. 
              Currently pursuing B.Tech in Computer Science (AI) with expertise in 
              Python, SQL, Power BI, and Machine Learning.
            </p>
          </motion.div>

          {/* Welcome Message Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 mb-10 max-w-xl mx-auto"
          >
            <p className="text-foreground/90 italic leading-relaxed">
              "Thank you for visiting my portfolio! I'm excited to share my journey 
              with you. Feel free to explore my work and reach out if you'd like to connect!"
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="/resume/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient px-8 py-4 animate-pulse-glow"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px hsl(175 80% 50% / 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20} />
              View Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-outline-glow px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ textShadow: '0 0 20px hsl(175 80% 50% / 0.5)' }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default HeroSection;