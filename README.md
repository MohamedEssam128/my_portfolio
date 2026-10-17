# Mohamed Essam — AI & Machine Learning Engineer Portfolio

A premium, production-ready personal portfolio website built for **Mohamed Essam**, specializing in Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, NLP, and Data Science.

---

## 🌟 Overview & What Was Implemented

The portfolio is built from the ground up using **React**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. It strictly follows the 10 required sections in order, adhering to verified information extracted from Mohamed's CV:

1. **Cover / Hero Section**
   - High-impact dark theme (`#020817`) with technical accents (electric blue, violet, cyan).
   - Real profile photo integration (`mo.jpg`) with graceful fallback.
   - Animated SVG neural network background representation.
   - Direct CTA buttons: "Explore My Projects", "Download CV", and "Contact Me".
   - Verified location label: Alexandria, Egypt (with live "Available for opportunities" indicator).
   - Direct links to LinkedIn (`https://linkedin.com/in/mohamed-alattar-2824-`) and GitHub (`https://github.com/MohamedEssam128`).

2. **About Me**
   - Professional narrative highlighting problem-first engineering, full ML pipelines, and model evaluation.
   - Metric callout highlights (7+ Projects Built, 3+ AI Domains, 2026 Graduation Year).
   - 4 focus area cards: Machine Learning, Computer Vision, NLP, and Data Science.

3. **Education & Professional Training**
   - Academic timeline: Bachelor of Information Technology (Borg Al-Arab Technological University, 09/2022 – 06/2026).
   - Professional diploma: AI & Data Science Diploma (AMIT Learning, 07/2025 – 04/2026).
   - Specialized training: Machine Learning Training (NTI, 2 months).
   - Certificates section: Andalusia Hospital Internship (AI) and Networks Fundamentals (Telecom Egypt) with downloadable slot placeholders.

4. **Skills & Tools**
   - Categorized into 8 distinct technical cards: Programming Languages, AI & ML, Computer Vision, NLP, Data Science & Visualization, Databases, Backend & Deployment, and Developer Tools.
   - Core Computer Science foundation banner (Data Structures, Algorithms, OOP, Problem Solving).
   - No arbitrary percentages — only verified skills from CV and projects.

5. **Offered Services**
   - Client-focused cards designed for freelance clients and recruiters:
     - Machine Learning Solutions
     - Computer Vision Applications
     - NLP & Text Classification
     - Data Analysis & Visualization
     - AI-Powered Applications
     - Database & AI Integration
   - Includes real problem descriptions, deliverables, technologies, and pre-filled email contact links.

6. **Featured Projects (7 Projects)**
   - **Heritage Preservation AI System (Graduation Project)**: YOLO statue detection (>95% acc), ~50-image photogrammetry 3D reconstruction, 94% classification, damage detection (91% mAP@50, 88% F1), Flutter app, MySQL & Firebase.
   - **Medical Diagnosis NLP System**: NHS dataset, transformer data augmentation (+35% diversity), BiLSTM classification (93% val acc, 91% F1, 92% precision).
   - **Retail Data Analysis & Sales Forecasting**: SQL relational schema, MongoDB semi-structured queries, Python Pandas/Matplotlib analytics, interactive Power BI dashboards, Scikit-learn Linear Regression.
   - **AI Resume-to-Job Matching System**: CV information extraction, candidate profiling, job ranking via NLP relevance scoring.
   - **RAG-Based Knowledge Assistant**: Retrieval-Augmented Generation using PostgreSQL vector store, BAAI/bge-m3 dense embeddings, Gemini LLM, and Gradio interface.
   - **AI Career Navigator**: Skill trajectory analysis, career path exploration, and personalized guidance.
   - **Algorithmic Puzzle Solvers**: Unbeatable Tic-Tac-Toe using Minimax with alpha-beta pruning, and Sudoku solver with backtracking constraint satisfaction.
   - Filterable gallery by domain (All, Computer Vision, NLP, Data Science, Generative AI, AI Applications).
   - Comprehensive project detail modal with problem, solution, contributions, technical architecture, dataset details, metrics, challenges, and future plans.
   - Technical SVG covers for all projects with graceful fallback if custom images are absent.

7. **Work Flow**
   - Structured 6-stage engineering process:
     1. Understand the Problem
     2. Collect & Explore Data
     3. Prepare & Engineer Features
     4. Develop & Train Models
     5. Evaluate & Improve
     6. Deploy & Integrate
   - Responsive design: Horizontal interactive timeline on desktop, vertical connecting line on mobile.

