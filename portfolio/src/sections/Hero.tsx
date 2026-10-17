// src/sections/Hero.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Download, ArrowRight, ChevronDown } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { profile } from '../data/profile';

// Animated neural network dot grid
function NeuralNetworkBg() {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    cx: 10 + (i % 4) * 27,
    cy: 15 + Math.floor(i / 4) * 35,
  }));

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-15 hidden lg:block pointer-events-none">
      <svg viewBox="0 0 120 110" className="w-full h-full">
        {/* Connections */}
        {nodes.slice(0, 8).map((node) =>
          nodes.slice(4).map((target) => (
            <line
              key={`${node.id}-${target.id}`}
              x1={node.cx} y1={node.cy}
              x2={target.cx} y2={target.cy}
              stroke="#3b82f6" strokeWidth="0.4" opacity="0.4"
            />
          ))
        )}
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={node.id}
            cx={node.cx}
            cy={node.cy}
            r="2.5"
            fill="#3b82f6"
            animate={{ opacity: [0.4, 1, 0.4], r: [2, 3, 2] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  const [photoError, setPhotoError] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-sm text-slate-400 mb-6"
            >
              <MapPin size={14} className="text-blue-400" />
              <span>{profile.location}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 ml-1 animate-pulse" />
              <span className="text-green-400 text-xs">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3"
            >
              {profile.name}
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold text-gradient mb-6"
            >
              {profile.title}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed mb-4 max-w-xl"
            >
              {profile.tagline}
            </motion.p>

            {/* Supporting line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-slate-500 text-sm leading-relaxed mb-10 max-w-xl"
            >
              Specializing in{' '}
              <span className="text-blue-400">Machine Learning</span>,{' '}
              <span className="text-violet-400">Deep Learning</span>,{' '}
              <span className="text-cyan-400">Computer Vision</span>,{' '}
              <span className="text-emerald-400">NLP</span>, and{' '}
              <span className="text-amber-400">Data Science</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Explore My Projects
                <ArrowRight size={15} />
              </button>
              <a
                href={profile.cvFile}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={15} />
                Download CV
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-4"
            >
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </motion.div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center lg:justify-end relative">
            <NeuralNetworkBg />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-lg" />
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-500/40 to-violet-500/30" />

              {/* Photo */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-white/10 bg-[#0a0f1e]">
                {!photoError ? (
                  <img
                    src={profile.profilePhoto}
                    alt={`${profile.name} — ${profile.title}`}
                    className="w-full h-full object-cover object-top"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-violet-900/50 text-white text-4xl font-bold">
                    ME
                  </div>
                )}
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-4 px-3 py-1.5 rounded-xl bg-[#0a0f1e] border border-blue-500/30 shadow-xl"
              >
                <div className="text-xs font-semibold text-blue-400">AI Engineer</div>
                <div className="text-xs text-slate-500">Alexandria, EG</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
