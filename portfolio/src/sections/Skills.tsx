// src/sections/Skills.tsx
import { motion } from 'framer-motion';
import {
  Code2, Brain, Eye, MessageSquare, BarChart3, Database,
  Server, Wrench
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { skillCategories, type SkillCategory } from '../data/skills';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={18} />,
  Brain: <Brain size={18} />,
  Eye: <Eye size={18} />,
  MessageSquare: <MessageSquare size={18} />,
  BarChart3: <BarChart3 size={18} />,
  Database: <Database size={18} />,
  Server: <Server size={18} />,
  Wrench: <Wrench size={18} />,
};

type ColorKey = 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'rose' | 'amber' | 'slate';

const colorConfig: Record<ColorKey, { icon: string; badge: string; border: string; glow: string }> = {
  blue:    { icon: 'text-blue-400 bg-blue-500/10',    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20',    border: 'border-blue-500/20',    glow: 'hover:border-blue-500/40' },
  violet:  { icon: 'text-violet-400 bg-violet-500/10', badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20', border: 'border-violet-500/20', glow: 'hover:border-violet-500/40' },
  cyan:    { icon: 'text-cyan-400 bg-cyan-500/10',     badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',    border: 'border-cyan-500/20',    glow: 'hover:border-cyan-500/40' },
  emerald: { icon: 'text-emerald-400 bg-emerald-500/10', badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20', border: 'border-emerald-500/20', glow: 'hover:border-emerald-500/40' },
  orange:  { icon: 'text-orange-400 bg-orange-500/10', badge: 'bg-orange-500/10 text-orange-300 border-orange-500/20', border: 'border-orange-500/20', glow: 'hover:border-orange-500/40' },
  rose:    { icon: 'text-rose-400 bg-rose-500/10',     badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20',    border: 'border-rose-500/20',    glow: 'hover:border-rose-500/40' },
  amber:   { icon: 'text-amber-400 bg-amber-500/10',   badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20', border: 'border-amber-500/20',   glow: 'hover:border-amber-500/40' },
  slate:   { icon: 'text-slate-400 bg-slate-500/10',   badge: 'bg-slate-500/10 text-slate-300 border-slate-500/20', border: 'border-slate-500/20',   glow: 'hover:border-slate-500/40' },
};

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const color = colorConfig[category.color as ColorKey] || colorConfig.blue;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`card-glass rounded-2xl p-5 border ${color.border} ${color.glow} transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${color.icon}`}>
          {iconMap[category.icon] || <Brain size={18} />}
        </div>
        <h3 className="text-sm font-semibold text-white">{category.title}</h3>
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className={`px-2.5 py-1 rounded-full text-xs font-medium border ${color.badge} ${
              skill.level === 'core' ? 'font-semibold' : ''
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="Skills & Tools"
          title="Technical Toolkit"
          subtitle="Technologies and frameworks I work with, organized by domain."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.id} category={category} index={i} />
          ))}
        </div>

        {/* Core CS note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center"
        >
          <p className="text-sm text-slate-500">
            <span className="text-slate-400 font-medium">Core CS foundations:</span>{' '}
            Data Structures · Algorithms · Object-Oriented Programming · Problem Solving
          </p>
        </motion.div>
      </div>
    </section>
  );
}