8. **Testimonials & Recommendations**
   - Tasteful "Recommendations Coming Soon" empty state inviting LinkedIn connections.
   - Zero fabricated reviews or fake ratings. Ready-to-use template in `src/data/testimonials.ts`.

9. **Get in Touch**
   - Verified email (`mohamedessammbuisness@gmail.com`) with instant "Copy Email" clipboard feature.
   - Phone (`01204668873`), location (`Alexandria, Egypt`), GitHub, and LinkedIn links.
   - Functional contact form that validates inputs and opens the user's mail client with pre-filled subject and body, plus guidance for connecting Formspree or EmailJS.

10. **Thank You & Closing / Footer**
    - Elegant closing statement with quotes, CTA buttons, social badges, and navigation links.
    - Subtle copyright footer with current year.

---

## 📁 Final Project Folder Structure

```
d:/my_portofolio/
├── assets/
│   └── mo.jpg                       # Original profile image
├── Mohamed_Essam_Resume.pdf         # Original CV PDF
└── portfolio/                       # Complete React + Vite codebase
    ├── public/
    │   ├── favicon.svg              # ME branded favicon
    │   ├── Mohamed_Essam_Resume.pdf # Downloadable resume file
    │   └── images/
    │       ├── profile/
    │       │   └── mo.jpg           # Profile photo
    │       ├── certificates/        # Place certificate PDFs/images here
    │       └── projects/            # Project cover images and screenshots
    │           ├── heritage-preservation/
    │           │   └── heritage-cover.svg
    │           ├── medical-diagnosis/
    │           │   └── medical-cover.svg
    │           ├── retail-analytics/
    │           │   └── retail-cover.svg
    │           ├── resume-job-matching/
    │           │   └── resume-matching-cover.svg
    │           ├── rag-assistant/
    │           │   └── rag-assistant-cover.svg
    │           ├── ai-career-navigator/
    │           │   └── career-navigator-cover.svg
    │           └── puzzle-solver/
    │               └── puzzle-solver-cover.svg
    ├── src/
    │   ├── components/
    │   │   ├── BackToTop.tsx        # Smooth scroll-to-top button
    │   │   ├── Icons.tsx            # Clean SVG icons (Github, Linkedin)
    │   │   ├── Navbar.tsx           # Sticky responsive navbar
    │   │   ├── ProjectModal.tsx     # Full modal view with project details
    │   │   └── SectionHeader.tsx    # Reusable section header component
    │   ├── data/
    │   │   ├── profile.ts           # Central personal details & contact info
    │   │   ├── education.ts         # Education, diplomas, and certificates
    │   │   ├── skills.ts            # Categorized skills toolkit
    │   │   ├── services.ts          # Client-facing service offerings
    │   │   ├── projects.ts          # Central projects catalog (all 7 projects)
    │   │   └── testimonials.ts      # Testimonials list & template
    │   ├── hooks/
    │   │   ├── useActiveSection.ts  # Intersection observer for active nav item
    │   │   └── useScrollY.ts        # Window scroll tracker
    │   ├── sections/
    │   │   ├── Hero.tsx             # Section 1: Hero
    │   │   ├── About.tsx            # Section 2: About Me
    │   │   ├── Education.tsx        # Section 3: Education & Training
    │   │   ├── Skills.tsx           # Section 4: Skills & Tools
    │   │   ├── Services.tsx         # Section 5: Offered Services
    │   │   ├── Projects.tsx         # Section 6: Featured Projects Gallery
    │   │   ├── Workflow.tsx         # Section 7: 6-Step Workflow
    │   │   ├── Testimonials.tsx     # Section 8: Testimonials
    │   │   ├── Contact.tsx          # Section 9: Contact Form & Info
    │   │   └── Footer.tsx           # Section 10: Closing & Footer
    │   ├── App.tsx                  # Root application component
    │   ├── index.css                # Tailwind CSS v4 design tokens & utilities
    │   └── main.tsx                 # Entry point
    ├── index.html                   # SEO tags, OpenGraph, font imports
    ├── package.json                 # Project dependencies
    ├── tsconfig.json                # TypeScript configurations
    └── vite.config.ts               # Vite configuration with Tailwind CSS plugin
```

---

## 🚀 How to Run Locally on Windows

1. Open PowerShell or Command Prompt and navigate to the `portfolio` folder:
   ```powershell
   cd d:\my_portofolio\portfolio
   ```

2. Start the local Vite development server:
   ```powershell
   npm run dev
   ```

3. Open your browser and visit:
   ```
   http://localhost:5173
   ```

