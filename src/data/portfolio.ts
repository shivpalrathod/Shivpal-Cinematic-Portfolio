export type Project = {
  number: string;
  name: string;
  shortName: string;
  description: string;
  overview: string;
  problem?: string;
  solution?: string;
  contribution?: string;
  features: string[];
  technologies: string[];
  repository: string;
  liveDemo?: string;
  testing?: string;
  visual: "placement" | "compiler" | "students";
};

export const links = {
  email: "mailto:shivpalrathod1122@gmail.com",
  resumeRequest: "mailto:shivpalrathod1122@gmail.com?subject=Resume%20request",
  phone: "tel:+917995647094",
  github: "https://github.com/shivpalrathod",
  linkedin: "https://linkedin.com/in/shivpalrathod",
  leetcode: "https://leetcode.com/u/Rathodshivpal/",
};

export const projects: Project[] = [
  {
    number: "01",
    name: "PlaceAI — Placement Intelligence Platform",
    shortName: "PlaceAI",
    description: "AI-powered placement platform for student, company, and interview management.",
    overview: "A unified platform for resume analysis, ATS scoring, matching, recommendations, and placement workflows.",
    problem: "Students and placement teams need a clearer way to understand readiness, discover opportunities, and manage recruitment activity.",
    solution: "AI-assisted analysis, recommendations, company intelligence, and eligibility workflows in one platform.",
    contribution: "Built authentication, role-based workflows, APIs, analytics, and AI-assisted recommendations.",
    features: ["AI Resume Analyzer", "ATS scoring", "Strength/weakness detection", "Job and internship recommendations", "Skill-based matching and missing-skill detection", "Company intelligence", "Placement eligibility checker", "Career AI Agent", "Google OAuth"],
    technologies: ["Node.js", "Express.js", "MongoDB", "Google Gemini AI", "Passport.js", "OAuth"],
    repository: "https://github.com/shivpalrathod/PlaceAI-Placement-Intelligence-Platform",
    visual: "placement",
  },
  {
    number: "02",
    name: "AI Python Visual Compiler",
    shortName: "Visual Compiler",
    description: "AI-powered browser IDE with real-time, step-by-step code execution explanations.",
    overview: "A browser IDE that pairs Python execution with an AI explanation layer powered by Anthropic Claude.",
    problem: "Learners can see code output without understanding how execution reached a result or error.",
    solution: "A responsive interface pairs secure execution with real-time, step-by-step explanations.",
    contribution: "Built the Django REST backend, sandboxed execution workflow, and responsive explanation interface.",
    features: ["Anthropic Claude API", "Real-time explanations", "Django REST backend", "Secure sandboxed execution", "Responsive frontend", "AI explanation layer"],
    technologies: ["Python", "Django", "Anthropic Claude API", "HTML/CSS"],
    repository: "https://github.com/shivpalrathod/AI_Python_Visual_Compiler",
    visual: "compiler",
  },
  {
    number: "03",
    name: "Student Management System",
    shortName: "Student System",
    description: "Django CRUD application for secure student-record management.",
    overview: "A Django CRUD application managing 500+ student records with RBAC and tested core operations.",
    problem: "Student records need secure management with controlled access and dependable core operations.",
    solution: "Django CRUD workflows, RBAC authentication, and unit and functional testing.",
    features: ["500+ student records", "RBAC authentication", "Django CRUD workflows", "100% core-operation test coverage", "Unit and functional testing"],
    technologies: ["Python", "Django", "SQLite", "RBAC"],
    repository: "https://github.com/shivpalrathod/Student_Management_System",
    visual: "students",
  },
];

