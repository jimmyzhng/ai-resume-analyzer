# AI Resume Analyzer

A smart resume analysis application that provides AI-powered feedback to help you optimize your resume for Applicant Tracking Systems (ATS) and improve your job application success rate.

## 🚀 Features

- **AI-Powered Resume Analysis**: Get detailed feedback on your resume using advanced AI analysis
- **ATS Optimization**: Receive specific tips to improve your resume's compatibility with Applicant Tracking Systems
- **Comprehensive Scoring**: Detailed scoring across multiple categories:
  - Overall Score
  - ATS Compatibility
  - Tone and Style
  - Content Quality
  - Structure and Organization
  - Skills Assessment
- **Resume Tracking**: Keep track of all your resume submissions and their feedback
- **PDF Support**: Upload and analyze PDF resumes with automatic image conversion
- **Job-Specific Analysis**: Provide job descriptions for targeted feedback
- **Modern UI**: Clean, responsive interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React, React Router, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **File Handling**: React Dropzone, PDF.js
- **Backend Services**: Puter (Authentication, File Storage, AI, Key-Value Store)
- **Build Tool**: Vite

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- Puter account (for backend services)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd ai-resume-analyzer
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Set up Puter integration

This application uses Puter for backend services. You'll need to:

1. Create a Puter account at [puter.com](https://puter.com)
2. Set up your Puter integration (authentication, file storage, AI services)

### 4. Run the development server

```bash
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

### 5. Build for production

```bash
npm run build
# or
pnpm build
```

## 📁 Project Structure

```
ai-resume-analyzer/
├── app/
│   ├── components/          # React components
│   │   ├── ATS.tsx         # ATS scoring component
│   │   ├── Details.tsx     # Detailed feedback component
│   │   ├── FileUploader.tsx # File upload component
│   │   ├── Navbar.tsx      # Navigation component
│   │   ├── ResumeCard.tsx  # Resume card component
│   │   ├── ScoreBadge.tsx  # Score display component
│   │   ├── ScoreCircle.tsx # Circular score display
│   │   ├── ScoreGauge.tsx  # Gauge score display
│   │   └── Summary.tsx     # Summary component
│   ├── constants/          # Application constants
│   │   └── index.ts        # AI response format and sample data
│   ├── lib/                # Utility libraries
│   │   ├── puter.ts        # Puter integration
│   │   ├── pdf2img.ts      # PDF to image conversion
│   │   └── utils.ts        # Utility functions
│   ├── routes/             # Application routes
│   │   ├── auth.tsx        # Authentication page
│   │   ├── home.tsx        # Home dashboard
│   │   ├── resume.tsx      # Resume detail view
│   │   ├── upload.tsx      # Resume upload page
│   │   └── wipe.tsx        # Data cleanup utility
│   ├── app.css             # Global styles
│   ├── root.tsx            # Root component
│   └── routes.ts           # Route definitions
├── public/                 # Static assets
│   ├── icons/              # SVG icons
│   └── images/             # Images and GIFs
├── types/                  # TypeScript type definitions
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

## 🎯 How It Works

1. **Authentication**: Users sign in through Puter authentication
2. **Resume Upload**: Upload PDF resumes with job details
3. **AI Analysis**: The system analyzes the resume using AI and provides structured feedback
4. **Feedback Display**: View comprehensive feedback across multiple categories
5. **Resume Tracking**: Keep track of all submissions and their scores

## 📊 Feedback Categories

The AI analysis provides detailed feedback across these categories:

- **Overall Score**: Overall resume quality rating (0-100)
- **ATS Score**: Applicant Tracking System compatibility
- **Tone and Style**: Professional tone and writing style assessment
- **Content**: Quality and relevance of content
- **Structure**: Organization and layout evaluation
- **Skills**: Skills presentation and alignment with job requirements

## 🔐 Authentication

The application uses Puter's authentication system. Users must be authenticated to:
- Upload resumes
- View feedback
- Access their resume history

## 🔮 Future Enhancements

- AI-powered resume fixes based on feedback
- Export functionality for feedback reports
- Integration with job boards
- Advanced analytics and trends


