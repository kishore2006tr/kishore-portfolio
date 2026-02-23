import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Database, Globe, Layout, Server, Brain } from 'lucide-react';

export function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const techStack = [
    {
      icon: <Brain className="w-8 h-8" />,
      name: 'ML Frameworks',
      description: 'TensorFlow, PyTorch, Scikit-learn, Keras',
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: 'Data Science',
      description: 'Pandas, NumPy, Matplotlib, Seaborn',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: 'Cloud & MLOps',
      description: 'AWS SageMaker, Docker, MLflow, Kubeflow',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      name: 'Tools',
      description: 'Git, VS Code, Jupyter, Postman',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      name: 'ML & AI',
      description: 'TensorFlow, PyTorch, Scikit-learn, Pandas',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: '#0f172a' }}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.2) 0%, transparent 50%)',
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
            Tech Stack
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #7F5AF0 0%, #00F5FF 100%)' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 60px rgba(0, 245, 255, 0.3)',
              }}
              className="group relative p-8 rounded-2xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(127, 90, 240, 0.1) 0%, rgba(0, 245, 255, 0.1) 100%)',
                }}
              />
              
              <div className="relative z-10">
                <div
                  className="inline-flex p-4 rounded-xl mb-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(127, 90, 240, 0.2) 0%, rgba(0, 245, 255, 0.2) 100%)',
                    color: '#00F5FF',
                  }}
                >
                  {tech.icon}
                </div>
                <h3 className="text-slate-100 text-xl mb-3">{tech.name}</h3>
                <p className="text-slate-300 leading-relaxed">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