4. To test the production build locally:
   ```powershell
   npm run build
   npm run preview
   ```

---

## 📷 How to Personalize Assets & Images

### 1. Replacing Your Profile Photo
- Your photo is currently at: `portfolio/public/images/profile/mo.jpg`.
- To update it, place your new photo in `portfolio/public/images/profile/` (e.g. `my-photo.jpg`).
- Open `portfolio/src/data/profile.ts` and update:
  ```ts
  profilePhoto: '/images/profile/my-photo.jpg',
  ```
- **Recommended dimensions**: 800 × 800 px (square aspect ratio, 1:1), JPG or WebP.

### 2. Adding Project Screenshots & Covers
Each project has a dedicated folder under `portfolio/public/images/projects/`:
- `heritage-preservation/`
- `medical-diagnosis/`
- `retail-analytics/`
- `resume-job-matching/`
- `rag-assistant/`
- `ai-career-navigator/`
- `puzzle-solver/`

**To add a real cover image:**
1. Drop your image into the respective folder, e.g. `public/images/projects/heritage-preservation/heritage-cover.png`.
2. Open `src/data/projects.ts`, find the project, and set:
   ```ts
   coverImage: '/images/projects/heritage-preservation/heritage-cover.png',
   ```
3. To add gallery images inside the modal:
   ```ts
   galleryImages: [
     { src: '/images/projects/heritage-preservation/robot.jpg', caption: 'Robotic rig scanning' },
     { src: '/images/projects/heritage-preservation/3d-mesh.png', caption: '3D point cloud mesh' }
   ],
   ```
- **Recommended dimensions**:
  - Cover image: 1200 × 675 px (16:9 aspect ratio) or 1200 × 800 px (3:2 aspect ratio).
  - Screenshots: 1920 × 1080 px (16:9 aspect ratio).

### 3. Adding or Updating Your Resume / CV PDF
- The file is placed at `portfolio/public/Mohamed_Essam_Resume.pdf`.
- When you update your CV, simply overwrite `Mohamed_Essam_Resume.pdf` in the `portfolio/public/` folder, or point to a new name in `src/data/profile.ts`:
  ```ts
  cvFile: '/Mohamed_Essam_Resume.pdf',
  ```

### 4. Updating Certificates
- Drop your certificate PDF or image into `portfolio/public/images/certificates/` (e.g. `andalusia-cert.pdf`).
- Open `src/data/education.ts` and set:
  ```ts
  certificateFile: '/images/certificates/andalusia-cert.pdf',
  ```
- The download button will automatically appear once a file path is provided.

### 5. Adding Testimonials / Recommendations
- Open `src/data/testimonials.ts`.
- Uncomment the template object and fill in real recommendations:
  ```ts
  export const testimonials: Testimonial[] = [
    {
      id: 'rec-1',
      name: 'Mentor Name',
      role: 'Senior AI Engineer',
      company: 'AMIT / Tech Co',
      photo: '/images/testimonials/mentor.jpg', // optional
      text: 'Mohamed demonstrated exceptional problem-solving skills in developing end-to-end ML pipelines...',
      linkedinUrl: 'https://linkedin.com/in/...',
      date: 'October 2026'
    }
  ];
  ```

---

## 🌐 How to Deploy to GitHub & Vercel (Free & Instant)

### Option A: Deploy with Vercel (Recommended)
1. Initialize git and commit your files (if not already done):
   ```powershell
   cd d:\my_portofolio\portfolio
   git init
   git add .
   git commit -m "feat: complete AI engineering portfolio website"
   ```
2. Create a new repository on your GitHub account (`https://github.com/MohamedEssam128/portfolio`).
3. Push your repository:
   ```powershell
   git remote add origin https://github.com/MohamedEssam128/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
5. Select your GitHub repository.
6. Vercel automatically detects **Vite** — click **"Deploy"**.
7. In under 60 seconds, your site will be live with free global CDN and HTTPS!

### Option B: Deploy with Netlify
1. Go to [Netlify](https://netlify.com/) and connect your GitHub repo.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **"Deploy"**.

---

## 📋 Information to Provide in the Future (Optional)
When you have them ready, you can easily add:
- Real screenshots or photos of your graduation project robot rig and 3D reconstruction outputs.
- Power BI dashboard screenshots for the Retail Data Analysis project.
- Real certificate PDF files for the Andalusia Hospital AI internship and Telecom Egypt training.
- Live demo links (HuggingFace Spaces, Streamlit Community Cloud, or GitHub Pages) for your interactive apps.