export const skillGroups = [
  { label: "Languages", skills: ["Python", "SQL", "Java"] },
  { label: "Frameworks", skills: ["Django", "Flask", "FastAPI", "Node.js", "Express.js", "React", "Angular"] },
  { label: "AI / LLM", skills: ["Anthropic Claude API", "Google Gemini API", "Prompt Engineering", "AI Agent Workflows"] },
  { label: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"] },
  { label: "Testing", skills: ["Unit Testing", "Functional Testing", "Test Case Design", "Test Coverage Analysis"] },
  { label: "Tools / DevOps", skills: ["Docker", "GitHub Actions", "Git", "GitHub", "VS Code"] },
  { label: "Authentication", skills: ["JWT", "RBAC", "OAuth", "Passport.js"] },
];

export type SkillCategory = "Languages" | "Frontend" | "Backend" | "AI / LLM" | "Databases" | "Testing" | "DevOps" | "Auth";

export type Skill = {
  name: string;
  category: SkillCategory;
  icon: "code" | "database" | "sparkles" | "network" | "shield" | "docker";
  usedIn: string[];
};

export const skills: Skill[] = [
  { name: "Python", category: "Languages", icon: "code", usedIn: ["AI Python Visual Compiler", "Student Management System"] },
  { name: "SQL", category: "Languages", icon: "database", usedIn: ["Student Management System", "ContractIQ"] },
  { name: "Java", category: "Languages", icon: "code", usedIn: [] },
  { name: "React", category: "Frontend", icon: "code", usedIn: ["AI Python Visual Compiler"] },
  { name: "Angular", category: "Frontend", icon: "code", usedIn: ["ContractIQ"] },
  { name: "Django", category: "Backend", icon: "code", usedIn: ["AI Python Visual Compiler", "Student Management System"] },
  { name: "Flask", category: "Backend", icon: "code", usedIn: [] },
  { name: "FastAPI", category: "Backend", icon: "network", usedIn: ["ContractIQ"] },
  { name: "Node.js", category: "Backend", icon: "code", usedIn: ["PlaceAI"] },
  { name: "Express.js", category: "Backend", icon: "network", usedIn: ["PlaceAI"] },
  { name: "Anthropic Claude API", category: "AI / LLM", icon: "sparkles", usedIn: ["AI Python Visual Compiler"] },
  { name: "Google Gemini API", category: "AI / LLM", icon: "sparkles", usedIn: ["PlaceAI"] },
  { name: "Prompt Engineering", category: "AI / LLM", icon: "code", usedIn: [] },
  { name: "AI Agent Workflows", category: "AI / LLM", icon: "network", usedIn: ["PlaceAI"] },
  { name: "PostgreSQL", category: "Databases", icon: "database", usedIn: ["ContractIQ"] },
  { name: "MongoDB", category: "Databases", icon: "database", usedIn: ["PlaceAI"] },
  { name: "MySQL", category: "Databases", icon: "database", usedIn: [] },
  { name: "SQLite", category: "Databases", icon: "database", usedIn: ["Student Management System"] },
  { name: "Unit Testing", category: "Testing", icon: "check", usedIn: ["Student Management System"] },
  { name: "Functional Testing", category: "Testing", icon: "check", usedIn: ["Student Management System"] },
  { name: "Test Case Design", category: "Testing", icon: "check", usedIn: ["Student Management System"] },
  { name: "Test Coverage Analysis", category: "Testing", icon: "check", usedIn: ["Student Management System"] },
  { name: "Docker", category: "DevOps", icon: "docker", usedIn: ["ContractIQ"] },
  { name: "Git", category: "DevOps", icon: "code", usedIn: ["ContractIQ"] },
  { name: "GitHub", category: "DevOps", icon: "code", usedIn: ["PlaceAI", "AI Python Visual Compiler", "Student Management System"] },
  { name: "GitHub Actions", category: "DevOps", icon: "network", usedIn: ["ContractIQ"] },
  { name: "VS Code", category: "DevOps", icon: "code", usedIn: [] },
  { name: "JWT", category: "Auth", icon: "shield", usedIn: ["ContractIQ"] },
  { name: "RBAC", category: "Auth", icon: "shield", usedIn: ["Student Management System", "ContractIQ"] },
  { name: "OAuth", category: "Auth", icon: "shield", usedIn: ["PlaceAI"] },
  { name: "Passport.js", category: "Auth", icon: "shield", usedIn: ["PlaceAI"] },
];

export const certifications = [
  { name: "Salesforce Certified Agentforce Specialist", issuer: "Salesforce / Trailhead · ID 7322714", date: "December 2025" },
  { name: "GenAI Powered Data Analytics", issuer: "TCS", date: "2024" },
  { name: "Python Django MySQL", issuer: "Infosys Springboard", date: "" },
  { name: "HTML Essentials", issuer: "Cisco Networking Academy", date: "" },
  { name: "IoT", issuer: "NPTEL", date: "" },
];

export const experience = {
  role: "Software Engineering Intern",
  company: "Infosys Virtual Internship 7.0",
  dates: "2026 — Present",
  project: "ContractIQ — Contract Obligation Tracking & Compliance Management Platform",
  technologies: ["Python", "FastAPI", "Angular", "TypeScript", "PostgreSQL", "SQLAlchemy", "Docker", "GitHub Actions"],
  contributions: [
    "Built core modules for obligation tracking, renewal management, compliance monitoring, and reporting.",
    "Developed FastAPI backend and Angular/TypeScript frontend workflows.",
    "Implemented JWT authentication, RBAC, and PostgreSQL/SQLAlchemy schema design.",
    "Worked with users, contracts, contract versions, obligations, renewals, notifications, reports, and audit logs.",
    "Handled testing, debugging, Docker, Git/GitHub workflows, and GitHub Actions.",
  ],
};

export const education = {
  degree: "B.Tech — Computer Science & Engineering",
  institution: "CMR Technical Campus, Hyderabad",
  dates: "2024 – 2027",
  cgpa: "7.67 / 10",
  details: ["No backlogs", "DSA", "OOP", "DBMS", "Computer Networks", "OS"],
};

export const achievements = [
  { value: "300+", label: "LeetCode problems solved", detail: "Top 86.47%" },
  { value: "1393", label: "Contest rating", detail: "LeetCode" },
  { value: "572+", label: "Submissions in past year", detail: "LeetCode" },
  { value: "Round-2", label: "National Olympiad qualifier", detail: "Woxsen University" },
];

export const heroPanels = [
  { number: "01", label: "Full-stack", value: "Python · Django · FastAPI · React" },
  { number: "02", label: "AI / LLM", value: "Gemini · Claude · AI Agents" },
  { number: "03", label: "Problem solving", value: "300+ LeetCode Problems" },
  { number: "04", label: "Education", value: "B.Tech CSE · 2027" },
];

export const labCards = [
  { label: "AI / LLM workflows", detail: "Google Gemini API · Anthropic Claude API · Prompt Engineering" },
  { label: "Full-stack systems", detail: "Django · FastAPI · Node.js · React · Angular" },
  { label: "Secure application flows", detail: "JWT · RBAC · OAuth · Passport.js" },
  { label: "Testing and delivery", detail: "Unit Testing · Functional Testing · Docker · GitHub Actions" },
];
