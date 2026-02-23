import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy',
    'Jupyter', 'Machine Learning', 'Deep Learning', 'Data Science',
    'Docker', 'AWS', 'Redis'
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: '#0f172a' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(127, 90, 240, 0.2) 0%, transparent 50%)',
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
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
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #7F5AF0 0%, #00F5FF 100%)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-50"
                style={{
                  background: 'linear-gradient(135deg, #7F5AF0 0%, #00F5FF 100%)',
                }}
              />
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
                style={{
                  border: '4px solid rgba(0, 245, 255, 0.3)',
                  boxShadow: '0 0 50px rgba(0, 245, 255, 0.3)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#7F5AF0]/20 to-[#00F5FF]/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/profile.png" 
                    alt="Kishore V Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a <span className="text-[#a855f7]">passionate Machine Learning Engineer</span> and CSE 3rd year student 
              with a strong focus on building <span className="text-[#06b6d4]">intelligent, data-driven solutions</span>. 
              I love turning complex data into actionable insights and scalable ML applications.
            </p>
            {/* Skills */}
            <div>
              <h3 className="text-slate-100 text-xl mb-4">Tech Stack & Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="px-4 py-2 rounded-full text-sm"
                    style={{
                      backgroundColor: 'rgba(0, 245, 255, 0.1)',
                      border: '1px solid rgba(0, 245, 255, 0.3)',
                      color: '#00F5FF',
                      boxShadow: '0 0 20px rgba(0, 245, 255, 0.2)',
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(0, 245, 255, 0.2)',
                      boxShadow: '0 0 30px rgba(0, 245, 255, 0.4)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
