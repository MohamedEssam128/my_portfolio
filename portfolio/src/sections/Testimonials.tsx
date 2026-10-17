// src/sections/Testimonials.tsx
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';
import { Linkedin } from '../components/Icons';
import { SectionHeader } from '../components/SectionHeader';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Others Say"
          subtitle="Recommendations and feedback from colleagues and collaborators."
        />

        {testimonials.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-glass card-hover rounded-2xl p-6 border border-white/6"
              >
                <MessageSquareQuote size={24} className="text-blue-400/40 mb-4" />
                <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  {t.photo ? (
                    <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 flex items-center justify-center text-white text-sm font-bold">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role} · {t.company}</div>
                  </div>
                  {t.linkedinUrl && (
                    <a
                      href={t.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-slate-600 hover:text-blue-400 transition-colors"
                    >
                      <Linkedin size={15} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-20 px-8 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
              <MessageSquareQuote size={28} className="text-blue-400/50" />
            </div>
            <h3 className="text-base font-semibold text-slate-300 mb-2">
              Recommendations Coming Soon
            </h3>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed mb-6">
              I'm building my professional network. LinkedIn recommendations and client feedback
              will appear here as projects are completed.
            </p>
            <a
              href="https://linkedin.com/in/mohamed-alattar-2824-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-600/20 transition-colors"
            >
              <Linkedin size={15} />
              Connect on LinkedIn
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
