// ============================================================
// testimonials.ts — Testimonials and recommendations config
//
// HOW TO ADD A TESTIMONIAL:
// 1. Copy the template object below
// 2. Fill in the reviewer's real details
// 3. Add their photo to: public/images/testimonials/
// 4. Set linkedinUrl if sourced from LinkedIn
//
// IMPORTANT: Only add verified testimonials from real people.
// Do not fabricate reviews or attribute statements to anyone.
// ============================================================

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  photo?: string; // Path to reviewer's photo — only use with permission
  text: string;
  linkedinUrl?: string;
  date?: string;
}

// Currently empty — add real testimonials as you receive them
export const testimonials: Testimonial[] = [
  // Template — uncomment and fill in with real data:
  // {
  //   id: 'reviewer-1',
  //   name: 'Full Name',
  //   role: 'Job Title',
  //   company: 'Company or Organization',
  //   photo: '/images/testimonials/reviewer-1.jpg', // Optional — with consent
  //   text: 'Their recommendation text here...',
  //   linkedinUrl: 'https://linkedin.com/in/their-profile',
  //   date: 'Month Year',
  // },
];
