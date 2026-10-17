// src/components/BackToTop.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollY } from '../hooks/useScrollY';

export function BackToTop() {
  const scrollY = useScrollY();
  const show = scrollY > 400;

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-6 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/20 transition-all duration-200 hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
