// src/sections/Footer.tsx
import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { profile } from '../data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#020817]">
      {/* Thank you section */}
      <div className="section-padding pb-16 text-center">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative element */}
            <div className="flex justify-center mb-6">
              <div className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Thank you for exploring my portfolio.
            </h2>
            <p className="text-slate-400 text-base italic mb-2">
              "Every meaningful solution starts with a problem worth solving."
            </p>
            <p className="text-slate-500 text-sm mb-10">
              Interested in collaborating, discussing an opportunity, or just connecting?
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
              >
                Get in Touch
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 font-semibold text-sm transition-all"
              >
                Explore Projects
              </button>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4 mb-12">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-blue-600/8 border border-blue-500/15 text-blue-400 hover:bg-blue-600/15 hover:border-blue-500/25 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/4 border border-white/8 text-slate-400 hover:bg-white/6 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-3 rounded-xl bg-white/4 border border-white/8 text-slate-400 hover:bg-white/6 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/5 py-5 text-center">
        <p className="text-xs text-slate-600">
          © {year} <span className="text-slate-500">{profile.name}</span> · {profile.title}
          <span className="mx-2">·</span>
          Built with <Heart size={10} className="inline text-red-400/60 mx-0.5" /> using React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
