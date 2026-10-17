// src/sections/Projects.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Star } from 'lucide-react';
import { Github } from '../components/Icons';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectModal } from '../components/ProjectModal';
import { projects, getProjectCategories, type Project, type ProjectCategory } from '../data/projects';

// Category to color mapping
const categoryStyle: Record<string, { badge: string; gradient: string; fallbackIcon: string }> = {
  'Computer Vision':           { badge: 'bg-blue-500/15 text-blue-400 border-blue-500/25',   gradient: 'from-blue-600/20 to-cyan-600/10',   fallbackIcon: '👁' },
  'Natural Language Processing':{ badge: 'bg-violet-500/15 text-violet-400 border-violet-500/25', gradient: 'from-violet-600/20 to-purple-600/10', fallbackIcon: '💬' },
  'Machine Learning':          { badge: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',   gradient: 'from-cyan-600/20 to-teal-600/10',   fallbackIcon: '🧠' },
  'Data Science':              { badge: 'bg-orange-500/15 text-orange-400 border-orange-500/25', gradient: 'from-orange-600/20 to-amber-600/10', fallbackIcon: '📊' },
  'Generative AI':             { badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25', gradient: 'from-emerald-600/20 to-green-600/10', fallbackIcon: '✨' },
  'AI Applications':           { badge: 'bg-rose-500/15 text-rose-400 border-rose-500/25',   gradient: 'from-rose-600/20 to-pink-600/10',   fallbackIcon: '⚡' },
};

interface ProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
  index: number;
  featured?: boolean;
}

function ProjectCard({ project, onSelect, index, featured }: ProjectCardProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const style = categoryStyle[project.category] || categoryStyle['AI Applications'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`group card-glass rounded-2xl overflow-hidden border border-white/6 hover:border-white/12 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 flex flex-col ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Cover image / placeholder */}
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${style.gradient} flex items-center justify-center`}>
        {project.coverImage && !imgFailed ? (
          <img
            src={project.coverImage}
            alt={project.title}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 opacity-40">
            <div className="text-5xl">{style.fallbackIcon}</div>
            <div className="text-xs text-white/50 font-medium tracking-widest uppercase">
              {project.category}
            </div>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/90 via-transparent to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-medium">
            <Star size={10} fill="currentColor" />
            Featured
          </div>
        )}

        {/* Subtitle in corner */}
        {project.subtitle && (
          <div className="absolute bottom-3 left-4 text-xs text-white/50 font-medium">
            {project.subtitle}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category badge */}
        <span className={`inline-block mb-3 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${style.badge}`}>
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
          {project.shortDescription}
        </p>

        {/* Tech tags — first 4 */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full text-xs bg-white/4 border border-white/8 text-slate-500"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded-full text-xs text-slate-600">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <button
            onClick={() => onSelect(project)}
            className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            View Details
            <ArrowRight size={13} />
          </button>

          <div className="flex items-center gap-2 ml-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = getProjectCategories();

  const filtered = activeFilter === 'All'
    ? [...projects].sort((a, b) => a.order - b.order)
    : projects.filter((p) => p.category === activeFilter).sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="Projects"
          title="Featured Work"
          subtitle="A selection of projects spanning computer vision, NLP, data science, and AI applications."
        />

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {(['All', ...categories] as (ProjectCategory | 'All')[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/5 text-slate-400 hover:bg-white/8 hover:text-white border border-white/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
                index={i}
                featured={project.featured && i === 0}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            No projects in this category yet.
          </div>
        )}
      </div>

      {/* Project detail modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
