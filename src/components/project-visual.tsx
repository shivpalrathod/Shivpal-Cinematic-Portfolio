import { useState, type ReactNode } from "react";
import { BarChart3, CheckCircle2, Code2, ShieldCheck, Sparkles, Users } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "placement") return <PlaceAIDashboard />;
  if (project.visual === "compiler") return <CompilerDashboard />;
  return <StudentDashboard />;
}

function DashboardShell({ title, children }: { title: string; children: ReactNode }) {
  return <div className="product-screen dashboard-product"><div className="dashboard-header"><div><span className="dashboard-eyebrow">Presentation preview</span><strong>{title}</strong></div><span className="dashboard-live"><i /> Demo UI</span></div>{children}</div>;
}

function PlaceAIDashboard() {
  const [tab, setTab] = useState("AI Resume Analysis");
  const tabs = ["AI Resume Analysis", "Skill Gap", "Job Matching", "Career AI"];
  return <DashboardShell title="PLACEAI / PLACEMENT INTELLIGENCE"><div className="dashboard-tabs">{tabs.map((item) => <button className={tab === item ? "is-active" : ""} onClick={() => setTab(item)} key={item}>{item}</button>)}</div><div className="placeai-dashboard"><div className="dashboard-kpi"><span>{tab}</span><strong>{tab === "AI Resume Analysis" ? "Sample analysis" : tab}</strong><small>Illustrative interface, not a live result</small></div>{tab === "Career AI" ? <div className="ai-assistant"><div><Sparkles /><span>CAREER AI / DEMO</span></div><p>User: What skills am I missing for backend roles?</p><strong>Based on your profile, focus on the skills shown in the matching view.</strong></div> : <div className="dashboard-columns"><div className="dashboard-list"><span>SUPPORTED WORKFLOW</span>{(tab === "Skill Gap" ? ["Missing skill detection", "Skill gap analysis", "Strength / weakness detection"] : tab === "Job Matching" ? ["Job recommendation", "Internship recommendation", "Skill match scoring"] : ["AI Resume Analyzer", "ATS scoring", "Company intelligence"]).map((item) => <div key={item}><CheckCircle2 />{item}</div>)}</div><div className="dashboard-chart"><BarChart3 /><span>PLACEMENT INTELLIGENCE</span><div className="bar-row"><i style={{ width: "78%" }} /><b>Workflow signal</b></div><div className="bar-row"><i style={{ width: "58%" }} /><b>Skill alignment</b></div><small>Neutral visual summary</small></div></div>}</div></DashboardShell>;
}

function CompilerDashboard() {
  const [tab, setTab] = useState("Code");
  return <DashboardShell title="AI PYTHON VISUAL COMPILER"><div className="dashboard-tabs"><button className={tab === "Code" ? "is-active" : ""} onClick={() => setTab("Code")}>Code</button><button className={tab === "Execution" ? "is-active" : ""} onClick={() => setTab("Execution")}>Execution</button><button className={tab === "AI Explanation" ? "is-active" : ""} onClick={() => setTab("AI Explanation")}>AI Explanation</button></div><div className="compiler-dashboard"><div className="compiler-panel"><span>{tab.toUpperCase()}</span>{tab === "Code" ? <pre>def fibonacci(n):{"\n"}    if n &lt;= 1:{"\n"}        return n{"\n"}    return fibonacci(n - 1)</pre> : tab === "Execution" ? <div className="execution-steps"><strong>Step 01</strong><span>n = 5</span><strong>Step 02</strong><span>recursive call</span><strong>Step 03</strong><span>execution trace</span></div> : <p className="compiler-explanation"><Sparkles /> Claude explanation layer: the current step is represented here as a presentation demo.</p>}</div><div className="compiler-side"><Code2 /><span>Django REST backend</span><span>Sandboxed execution</span><span>Anthropic Claude API</span></div></div></DashboardShell>;
}

function StudentDashboard() {
  return <DashboardShell title="STUDENT MANAGEMENT SYSTEM"><div className="student-dashboard"><div className="student-stats"><div><span>Total records</span><strong>500+</strong></div><div><span>Access model</span><strong>RBAC</strong></div><div><span>Core operations</span><strong>100%</strong></div></div><div className="student-table"><div className="table-head"><span>Student</span><span>Role</span><span>Status</span></div>{["Student 001", "Student 002", "Student 003"].map((student, index) => <div className="table-row" key={student}><span><Users />{student}</span><span>{index === 2 ? "Admin" : "Student"}</span><em>Active</em></div>)}</div><div className="rbac-strip"><ShieldCheck /><span>RBAC</span><b>ADMIN</b><b>STUDENT</b><span><CheckCircle2 /> Tested core operations</span></div></div></DashboardShell>;
}
