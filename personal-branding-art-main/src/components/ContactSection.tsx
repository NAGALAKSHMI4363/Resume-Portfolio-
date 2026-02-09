import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  FileText,
  ExternalLink,
  Heart,
  Code
} from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/NAGALAKSHMI4363',
      username: 'NAGALAKSHMI4363'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/',
      username: 'Y.V.S Nagalakshmi'
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/Nagalakshmi4363',
      username: 'Nagalakshmi4363'
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[hsl(270_60%_15%/0.15)] blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.img 
              src="https://img.icons8.com/fluency/96/phone-message.png" 
              alt="Contact" 
              className="w-14 h-14"
              animate={{ 
                filter: ["drop-shadow(0 0 10px hsl(175 80% 50% / 0.3))", "drop-shadow(0 0 20px hsl(175 80% 50% / 0.5))", "drop-shadow(0 0 10px hsl(175 80% 50% / 0.3))"]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="section-heading">GET IN TOUCH</h2>
          </div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">🎯</span>
            <p className="text-primary font-semibold text-lg">
              I'm a Fresher actively looking for Data Analyst roles!
            </p>
            <span className="text-2xl">💼</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm excited to start my career journey. Feel free to reach out if you'd like to connect! 🌟
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 uppercase tracking-wide flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <Send className="w-5 h-5 text-primary" />
                SEND ME A MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-glass"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-glass"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-glass"
                    placeholder="How can I help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-glass resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gradient w-full flex items-center justify-center gap-2 py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 uppercase tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
                CONTACT DETAILS
              </h3>

              <div className="space-y-5">
                <motion.a
                  href="mailto:yvsnl365@gmail.com"
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                       style={{ background: 'var(--gradient-primary)' }}>
                    <Mail className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      yvsnl365@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:9014792275"
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                       style={{ background: 'var(--gradient-primary)' }}>
                    <Phone className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      +91 9014792275
                    </p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                       style={{ background: 'var(--gradient-primary)' }}>
                    <MapPin className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">
                      Markapur, Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 uppercase tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
                PROFILES & LINKS
              </h3>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-primary/30 transition-all group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {link.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{link.username}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="flex gap-4">
              <motion.a
                href="/resume/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-gradient flex items-center justify-center gap-2 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={18} />
                View Resume
              </motion.a>
              <motion.a
                href="/resume/Resume.pdf"
                download="Nagalakshmi_Resume.pdf"
                className="flex-1 btn-outline-glow flex items-center justify-center gap-2 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText size={18} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-border/30 pt-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground text-sm flex items-center gap-1"
            >
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Y.V.S Nagalakshmi
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="text-muted-foreground text-sm"
            >
              © 2025 All Rights Reserved
            </motion.p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;