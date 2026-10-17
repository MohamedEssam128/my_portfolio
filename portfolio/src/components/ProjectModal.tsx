// src/components/ProjectModal.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ExternalLink, Tag, ChevronRight, BarChart3,
  CheckCircle2, Lightbulb, AlertCircle
} from 'lucide-react';
import { Github } from './Icons';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-16 pb-8"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0a0f1e] border border-white/10 shadow-2xl"
          >
            {/* Cover image or gradient header */}
            <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
              {project.coverImage && !imgFailed ? (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient(project.category)} opacity-20`} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent" />
              
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryBadge(project.category)}`}>
                  {project.category}
                </span>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
              >
                <X size={18} />
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-1">
                  {project.subtitle && (
                    <span className="text-xs text-slate-400">{project.subtitle}</span>
                  )}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Links */}
              {(project.githubUrl || project.liveDemoUrl) && (
                <div className="flex gap-3 flex-wrap">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-slate-300 transition-colors"
                    >
                      <Github size={15} />
                      View on GitHub
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-sm text-blue-400 transition-colors"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              )}

              {/* Overview */}
              <div>
                <h3 className="text-base font-semibold text-white mb-2">Overview</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{project.overview}</p>
              </div>

              {/* Problem & Solution */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle size={15} className="text-red-400" />
                    <h3 className="text-sm font-semibold text-red-400">Problem</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={15} className="text-green-400" />
                    <h3 className="text-sm font-semibold text-green-400">Solution</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 size={15} className="text-blue-400" />
                    <h3 className="text-base font-semibold text-white">Results & Metrics</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 text-center">
                        <div className="text-xl font-bold text-blue-400">{metric.value}</div>
                        <div className="text-xs text-white mt-0.5 font-medium">{metric.label}</div>
                        {metric.note && (
                          <div className="text-xs text-slate-500 mt-1">{metric.note}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* My Contributions */}
              {project.contributions.length > 0 && (
                <div>
                  <h3 className="text-base font-semibold text-white mb-3">My Contributions</h3>
                  <ul className="space-y-2">
                    {project.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <ChevronRight size={14} className="text-blue-400 mt-0.5 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical approach */}
              {project.technicalApproach && (
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">Technical Approach</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.technicalApproach}</p>
                </div>
              )}

              {/* Dataset */}
              {project.dataset && (
                <div className="p-4 rounded-xl bg-white/3 border border-white/8">
                  <h3 className="text-sm font-semibold text-slate-300 mb-1">Dataset</h3>
                  <p className="text-slate-400 text-sm">{project.dataset}</p>
                </div>
              )}

              {/* Technologies */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={15} className="text-violet-400" />
                  <h3 className="text-base font-semibold text-white">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 border border-violet-500/20 text-violet-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {project.galleryImages && project.galleryImages.length > 0 && (
                <div>
                  <h3 className="text-base font-semibold text-white mb-3">Screenshots</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.galleryImages.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-white/8">
                        <img src={img.src} alt={img.caption || `Screenshot ${i + 1}`} className="w-full object-cover" />
                        {img.caption && (
                          <div className="px-3 py-2 text-xs text-slate-500">{img.caption}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h3 className="text-base font-semibold text-white mb-3">Challenges</h3>
                  <ul className="space-y-1.5">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Future plans */}
              {project.futurePlans && project.futurePlans.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={15} className="text-amber-400" />
                    <h3 className="text-base font-semibold text-white">Future Improvements</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {project.futurePlans.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <ChevronRight size={14} className="text-amber-400 mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function getCategoryGradient(category: string): string {
  const map: Record<string, string> = {
    'Computer Vision': 'from-blue-600 to-cyan-600',
    'Natural Language Processing': 'from-violet-600 to-purple-600',
    'Machine Learning': 'from-cyan-600 to-teal-600',
    'Data Science': 'from-orange-600 to-amber-600',
    'Generative AI': 'from-emerald-600 to-green-600',
    'AI Applications': 'from-rose-600 to-pink-600',
  };
  return map[category] || 'from-blue-600 to-violet-600';
}

function getCategoryBadge(category: string): string {
  const map: Record<string, string> = {
    'Computer Vision': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    'Natural Language Processing': 'bg-violet-500/20 text-violet-400 border border-violet-500/30',
    'Machine Learning': 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
    'Data Science': 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
    'Generative AI': 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    'AI Applications': 'bg-rose-500/20 text-rose-400 border border-rose-500/30',
  };
  return map[category] || 'bg-blue-500/20 text-blue-400';
}
