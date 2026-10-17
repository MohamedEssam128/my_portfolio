// src/sections/Workflow.tsx
import { motion } from 'framer-motion';
import { Search, Database, Wrench, Brain, BarChart3, Rocket } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

const steps = [
  {
    number: '01',
    icon: <Search size={22} />,
    title: 'Understand the Problem',
    description: 'Define requirements, objectives, constraints, and success criteria before touching any data.',
    color: { icon: 'text-blue-400 bg-blue-500/10', number: 'text-blue-500/30', border: 'border-blue-500/20', line: 'bg-blue-500/30' },
    details: ['Requirements analysis', 'Define success metrics', 'Scope and constraints', 'Stakeholder alignment'],
  },
  {
    number: '02',
    icon: <Database size={22} />,
    title: 'Collect & Explore Data',
    description: 'Inspect the data, understand its structure, identify quality issues, and perform exploratory analysis.',
    color: { icon: 'text-cyan-400 bg-cyan-500/10', number: 'text-cyan-500/30', border: 'border-cyan-500/20', line: 'bg-cyan-500/30' },
    details: ['Data collection & auditing', 'Exploratory data analysis', 'Identify quality issues', 'Visualize distributions'],
  },
  {
    number: '03',
    icon: <Wrench size={22} />,
    title: 'Prepare & Engineer Features',
    description: 'Clean the data, preprocess it, handle missing values, and create meaningful features.',
    color: { icon: 'text-violet-400 bg-violet-500/10', number: 'text-violet-500/30', border: 'border-violet-500/20', line: 'bg-violet-500/30' },
    details: ['Data cleaning & imputation', 'Feature engineering', 'Encoding & normalization', 'Train/validation split'],
  },
  {
    number: '04',
    icon: <Brain size={22} />,
    title: 'Develop & Train Models',
    description: 'Select appropriate algorithms, train candidate models, and tune hyperparameters.',
    color: { icon: 'text-emerald-400 bg-emerald-500/10', number: 'text-emerald-500/30', border: 'border-emerald-500/20', line: 'bg-emerald-500/30' },
    details: ['Algorithm selection', 'Model training', 'Hyperparameter tuning', 'Iterative experimentation'],
  },
  {
    number: '05',
    icon: <BarChart3 size={22} />,
    title: 'Evaluate & Improve',
    description: 'Use rigorous evaluation metrics, validate on held-out data, and investigate failure cases.',
    color: { icon: 'text-amber-400 bg-amber-500/10', number: 'text-amber-500/30', border: 'border-amber-500/20', line: 'bg-amber-500/30' },
    details: ['Metric selection & reporting', 'Error analysis', 'Cross-validation', 'Honest result documentation'],
  },
  {
    number: '06',
    icon: <Rocket size={22} />,
    title: 'Deploy & Integrate',
    description: 'Where appropriate, expose the solution via an API, application, or dashboard and document limitations.',
    color: { icon: 'text-rose-400 bg-rose-500/10', number: 'text-rose-500/30', border: 'border-rose-500/20', line: 'bg-rose-500/30' },
    details: ['Flask or Gradio API', 'Application integration', 'Document limitations', 'Monitor and iterate'],
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="section-padding bg-gradient-to-b from-transparent via-white/[0.015] to-transparent">
      <div className="container-max">
        <SectionHeader
          eyebrow="Workflow"
          title="How I Approach AI Projects"
          subtitle="A structured, iterative process from problem definition to practical solution."
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative flex gap-0 mb-8">
            {steps.map((step, i) => (
              <div key={i} className="flex-1 flex items-center">
                <div className="flex-1 relative">
                  {i > 0 && (
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-white/8 -translate-y-1/2" />
                  )}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative z-10 mx-auto w-12 h-12 flex items-center justify-center"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.color.icon} border ${step.color.border}`}>
                      {step.icon}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`card-glass rounded-xl p-4 border ${step.color.border}`}
              >
                <div className={`text-3xl font-black mb-2 ${step.color.number}`}>
                  {step.number}
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((d, di) => (
                    <li key={di} className="flex items-center gap-1.5 text-xs text-slate-600">
                      <span className={`w-1 h-1 rounded-full shrink-0 ${step.color.icon.split(' ')[0].replace('text-', 'bg-')}`} />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex gap-4"
            >
              {/* Step indicator */}
              <div className="flex flex-col items-center shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.color.icon} border ${step.color.border}`}>
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-px flex-1 mt-2 ${step.color.line} opacity-30`} />
                )}
              </div>

              {/* Content */}
              <div className={`card-glass rounded-xl p-4 border ${step.color.border} flex-1 mb-4`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-black ${step.color.number}`}>{step.number}</span>
                  <h3 className="text-sm font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
