// ============================================================
// projects.ts — Portfolio projects configuration
//
// HOW TO ADD A PROJECT:
// 1. Copy an existing project object as a template
// 2. Fill in the fields (optional fields can be undefined)
// 3. Set coverImage to the path under /images/projects/[slug]/
// 4. Add gallery images to the galleryImages array
// 5. Set featured: true to show in the hero section
//
// HOW TO ADD SCREENSHOTS:
// Place images in: public/images/projects/[project-slug]/
// Reference them as: /images/projects/[project-slug]/filename.png
// ============================================================

export type ProjectCategory =
  | 'Computer Vision'
  | 'Natural Language Processing'
  | 'Machine Learning'
  | 'Data Science'
  | 'Generative AI'
  | 'AI Applications';

export type ProjectStatus = 'completed' | 'in-progress' | 'draft';

export interface ProjectMetric {
  label: string;
  value: string;
  note?: string; // e.g. "validation set result"
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  tags: string[]; // Additional filter tags
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  contributions: string[];
  technicalApproach?: string;
  dataset?: string;
  technologies: string[];
  features: string[];
  results: string[];
  metrics?: ProjectMetric[];
  challenges?: string[];
  futurePlans?: string[];
  coverImage?: string; // Path under /images/projects/[slug]/
  galleryImages?: { src: string; caption?: string }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  status: ProjectStatus;
  order: number; // Display order in gallery (lower = first)
}

