// ============================================================
// profile.ts — Central personal information configuration
// Edit this file to update contact info, social links, bio
// ============================================================

export const profile = {
  name: 'Mohamed Essam',
  title: 'AI & Machine Learning Engineer',
  tagline: 'I build intelligent systems that transform data into meaningful solutions.',
  bio: `I'm an AI and Machine Learning Engineer passionate about building end-to-end intelligent systems. 
My work spans the full ML pipeline — from data preparation and feature engineering to model development, 
evaluation, and practical deployment. I specialize in Deep Learning, Computer Vision, and NLP, and enjoy 
turning complex data into solutions that make a real difference.`,
  location: 'Alexandria, Egypt',
  email: 'mohamedessammbuisness@gmail.com',
  phone: '01204668873',
  linkedin: 'https://linkedin.com/in/mohamed-alattar-2824-',
  github: 'https://github.com/MohamedEssam128',
  profilePhoto: '/images/profile/mo.jpg',
  cvFile: '/Mohamed_Essam_Resume.pdf',
  focusAreas: [
    {
      icon: 'Brain',
      title: 'Machine Learning',
      description: 'End-to-end ML pipelines — from raw data to trained, evaluated models.',
    },
    {
      icon: 'Eye',
      title: 'Computer Vision',
      description: 'Object detection, image classification, and visual AI with YOLO and OpenCV.',
    },
    {
      icon: 'MessageSquare',
      title: 'Natural Language Processing',
      description: 'Text classification, transformers, and deep learning for language understanding.',
    },
    {
      icon: 'BarChart3',
      title: 'Data Science',
      description: 'Exploratory analysis, visualization, and predictive modeling with Python.',
    },
  ],
} as const;
