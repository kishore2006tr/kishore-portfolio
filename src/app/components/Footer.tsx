import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 px-6 md:px-12 border-t"
      style={{
        backgroundColor: '#0f172a',
        borderColor: '#334155',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            className="text-slate-400 text-sm flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {currentYear} KISHORE V. Built with Next.js & 
            <Heart className="w-4 h-4 text-[#a855f7] inline-block fill-current" />
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              { icon: <Github className="w-4 h-4" />, url: 'https://github.com/KISHORE2316046', label: 'GitHub' },
              { icon: <Linkedin className="w-4 h-4" />, url: 'https://www.linkedin.com/in/kishorev26/', label: 'LinkedIn' },
              { icon: <Twitter className="w-4 h-4" />, url: 'https://twitter.com', label: 'Twitter' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Back to top hint */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="#"
            className="text-slate-500 text-xs hover:text-cyan-400 transition-colors inline-block"
            whileHover={{ y: -2 }}
          >
            Back to Top ↑
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
