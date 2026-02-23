import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Github, Linkedin, Twitter, Send, Mail } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (mock implementation)
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! This is a demo form.');
  };

  const socials = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', url: 'https://github.com' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', url: 'https://twitter.com' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', url: 'mailto:alex@example.com' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: '#0f172a' }}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(127, 90, 240, 0.3) 0%, transparent 50%)',
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00F5FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #7F5AF0 0%, #00F5FF 100%)' }} />
          <p className="text-slate-300 text-lg">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Glassmorphism Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-10 rounded-2xl"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid #334155',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-slate-100 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                  style={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    color: '#f1f5f9',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#a855f7';
                    e.target.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#334155';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-slate-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                  style={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    color: '#f1f5f9',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#a855f7';
                    e.target.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#334155';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-slate-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all resize-none"
                  style={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    color: '#f1f5f9',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#a855f7';
                    e.target.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#334155';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-6 py-4 rounded-lg flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #7F5AF0 0%, #00F5FF 100%)',
                  color: 'white',
                  boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 50px rgba(168, 85, 247, 0.6)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </div>
          </form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex justify-center gap-4"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full"
                style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  color: '#f1f5f9',
                }}
                whileHover={{
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  borderColor: '#a855f7',
                  color: '#a855f7',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
