// ============================================================
// education.ts — Education, training, and certificates config
// Add or edit entries in the arrays below
// ============================================================

export interface EducationEntry {
  id: string;
  type: 'degree' | 'diploma' | 'training' | 'certificate';
  title: string;
  institution: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  description?: string;
  highlights?: string[];
  certificateFile?: string; // Path to the certificate PDF/image — leave null if not available
}

export const education: EducationEntry[] = [
  {
    id: 'bsc-it',
    type: 'degree',
    title: 'Bachelor of Information Technology',
    institution: 'Borg Al-Arab Technological University',
    location: 'Alexandria, Egypt',
    startDate: 'September 2022',
    endDate: 'June 2026',
    description: 'Studying Information Technology with a focus on Artificial Intelligence, Machine Learning, and Software Engineering.',
    highlights: [
      'Graduation project: Heritage Preservation AI System (AI-powered robotic system)',
      'Focus areas: AI, Machine Learning, Data Structures, Algorithms, OOP',
    ],
  },
  {
    id: 'amit-diploma',
    type: 'diploma',
    title: 'AI and Data Science Diploma',
    institution: 'AMIT Learning',
    startDate: 'July 2025',
    endDate: 'April 2026',
    description: 'Comprehensive diploma program covering Artificial Intelligence and Data Science methodologies.',
    certificateFile: undefined, // Add path when certificate is available, e.g. '/images/certificates/amit-diploma.pdf'
  },
  {
    id: 'nti-ml',
    type: 'training',
    title: 'Machine Learning Training',
    institution: 'National Telecommunication Institute (NTI)',
    duration: 'Two months',
    description: 'Intensive machine learning training program at NTI.',
    // Note: Exact start/end dates not documented. Update when available.
    certificateFile: undefined,
  },
];

export interface CertificateEntry {
  id: string;
  title: string;
  issuer: string;
  description?: string;
  certificateFile?: string;
  date?: string;
}

export const certificates: CertificateEntry[] = [
  {
    id: 'andalusia-internship',
    title: 'AI Internship',
    issuer: 'Andalusia Hospital',
    description: 'Practical AI internship at Andalusia Hospital exploring AI applications in healthcare.',
    certificateFile: undefined, // Add path when certificate file is available
  },
  {
    id: 'telecom-egypt-networks',
    title: 'Networks Fundamentals',
    issuer: 'Telecom Egypt',
    description: 'Fundamentals of networking and telecommunications.',
    certificateFile: undefined, // Add path when certificate file is available
  },
];
