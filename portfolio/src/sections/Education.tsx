// src/sections/Education.tsx
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Clock, MapPin, Download, FileText } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { education, certificates, type EducationEntry } from '../data/education';

const typeConfig: Record<EducationEntry['type'], { icon: React.ReactNode; color: string; bg: string; border: string; label: string }> = {
  degree: {
    icon: <GraduationCap size={18} />,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    label: 'Degree',
  },
  diploma: {
    icon: <BookOpen size={18} />,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    label: 'Diploma',
  },
  training: {
    icon: <Award size={18} />,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    label: 'Training',
  },
  certificate: {
    icon: <FileText size={18} />,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    label: 'Certificate',
  },
};

export function Education() {
  return (
    <section id="education" className="section-padding bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="container-max">
        <SectionHeader
          eyebrow="Education & Training"
          title="Academic & Professional Development"
          subtitle="My learning journey — from formal education to specialized AI training."
        />

        {/* Education timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {education.map((entry, i) => {
            const config = typeConfig[entry.type];
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`card-glass card-hover p-6 rounded-2xl border ${config.border} relative overflow-hidden`}
              >
                {/* Type label */}
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.color} mb-4`}>
                  {config.icon}
                  {config.label}
                </div>

                <h3 className="text-base font-bold text-white mb-1 leading-snug">{entry.title}</h3>
                <div className="text-sm font-medium text-slate-300 mb-3">{entry.institution}</div>

                {/* Meta */}
                <div className="space-y-1.5 mb-4">
                  {entry.location && (
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin size={11} />
                      {entry.location}
                    </div>
                  )}
                  {(entry.startDate || entry.endDate) && (
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock size={11} />
                      {entry.startDate && entry.endDate
                        ? `${entry.startDate} — ${entry.endDate}`
                        : entry.startDate || entry.endDate}
                    </div>
                  )}
                  {entry.duration && (
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock size={11} />
                      {entry.duration}
                    </div>
                  )}
                </div>

                {entry.description && (
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{entry.description}</p>
                )}

                {entry.highlights && entry.highlights.length > 0 && (
                  <ul className="space-y-1 mb-4">
                    {entry.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Certificate download */}
                {entry.certificateFile ? (
                  <a
                    href={entry.certificateFile}
                    download
                    className={`inline-flex items-center gap-1.5 text-xs ${config.color} hover:underline`}
                  >
                    <Download size={12} />
                    Download Certificate
                  </a>
                ) : (
                  <div className="text-xs text-slate-600 italic">
                    Certificate available upon request
                  </div>
                )}

                {/* Decorative corner */}
                <div className={`absolute -top-6 -right-6 w-16 h-16 rounded-full ${config.bg} opacity-30`} />
              </motion.div>
            );
          })}
        </div>

        {/* Certificates subsection */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-slate-300 mb-6 flex items-center gap-2"
          >
            <FileText size={18} className="text-amber-400" />
            Certificates & Internships
          </motion.h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl card-glass border border-amber-500/10 hover:border-amber-500/20 transition-all"
              >
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <Award size={16} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{cert.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{cert.issuer}</div>
                  {cert.description && (
                    <div className="text-xs text-slate-500 mt-1">{cert.description}</div>
                  )}
                  {cert.certificateFile ? (
                    <a
                      href={cert.certificateFile}
                      download
                      className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline mt-2"
                    >
                      <Download size={11} />
                      Download
                    </a>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
