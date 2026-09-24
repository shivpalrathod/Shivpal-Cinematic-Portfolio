import {
  SiPython,
  SiReact,
  SiAngular,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiAnthropic,
  SiGoogle,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiVscodium,
} from "react-icons/si";
import {
  CheckCircle2,
  Code2,
  Database,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { Skill } from "@/data/portfolio";

const skillIcons = {
  Python: SiPython,
  SQL: Database,
  Java: Code2,

  React: SiReact,
  Angular: SiAngular,

  Django: SiDjango,
  Flask: SiFlask,
  FastAPI: SiFastapi,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,

  "Anthropic Claude API": SiAnthropic,
  "Google Gemini API": SiGoogle,
  "Prompt Engineering": Sparkles,
  "AI Agent Workflows": Network,

  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  SQLite: SiSqlite,

  "Unit Testing": CheckCircle2,
  "Functional Testing": CheckCircle2,
  "Test Case Design": CheckCircle2,
  "Test Coverage Analysis": CheckCircle2,

  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  "GitHub Actions": SiGithubactions,
  "VS Code": SiVscodium,

  JWT: ShieldCheck,
  RBAC: ShieldCheck,
  OAuth: ShieldCheck,
  "Passport.js": ShieldCheck,
} as const;

const skillColors: Record<string, string> = {
  Python: "#3776AB",
  React: "#61DAFB",
  Angular: "#DD0031",
  Django: "#092E20",
  Flask: "#FFFFFF",
  FastAPI: "#009688",
  "Node.js": "#5FA04E",
  "Express.js": "#FFFFFF",

  "Anthropic Claude API": "#D97757",
  "Google Gemini API": "#8E75FF",

  PostgreSQL: "#4169E1",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  SQLite: "#003B57",

  Docker: "#2496ED",
  Git: "#F05032",
  GitHub: "#FFFFFF",
  "GitHub Actions": "#2088FF",
  "VS Code": "#007ACC",

  SQL: "#4479A1",
  Java: "#ED8B00",

  "Prompt Engineering": "#A78BFA",
  "AI Agent Workflows": "#A78BFA",

  "Unit Testing": "#4ADE80",
  "Functional Testing": "#4ADE80",
  "Test Case Design": "#4ADE80",
  "Test Coverage Analysis": "#4ADE80",

  JWT: "#FFFFFF",
  RBAC: "#FFFFFF",
  OAuth: "#FFFFFF",
  "Passport.js": "#34D399",
};

export function SkillLogo({
  skill,
  highlighted = false,
  onHover,
}: {
  skill: Skill;
  highlighted?: boolean;
  onHover?: (skill: Skill | null) => void;
}) {
  const Icon = skillIcons[skill.name as keyof typeof skillIcons] ?? Code2;
  const color = skillColors[skill.name] ?? "#FFFFFF";

  return (
    <article
      className={`skill-logo glass-panel ${highlighted ? "is-highlighted" : ""}`}
      title={
        skill.usedIn.length
          ? `Used in: ${skill.usedIn.join(", ")}`
          : skill.name
      }
      onMouseEnter={() => onHover?.(skill)}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(skill)}
      onBlur={() => onHover?.(null)}
      tabIndex={0}
    >
      <Icon
        aria-hidden="true"
        style={{
          color,
          fill: "currentColor",
        }}
      />

      <strong>{skill.name}</strong>

      {skill.usedIn.length > 0 && (
        <small>
          Used in {skill.usedIn.length} project
          {skill.usedIn.length === 1 ? "" : "s"}
        </small>
      )}
    </article>
  );
}