export const projects: Project[] = [
  // ─────────────────────────────────────────────────────────
  // PROJECT 1 — Heritage Preservation AI System (Graduation)
  // ─────────────────────────────────────────────────────────
  {
    id: 'heritage-preservation',
    slug: 'heritage-preservation',
    title: 'Heritage Preservation AI System',
    subtitle: 'Graduation Project',
    category: 'Computer Vision',
    tags: ['Computer Vision', 'Robotics', 'Deep Learning', 'YOLO', '3D Reconstruction'],
    shortDescription:
      'AI-powered robotic system for automated digitization, classification, and damage analysis of archaeological statues.',
    overview:
      'A comprehensive AI and robotics platform designed to automate the digital preservation of archaeological heritage. The system combines a Raspberry Pi / Arduino robotic rig, computer vision pipelines, and a full-stack heritage management application to capture, reconstruct, classify, and inspect cultural artifacts at scale.',
    problem:
      'Manual documentation of archaeological statues is labor-intensive, inconsistent, and often unable to detect fine structural damage early. Heritage sites need scalable, accurate, and automated solutions that can digitize artifacts, monitor their condition, and make the data accessible to researchers.',
    solution:
      'An integrated robotic system performs automated statue scanning and image acquisition. Computer vision models handle detection, classification, and damage analysis. High-fidelity 3D models are generated from multi-view images. All data is managed through a Flutter application backed by MySQL and Firebase.',
    contributions: [
      'Designed the robotic platform architecture integrating Raspberry Pi and Arduino',
      'Implemented YOLO-based statue detection for automated image acquisition (>95% detection accuracy)',
      'Developed 3D reconstruction pipeline from ~50 images per statue using photogrammetry',
      'Trained classification model achieving 94% accuracy on statue type identification',
      'Built damage detection model with 91% mAP@50 and 88% F1-score',
      'Implemented heatmap visualization to highlight structural cracks and damaged regions',
      'Designed and integrated MySQL + Firebase backend for heritage data management',
      'Built Flutter mobile application for data retrieval and hologram fan visualization',
    ],
    technicalApproach:
      'The robotic rig captures a circular sequence of ~50 images per statue. YOLO handles real-time detection and triggers image acquisition. A photogrammetry pipeline generates textured 3D meshes. Classification and damage detection models run on the processed data. Results and heatmaps are stored in MySQL and Firebase and visualized through the Flutter app.',
    technologies: [
      'Python', 'YOLO', 'OpenCV', 'TensorFlow', 'Keras', 'Raspberry Pi', 'Arduino',
      'MySQL', 'Firebase', 'Flutter', 'Albumentations', 'Matplotlib',
    ],
    features: [
      'Automated statue detection and image acquisition',
      'Multi-view 3D reconstruction (~50 images per statue)',
      'Statue type classification',
      'Structural damage detection with heatmap visualization',
      'Full-stack heritage data management (MySQL + Firebase)',
      'Flutter mobile app with hologram fan visualization',
    ],
    results: [
      'Achieved >95% detection accuracy for automated statue detection',
      '94% classification accuracy for statue type identification',
      '91% mAP@50 for structural damage detection',
      '88% F1-score on damage detection validation set',
      'Accurate geometric 3D reconstruction for digital preservation',
    ],
    metrics: [
      { label: 'Detection Accuracy', value: '>95%', note: 'Statue detection on test set' },
      { label: 'Classification Accuracy', value: '94%', note: 'Statue type classification' },
      { label: 'Damage Detection mAP@50', value: '91%', note: 'YOLO damage detection' },
      { label: 'Damage Detection F1', value: '88%', note: 'Validation set' },
    ],
    challenges: [
      'Handling varying lighting conditions in capture environments',
      'Coordinating real-time communication between Raspberry Pi and Arduino',
      'Achieving consistent 3D reconstruction quality across different statue geometries',
    ],
    futurePlans: [
      'Deploy system in active archaeological field sites',
      'Enhance 3D reconstruction quality with neural radiance fields (NeRF)',
      'Add temporal damage tracking to monitor deterioration over time',
    ],
    // ── IMAGE SETUP ──────────────────────────────────────────
    // Place your screenshots in: public/images/projects/heritage-preservation/
    // Example files you can add:
    //   heritage-cover.png          — Main project cover image
    //   heritage-robot.jpg          — Robot hardware photo
    //   heritage-detection.png      — YOLO detection result
    //   heritage-3d-model.png       — 3D reconstruction output
    //   heritage-damage-heatmap.png — Damage detection heatmap
    //   heritage-dashboard.png      — Flutter app or dashboard screenshot
    coverImage: '/images/projects/heritage-preservation/heritage-cover.svg',
    galleryImages: [
      // { src: '/images/projects/heritage-preservation/heritage-robot.jpg', caption: 'Robotic scanning platform' },
      // { src: '/images/projects/heritage-preservation/heritage-detection.png', caption: 'YOLO statue detection' },
      // { src: '/images/projects/heritage-preservation/heritage-3d-model.png', caption: '3D reconstruction output' },
      // { src: '/images/projects/heritage-preservation/heritage-damage-heatmap.png', caption: 'Damage heatmap visualization' },
      // { src: '/images/projects/heritage-preservation/heritage-dashboard.png', caption: 'Heritage management app' },
    ],
    githubUrl: undefined, // Add your GitHub repo URL here
    liveDemoUrl: undefined,
    featured: true,
    status: 'completed',
    order: 1,
  },

  // ─────────────────────────────────────────────────────────
  // PROJECT 2 — Medical Diagnosis NLP System
  // ─────────────────────────────────────────────────────────
  {
    id: 'medical-diagnosis-nlp',
    slug: 'medical-diagnosis-nlp',
    title: 'Medical Diagnosis NLP System',
    subtitle: 'NHS Data · Transformers · BiLSTM',
    category: 'Natural Language Processing',
    tags: ['NLP', 'BiLSTM', 'Transformers', 'Text Classification', 'Healthcare'],
    shortDescription:
      'Deep learning NLP system for classifying medical conditions from symptoms and causes using NHS data with transformer-based augmentation.',
    overview:
      'A deep learning NLP pipeline that classifies medical conditions based on patient symptoms and cause descriptions. Built on structured data from the NHS illness and conditions database, the system uses transformer-based augmentation to expand the dataset and a BiLSTM architecture for robust multi-class disease classification.',
    problem:
      'Medical condition classification from symptom descriptions is a challenging NLP task due to limited labeled data, class imbalance, and the complexity of clinical language. Developing robust models requires both high-quality data and architectures that capture sequential symptom patterns.',
    solution:
      'Structured NHS data was cleaned, tokenized, and augmented using transformer-based techniques to increase dataset diversity by 35%. A BiLSTM model was trained for multi-class classification of medical conditions from symptom and cause text, achieving strong validation performance.',
    contributions: [
      'Collected and preprocessed structured medical data from the NHS illness and conditions database',
      'Applied transformer-based data augmentation to increase dataset diversity by 35%',
      'Built end-to-end NLP pipeline: preprocessing, tokenization, feature extraction, classification',
      'Designed and trained BiLSTM model for multi-class medical condition classification',
      'Evaluated model with accuracy, F1-score, and precision on the validation set',
    ],
    technicalApproach:
      'Text data was preprocessed with tokenization, stop word removal, and normalization. Transformer models were used for paraphrase augmentation. A BiLSTM network with embedding layers was trained for sequence classification. Validation results reflect reported performance on the held-out validation set — not clinically validated diagnostic performance.',
    dataset:
      'NHS illness and conditions database — structured medical data including disease names, symptoms, and causes. Note: this is a reported benchmark dataset, not a clinical trial dataset.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Transformers', 'BiLSTM', 'NLTK', 'Pandas', 'NumPy', 'Scikit-learn'],
    features: [
      'End-to-end NLP pipeline from raw text to classification',
      'Transformer-based data augmentation (+35% dataset diversity)',
      'BiLSTM multi-class medical condition classification',
      'Preprocessing: tokenization, normalization, feature extraction',
      'Multi-class disease classification from symptoms and causes',
    ],
    results: [
      '93% accuracy on validation set',
      '91% F1-score on validation set',
      '92% precision on validation set',
      '35% dataset diversity increase through augmentation',
    ],
    metrics: [
      { label: 'Validation Accuracy', value: '93%', note: 'Reported validation set result' },
      { label: 'F1-Score', value: '91%', note: 'Validation set' },
      { label: 'Precision', value: '92%', note: 'Validation set' },
      { label: 'Dataset Augmentation', value: '+35%', note: 'Diversity increase via transformers' },
    ],
    challenges: [
      'Handling class imbalance across medical conditions',
      'Managing clinical terminology in tokenization',
      'Balancing augmentation quality with dataset integrity',
    ],
    futurePlans: [
      'Evaluate with clinical domain experts',
      'Experiment with fine-tuned medical BERT models (BioBERT, ClinicalBERT)',
      'Extend to multi-label classification for comorbid conditions',
    ],
    // ── IMAGE SETUP ──────────────────────────────────────────
    // public/images/projects/medical-diagnosis/
    //   medical-cover.png        — Cover image
    //   medical-results.png      — Confusion matrix or accuracy curves
    //   medical-pipeline.png     — NLP pipeline diagram
    coverImage: '/images/projects/medical-diagnosis/medical-cover.svg',
    galleryImages: [],
    githubUrl: undefined,
    liveDemoUrl: undefined,
    featured: true,
    status: 'completed',
    order: 2,
  },

  // ─────────────────────────────────────────────────────────
  // PROJECT 3 — Retail Data Analysis & Sales Forecasting
  // ─────────────────────────────────────────────────────────
  {
    id: 'retail-analytics',
    slug: 'retail-analytics',
    title: 'Retail Data Analysis & Sales Forecasting',
    subtitle: 'SQL · MongoDB · Python · Power BI',
    category: 'Data Science',
    tags: ['Data Science', 'SQL', 'MongoDB', 'Power BI', 'Forecasting'],
    shortDescription:
      'End-to-end retail analytics system combining SQL and MongoDB databases, Python analysis, Power BI dashboards, and machine learning sales forecasting.',
    overview:
      'A complete retail data analytics solution that designs the data infrastructure, extracts and processes data, performs in-depth analysis, and delivers interactive dashboards alongside machine learning-based sales forecasting.',
    problem:
      'Retail businesses accumulate large volumes of transaction, customer, and product data but often lack the analytical infrastructure to turn it into actionable insights. Manual reporting is slow and does not scale to complex multi-dimensional queries.',
    solution:
      'A relational SQL database was designed for structured retail data storage. MongoDB was added for flexible semi-structured data retrieval. Python with Pandas and Matplotlib handles data extraction and analysis. Power BI delivers interactive dashboards, and Scikit-learn Linear Regression provides sales trend forecasting.',
    contributions: [
      'Designed and implemented relational SQL database schema for retail data',
      'Integrated MongoDB for fast, flexible querying of semi-structured data',
      'Built Python pipeline to extract, process, and analyze data from MongoDB using Pandas',
      'Performed customer behavior, product performance, and sales trend analysis',
      'Created interactive Power BI dashboards for business stakeholders',
      'Trained Linear Regression model for sales trend forecasting using Scikit-learn',
    ],
    dataset:
      'Retail dataset including customer records, product catalog, and transaction history. Schema designed as part of the project.',
    technologies: ['Python', 'SQL', 'MySQL', 'MongoDB', 'Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Scikit-learn'],
    features: [
      'Relational SQL database design for retail data',
      'MongoDB integration for semi-structured data',
      'Python-based data extraction and processing pipeline',
      'Customer, product, and transaction analysis',
      'Interactive Power BI dashboards',
      'Linear Regression sales forecasting model',
    ],
    results: [
      'End-to-end analytics pipeline from raw data to business insights',
      'Interactive Power BI dashboards for sales, customers, and products',
      'Sales trend forecasting using Linear Regression',
    ],
    challenges: [
      'Designing a schema flexible enough to capture diverse retail data',
      'Synchronizing data between SQL and MongoDB stores',
      'Creating intuitive dashboard layouts for non-technical stakeholders',
    ],
    futurePlans: [
      'Replace Linear Regression with time-series models (ARIMA, Prophet)',
      'Add real-time data ingestion pipeline',
      'Extend dashboards with customer segmentation visualizations',
    ],
    coverImage: '/images/projects/retail-analytics/retail-cover.svg',
    galleryImages: [],
    githubUrl: undefined,
    liveDemoUrl: undefined,
    featured: true,
    status: 'completed',
    order: 3,
  },

  // ─────────────────────────────────────────────────────────
  // PROJECT 4 — AI Resume-to-Job Matching System
  // ─────────────────────────────────────────────────────────
  {
    id: 'resume-job-matching',
    slug: 'resume-job-matching',
    title: 'AI Resume-to-Job Matching System',
    subtitle: 'NLP · Candidate-Job Relevance Analysis',
    category: 'AI Applications',
    tags: ['NLP', 'Resume Parsing', 'Job Matching', 'Python', 'Scikit-learn'],
    shortDescription:
      'NLP-based system that extracts information from CVs, analyzes candidate profiles, and evaluates job listing relevance.',
    overview:
      'An AI-powered application that automates the comparison between candidate profiles extracted from resumes and job listings — helping identify the best-fit opportunities based on skills, experience, and requirements.',
    problem:
      'Manually matching candidates to job listings is time-consuming and prone to oversight. A systematic NLP approach can extract key signals from CVs and job descriptions and compute relevance scores to prioritize matches.',
    solution:
      'The system parses CVs to extract skills, experience, and qualifications, then compares these against job listing requirements using NLP techniques and similarity scoring to rank job relevance for each candidate.',
    contributions: [
      'Developed CV information extraction pipeline using NLP techniques',
      'Implemented candidate profile analysis and representation',
      'Built job listing retrieval and preprocessing module',
      'Applied similarity and relevance scoring to rank job matches',
    ],
    // Note: Technology list reflects confirmed information from the project description.
    // Update this list after inspecting actual notebook/source files.
    technologies: ['Python', 'NLP', 'Scikit-learn', 'Pandas', 'NLTK'],
    features: [
      'CV parsing and information extraction',
      'Candidate profile analysis',
      'Job listing retrieval and preprocessing',
      'NLP-based relevance scoring',
      'Ranked job matching results',
    ],
    results: [
      'Automated CV-to-job matching pipeline',
      'NLP-based relevance ranking of job listings',
    ],
    challenges: [
      'Handling diverse CV formats and structures',
      'Defining a robust relevance scoring methodology',
    ],
    futurePlans: [
      'Integrate transformer-based embeddings for semantic matching',
      'Add a Streamlit UI for interactive CV upload and job search',
      'Expand with real-time job listing API integration',
    ],
    coverImage: '/images/projects/resume-job-matching/resume-matching-cover.svg',
    galleryImages: [],
    githubUrl: undefined,
    liveDemoUrl: undefined,
    featured: false,
    status: 'completed',
    order: 4,
  },

  // ─────────────────────────────────────────────────────────
  // PROJECT 5 — RAG-Based Knowledge Assistant
  // ─────────────────────────────────────────────────────────
  {
    id: 'rag-assistant',
    slug: 'rag-assistant',
    title: 'RAG-Based Knowledge Assistant',
    subtitle: 'Retrieval-Augmented Generation · Gemini · Gradio',
    category: 'Generative AI',
    tags: ['RAG', 'LLM', 'Vector Database', 'Generative AI', 'Gemini', 'Gradio'],
    shortDescription:
      'AI chatbot that retrieves information from a document collection and generates grounded answers using retrieval-augmented generation.',
    overview:
      'A retrieval-augmented generation (RAG) system that allows users to ask questions about a document collection. The system encodes documents into vector embeddings stored in PostgreSQL, retrieves relevant context, and uses the Gemini model to generate accurate, grounded answers — reducing hallucination and improving factual reliability.',
    problem:
      'General-purpose large language models often hallucinate or provide outdated information when queried about specific document collections or domain knowledge bases. A RAG architecture grounds responses in retrieved content, improving accuracy and trustworthiness.',
    solution:
      'Documents are chunked and embedded using BAAI/bge-m3. Embeddings are stored in a PostgreSQL vector database. At query time, the most relevant chunks are retrieved and passed as context to the Gemini model, which generates a factually grounded response. The user interface is built with Gradio.',
    contributions: [
      'Designed the RAG pipeline from document ingestion to answer generation',
      'Implemented document chunking and embedding using BAAI/bge-m3',
      'Set up PostgreSQL vector database for embedding storage and retrieval',
      'Integrated Gemini as the answer generation model',
      'Built Gradio interface for interactive document Q&A',
    ],
    technicalApproach:
      'Documents → chunking → BAAI/bge-m3 embeddings → PostgreSQL vector store → semantic retrieval → Gemini context-grounded generation → Gradio UI.',
    technologies: ['Python', 'PostgreSQL', 'BAAI/bge-m3', 'Gemini', 'Gradio', 'LangChain', 'Vector Embeddings'],
    features: [
      'Document ingestion and chunking pipeline',
      'BAAI/bge-m3 vector embeddings',
      'PostgreSQL vector database storage',
      'Semantic retrieval of relevant document chunks',
      'Gemini-powered grounded answer generation',
      'Gradio conversational interface',
    ],
    results: [
      'Grounded, context-aware answers from document collections',
      'Reduced hallucination compared to direct LLM querying',
      'Interactive Q&A interface with Gradio',
    ],
    challenges: [
      'Optimizing chunk size for retrieval precision vs. context completeness',
      'Managing embedding storage and retrieval performance in PostgreSQL',
    ],
    futurePlans: [
      'Add document upload functionality through the Gradio UI',
      'Experiment with hybrid sparse+dense retrieval',
      'Support multiple document collections with namespace isolation',
    ],
    coverImage: '/images/projects/rag-assistant/rag-assistant-cover.svg',
    galleryImages: [],
    githubUrl: undefined,
    liveDemoUrl: undefined,
    featured: false,
    status: 'completed',
    order: 5,
  },

  // ─────────────────────────────────────────────────────────
  // PROJECT 6 — AI Career Navigator
  // ─────────────────────────────────────────────────────────
  {
    id: 'ai-career-navigator',
    slug: 'ai-career-navigator',
    title: 'AI Career Navigator',
    subtitle: 'Career Guidance · AI-Powered',
    category: 'AI Applications',
    tags: ['AI Applications', 'Career Guidance', 'Python', 'NLP'],
    shortDescription:
      'AI-powered career navigation tool that helps users explore career paths and opportunities aligned with their skills and goals.',
    overview:
      'An intelligent career guidance application that helps users understand career paths in technology and AI, identify skill gaps, and get personalized recommendations based on their background and goals.',
    problem:
      'Career navigation in rapidly evolving fields like AI and technology can be overwhelming. Professionals need tools that translate their current skills into clear progression paths.',
    solution:
      'An AI-powered application that takes a user\'s current skills and career goals as input and provides structured guidance, learning recommendations, and relevant career path information.',
    contributions: [
      'Designed the career guidance logic and recommendation flow',
      'Implemented AI-powered analysis of user skill profiles',
      'Built the application interface and user experience',
    ],
    technologies: ['Python', 'NLP', 'AI'],
    // Note: Exact technology stack to be verified from source code.
    // Update technologies list after reviewing repository files.
    features: [
      'Skill-based career path exploration',
      'Personalized career recommendations',
      'AI-powered guidance engine',
    ],
    results: [
      'Working career guidance prototype',
    ],
    challenges: [
      'Modeling diverse career trajectories accurately',
    ],
    futurePlans: [
      'Integrate with real job market data APIs',
      'Add learning resource recommendations',
    ],
    // ── NOTE ──────────────────────────────────────────────────
    // This entry contains placeholder information.
    // To update: inspect the actual repository and replace
    // technologies, features, and results with verified details.
    coverImage: '/images/projects/ai-career-navigator/career-navigator-cover.svg',
    galleryImages: [],
    githubUrl: undefined,
    liveDemoUrl: undefined,
    featured: false,
    status: 'completed',
    order: 6,
  },

  // ─────────────────────────────────────────────────────────
  // PROJECT 7 — Algorithmic Puzzle Solvers
  // ─────────────────────────────────────────────────────────
  {
    id: 'puzzle-solver',
    slug: 'puzzle-solver',
    title: 'Algorithmic Puzzle Solvers',
    subtitle: 'Tic-Tac-Toe · Sudoku · AI Search',
    category: 'AI Applications',
    tags: ['Algorithms', 'AI', 'Search', 'Game AI', 'Problem Solving'],
    shortDescription:
      'AI-powered puzzle solvers implementing game-tree search and constraint satisfaction algorithms for Tic-Tac-Toe and Sudoku.',
    overview:
      'A collection of algorithmic AI projects implementing classic AI problem-solving techniques — minimax game-tree search for an unbeatable Tic-Tac-Toe AI, and backtracking constraint satisfaction for a Sudoku solver.',
    problem:
      'Classic AI search problems serve as foundational exercises in artificial intelligence. Implementing them from scratch requires deep understanding of search strategies, game theory, and constraint satisfaction.',
    solution:
      'Tic-Tac-Toe uses the Minimax algorithm (with optional alpha-beta pruning) for optimal play. The Sudoku solver applies backtracking search with constraint propagation to solve puzzles of varying difficulty.',
    contributions: [
      'Implemented Minimax algorithm for unbeatable Tic-Tac-Toe AI',
      'Developed Sudoku solver using backtracking with constraint propagation',
      'Designed game state representation and move generation',
    ],
    technologies: ['Python', 'Algorithms', 'Minimax', 'Backtracking', 'Constraint Satisfaction'],
    features: [
      'Minimax-based Tic-Tac-Toe AI (unbeatable)',
      'Sudoku solver with backtracking search',
      'Constraint propagation for Sudoku optimization',
      'Clear algorithmic implementation for educational use',
    ],
    results: [
      'Unbeatable Tic-Tac-Toe AI using Minimax',
      'Sudoku solver capable of handling standard and hard puzzles',
    ],
    challenges: [
      'Optimizing Minimax performance with alpha-beta pruning',
      'Efficient constraint propagation in Sudoku',
    ],
    futurePlans: [
      'Add a web-based UI for interactive play',
      'Extend to more complex games (Connect Four, Chess)',
      'Visualize the search tree exploration',
    ],
    coverImage: '/images/projects/puzzle-solver/puzzle-solver-cover.svg',
    galleryImages: [],
    githubUrl: undefined,
    liveDemoUrl: undefined,
    featured: false,
    status: 'completed',
    order: 7,
  },
];

// ─────────────────────────────────────────────────────────
// Helper: get featured projects
// ─────────────────────────────────────────────────────────
export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);

// ─────────────────────────────────────────────────────────
// Helper: get all project categories for filtering
// ─────────────────────────────────────────────────────────
export const getProjectCategories = (): ProjectCategory[] => {
  const cats = projects.map((p) => p.category);
  return ['Computer Vision', 'Natural Language Processing', 'Machine Learning', 'Data Science', 'Generative AI', 'AI Applications'].filter(
    (c) => cats.includes(c as ProjectCategory)
  ) as ProjectCategory[];
};
