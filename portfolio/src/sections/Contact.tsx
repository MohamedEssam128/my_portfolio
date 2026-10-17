// src/sections/Contact.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, CheckCheck } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/profile';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: show alert
      window.prompt('Copy this email:', profile.email);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // mailto fallback — opens the user's email client
    // To connect a real form service (e.g. Formspree, EmailJS),
    // replace this block with the appropriate API call.
    const subject = encodeURIComponent(formState.subject || `Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  const isValid = formState.name.trim() && formState.email.trim() && formState.message.trim();

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-transparent via-white/[0.015] to-transparent">
      <div className="container-max">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's Work Together"
          subtitle="Open to AI project collaborations, employment opportunities, and technical discussions."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info — left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-base font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Email</div>
                    <div className="text-sm text-slate-300 break-all">{profile.email}</div>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-1 mt-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {copied ? (
                        <>
                          <CheckCheck size={11} />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={11} />
                          Copy email
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Phone</div>
                    <a
                      href={`tel:+2${profile.phone}`}
                      className="text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Location</div>
                    <div className="text-sm text-slate-300">{profile.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-base font-semibold text-white mb-4">Connect</h3>
              <div className="flex flex-col gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-600/8 border border-blue-500/15 hover:bg-blue-600/15 hover:border-blue-500/25 transition-all group"
                >
                  <Linkedin size={18} className="text-blue-400" />
                  <div>
                    <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-xs text-slate-600">Professional profile</div>
                  </div>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/4 border border-white/8 hover:bg-white/6 hover:border-white/12 transition-all group"
                >
                  <Github size={18} className="text-slate-400" />
                  <div>
                    <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      GitHub
                    </div>
                    <div className="text-xs text-slate-600">Code repositories</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Email direct button */}
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Mail size={15} />
              Send Email Directly
            </a>
          </motion.div>

          {/* Contact form — right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="card-glass rounded-2xl p-6 sm:p-8 border border-white/6">
              <h3 className="text-base font-semibold text-white mb-6">Send a Message</h3>

              {/* Note about form behavior */}
              <div className="mb-6 p-3 rounded-lg bg-blue-500/5 border border-blue-500/10 text-xs text-slate-500">
                This form opens your email client with a pre-filled message. To connect a backend email service 
                (e.g. Formspree or EmailJS), update the <code className="text-blue-400">handleSubmit</code> function in{' '}
                <code className="text-blue-400">src/sections/Contact.tsx</code>.
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/4 border border-white/8 text-slate-300 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/6 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/4 border border-white/8 text-slate-300 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/6 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Project inquiry, collaboration, opportunity…"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/4 border border-white/8 text-slate-300 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/6 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, opportunity, or question…"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/4 border border-white/8 text-slate-300 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/6 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isValid || submitting}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Opening email client…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-center"
                  >
                    <p className="text-sm text-green-400 font-medium">
                      ✓ Your email client should have opened. Looking forward to your message!
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
