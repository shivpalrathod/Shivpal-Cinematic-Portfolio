import { CheckCircle2, Code2, Database, Network, ShieldCheck, Sparkles } from "lucide-react";
import type { Skill } from "@/data/portfolio";

const icons = {
  code: Code2,
  database: Database,
  sparkles: Sparkles,
  network: Network,
  shield: ShieldCheck,
  docker: Database,
  check: CheckCircle2,
} as const;

export function SkillLogo({ skill, highlighted = false, onHover }: { skill: Skill; highlighted?: boolean; onHover?: (skill: Skill | null) => void }) {
  const Icon = icons[skill.icon];
  return <article className={`skill-logo glass-panel ${highlighted ? "is-highlighted" : ""}`} title={skill.usedIn.length ? `Used in: ${skill.usedIn.join(", ")}` : skill.name} onMouseEnter={() => onHover?.(skill)} onMouseLeave={() => onHover?.(null)} onFocus={() => onHover?.(skill)} onBlur={() => onHover?.(null)} tabIndex={0}>
    <Icon aria-hidden="true" />
    <strong>{skill.name}</strong>
    {skill.usedIn.length > 0 && <small>Used in {skill.usedIn.length} project{skill.usedIn.length === 1 ? "" : "s"}</small>}
  </article>;
}
