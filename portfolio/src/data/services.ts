// ============================================================
// services.ts — Offered services configuration
// ============================================================

export interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  clientProblem: string; // Client-facing problem description
  description: string;
  deliverables: string[];
  technologies: string[];
  ctaText: string;
}

export const services: Service[] = [
  {
    id: 'ml-solutions',
    icon: 'Brain',
    title: 'Machine Learning Solutions',
    clientProblem: 'Need to make predictions or discover patterns from your data?',
    description:
      'I develop custom machine learning models tailored to your dataset and business objective — from understanding your data to delivering a well-evaluated model ready for integration.',
    deliverables: [
      'Data preprocessing and cleaning',
      'Feature engineering',
      'Model selection, training, and evaluation',
      'Classification and regression pipelines',
      'Predictive modeling reports',
    ],
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Keras', 'Pandas', 'NumPy'],
    ctaText: 'Discuss a Project',
  },
  {
    id: 'computer-vision',
    icon: 'Eye',
    title: 'Computer Vision Applications',
    clientProblem: 'Want to extract meaning from images, detect objects, or automate visual inspection?',
    description:
      'I build computer vision systems that can detect, classify, and analyze visual content — from custom object detectors using YOLO to image classification pipelines.',
    deliverables: [
      'Object detection and localization',
      'Image classification pipelines',
      'Image preprocessing and augmentation',
      'Custom YOLO-based solutions',
      'Visual analysis and heatmap generation',
    ],
    technologies: ['Python', 'OpenCV', 'YOLO', 'TensorFlow', 'PyTorch', 'Albumentations'],
    ctaText: 'Discuss a Project',
  },
  {
    id: 'nlp',
    icon: 'MessageSquare',
    title: 'NLP & Text Classification',
    clientProblem: 'Have text data you need to categorize, analyze, or extract insights from?',
    description:
      'I design NLP pipelines that turn unstructured text into actionable insights — including text classification, preprocessing, and transformer-based approaches.',
    deliverables: [
      'Text preprocessing and tokenization',
      'Multi-class text classification',
      'Transformer-based modeling',
      'Symptom or document classification',
      'End-to-end NLP pipeline',
    ],
    technologies: ['Python', 'Transformers', 'BiLSTM', 'Scikit-learn', 'NLTK', 'LangChain'],
    ctaText: 'Discuss a Project',
  },
  {
    id: 'data-analysis',
    icon: 'BarChart3',
    title: 'Data Analysis & Visualization',
    clientProblem: "Sitting on data but not sure what it's telling you?",
    description:
      'I analyze your datasets, identify trends and anomalies, and deliver clear visual reports and dashboards so you can make informed decisions.',
    deliverables: [
      'Data cleaning and quality assessment',
      'Exploratory data analysis (EDA)',
      'SQL-based data extraction',
      'Python analytics with Pandas',
      'Interactive Power BI dashboards',
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'SQL', 'MongoDB', 'Power BI'],
    ctaText: 'Discuss a Project',
  },
  {
    id: 'ai-applications',
    icon: 'Cpu',
    title: 'AI-Powered Applications',
    clientProblem: 'Want to integrate AI capabilities into a product or prototype?',
    description:
      'I integrate trained machine learning models into working applications — building APIs, lightweight prototypes, or AI-powered tools your users can actually use.',
    deliverables: [
      'Flask-based REST API wrapping ML models',
      'AI application prototypes',
      'Streamlit or Gradio demo interfaces',
      'Model integration and endpoint testing',
    ],
    technologies: ['Python', 'Flask', 'REST APIs', 'Streamlit', 'Gradio', 'Docker'],
    ctaText: 'Discuss a Project',
  },
  {
    id: 'db-ai-integration',
    icon: 'Database',
    title: 'Database & AI Integration',
    clientProblem: 'Need your AI model connected to a data pipeline or application backend?',
    description:
      'I design and integrate data pipelines connecting databases with AI workflows — ensuring clean data flow from source to model to output.',
    deliverables: [
      'Relational and NoSQL database design',
      'Data pipeline architecture',
      'AI model integration with backend',
      'Firebase and cloud storage setup',
      'Vector database integration for RAG systems',
    ],
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Python', 'Flask'],
    ctaText: 'Discuss a Project',
  },
];
