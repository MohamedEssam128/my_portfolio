// src/sections/About.tsx
import { motion } from 'framer-motion';
import { Brain, Eye, MessageSquare, BarChart3 } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/profile';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={20} />,
  Eye: <Eye size={20} />,
  MessageSquare: <MessageSquare size={20} />,
  BarChart3: <BarChart3 size={20} />,
};

const colorMap: Record<number, { bg: string; text: string; border: string }> = {
  0: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  1: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
  2: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20' },
  3: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
};

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="About Me"
          title="Building Intelligence from Data"
          subtitle="A problem-first approach to artificial intelligence and machine learning."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio text — wider column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-slate-300 text-base leading-relaxed">
              I'm an <span className="text-white font-medium">AI and Machine Learning Engineer</span> studying
              Information Technology at Borg Al-Arab Technological University, Alexandria. My focus is on building
              end-to-end intelligent systems that solve real problems — not just training models, but understanding
              the full pipeline from raw data to working solution.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              My technical work spans <span className="text-blue-400">Deep Learning</span>,{' '}
              <span className="text-cyan-400">Computer Vision</span>,{' '}
              <span className="text-violet-400">Natural Language Processing</span>, and{' '}
              <span className="text-amber-400">Data Science</span>. I approach each project with strong emphasis
              on data understanding, rigorous evaluation, and honest reporting of results.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              I believe the value of AI comes from practical application. Whether building a robotic heritage
              preservation system, an NLP medical classifier, or a data analytics pipeline — I focus on
              delivering solutions that are grounded, well-evaluated, and maintainable.
            </p>

            {/* Quick stats */}
            <div className="pt-4 flex flex-wrap gap-6">
              {[
                { value: '7+', label: 'Projects Built' },
                { value: '3+', label: 'AI Domains' },
                { value: '2026', label: 'Graduation Year' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Focus areas — narrower column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 grid grid-cols-1 gap-4"
          >
            {profile.focusAreas.map((area, i) => {
              const colors = colorMap[i] || colorMap[0];
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`card-glass card-hover p-4 rounded-xl border ${colors.border}`}
                >
                  <div className={`inline-flex p-2 rounded-lg ${colors.bg} ${colors.text} mb-3`}>
                    {iconMap[area.icon] || <Brain size={20} />}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{area.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{area.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
