// src/sections/Services.tsx
import { motion } from 'framer-motion';
import { Brain, Eye, MessageSquare, BarChart3, Cpu, Database, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { services } from '../data/services';
import { profile } from '../data/profile';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={22} />,
  Eye: <Eye size={22} />,
  MessageSquare: <MessageSquare size={22} />,
  BarChart3: <BarChart3 size={22} />,
  Cpu: <Cpu size={22} />,
  Database: <Database size={22} />,
};

const serviceColors = [
  { icon: 'text-blue-400 bg-blue-500/10', border: 'border-blue-500/15', accent: 'text-blue-400' },
  { icon: 'text-cyan-400 bg-cyan-500/10', border: 'border-cyan-500/15', accent: 'text-cyan-400' },
  { icon: 'text-violet-400 bg-violet-500/10', border: 'border-violet-500/15', accent: 'text-violet-400' },
  { icon: 'text-amber-400 bg-amber-500/10', border: 'border-amber-500/15', accent: 'text-amber-400' },
  { icon: 'text-emerald-400 bg-emerald-500/10', border: 'border-emerald-500/15', accent: 'text-emerald-400' },
  { icon: 'text-rose-400 bg-rose-500/10', border: 'border-rose-500/15', accent: 'text-rose-400' },
];

export function Services() {
  const handleContact = (serviceTitle: string) => {
    const subject = encodeURIComponent(`Project Inquiry — ${serviceTitle}`);
    const body = encodeURIComponent(`Hi Mohamed,\n\nI'm interested in discussing a project related to: ${serviceTitle}\n\n`);
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-transparent via-white/[0.015] to-transparent">
      <div className="container-max">
        <SectionHeader
          eyebrow="Services"
          title="What I Can Build for You"
          subtitle="From data analysis to deployed AI systems — here's how I can help solve your problem."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const colors = serviceColors[i % serviceColors.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`card-glass card-hover p-6 rounded-2xl border ${colors.border} flex flex-col`}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${colors.icon} mb-4`}>
                  {iconMap[service.icon] || <Brain size={22} />}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>

                {/* Client problem */}
                <p className={`text-xs font-medium mb-3 ${colors.accent}`}>
                  {service.clientProblem}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Deliverables */}
                <ul className="space-y-1.5 mb-5">
                  {service.deliverables.map((d, di) => (
                    <li key={di} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className={`w-1 h-1 rounded-full ${colors.icon.split(' ')[0].replace('text-', 'bg-')} mt-1.5 shrink-0`} />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full text-xs bg-white/5 border border-white/8 text-slate-500"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-full text-xs text-slate-600">
                      +{service.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleContact(service.title)}
                  className={`flex items-center gap-2 text-sm font-medium ${colors.accent} hover:underline transition-all`}
                >
                  {service.ctaText}
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 via-violet-600/8 to-blue-600/10 border border-blue-500/15 text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Have a specific AI challenge?</h3>
          <p className="text-slate-400 text-sm mb-5">
            Tell me about your project and I'll let you know how I can help.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Let's Talk
          </button>
        </motion.div>
      </div>
    </section>
  );
}
