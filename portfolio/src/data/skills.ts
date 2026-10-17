// ============================================================
// skills.ts — Skills and technology categories configuration
// ============================================================

export interface Skill {
  name: string;
  level?: 'core' | 'proficient' | 'familiar'; // Optional — shown as badge variant
}

export interface SkillCategory {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  color: string; // Tailwind color class for accent
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    icon: 'Code2',
    title: 'Programming Languages',
    color: 'blue',
    skills: [
      { name: 'Python', level: 'core' },
      { name: 'C++', level: 'proficient' },
      { name: 'Java', level: 'proficient' },
      { name: 'SQL', level: 'core' },
      { name: 'C#', level: 'familiar' },
      { name: 'Dart', level: 'familiar' },
      { name: 'JavaScript', level: 'familiar' },
    ],
  },
  {
    id: 'ai-ml',
    icon: 'Brain',
    title: 'AI & Machine Learning',
    color: 'violet',
    skills: [
      { name: 'Machine Learning', level: 'core' },
      { name: 'Deep Learning', level: 'core' },
      { name: 'Scikit-learn', level: 'core' },
      { name: 'TensorFlow', level: 'proficient' },
      { name: 'Keras', level: 'proficient' },
      { name: 'PyTorch', level: 'proficient' },
      { name: 'Model Evaluation', level: 'core' },
    ],
  },
  {
    id: 'computer-vision',
    icon: 'Eye',
    title: 'Computer Vision',
    color: 'cyan',
    skills: [
      { name: 'OpenCV', level: 'core' },
      { name: 'YOLO', level: 'core' },
      { name: 'Image Processing', level: 'core' },
      { name: 'Object Detection', level: 'core' },
      { name: 'Image Classification', level: 'core' },
      { name: 'Albumentations', level: 'proficient' },
    ],
  },
  {
    id: 'nlp',
    icon: 'MessageSquare',
    title: 'Natural Language Processing',
    color: 'emerald',
    skills: [
      { name: 'NLP', level: 'core' },
      { name: 'Transformers', level: 'proficient' },
      { name: 'BiLSTM', level: 'proficient' },
      { name: 'Text Classification', level: 'core' },
      { name: 'LangChain', level: 'familiar' },
    ],
  },
  {
    id: 'data-science',
    icon: 'BarChart3',
    title: 'Data Science & Visualization',
    color: 'orange',
    skills: [
      { name: 'Pandas', level: 'core' },
      { name: 'NumPy', level: 'core' },
      { name: 'Matplotlib', level: 'core' },
      { name: 'SciPy', level: 'proficient' },
      { name: 'Power BI', level: 'proficient' },
      { name: 'Exploratory Data Analysis', level: 'core' },
      { name: 'Predictive Modeling', level: 'core' },
    ],
  },
  {
    id: 'databases',
    icon: 'Database',
    title: 'Databases',
    color: 'rose',
    skills: [
      { name: 'MySQL', level: 'core' },
      { name: 'PostgreSQL', level: 'proficient' },
      { name: 'MongoDB', level: 'proficient' },
      { name: 'Firebase', level: 'familiar' },
    ],
  },
  {
    id: 'backend-deployment',
    icon: 'Server',
    title: 'Backend & Deployment',
    color: 'amber',
    skills: [
      { name: 'Flask', level: 'proficient' },
      { name: 'REST APIs', level: 'proficient' },
      { name: 'Docker', level: 'familiar' },
      { name: 'AWS', level: 'familiar' },
    ],
  },
  {
    id: 'dev-tools',
    icon: 'Wrench',
    title: 'Developer Tools',
    color: 'slate',
    skills: [
      { name: 'Git', level: 'core' },
      { name: 'GitHub', level: 'core' },
      { name: 'Linux', level: 'proficient' },
      { name: 'Jupyter Notebook', level: 'core' },
      { name: 'VS Code', level: 'core' },
    ],
  },
];
