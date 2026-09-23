import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio-page";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Shivpal Rathod — Full-Stack & AI Software Engineer" },
    { name: "description", content: "Portfolio of Shivpal Rathod, a full-stack developer and AI software engineer building intelligent digital products." },
    { property: "og:title", content: "Shivpal Rathod — Full-Stack & AI Software Engineer" },
    { property: "og:description", content: "Full-stack systems, applied AI products, and production backend engineering." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <PortfolioPage />;
}
