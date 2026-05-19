import { useEffect, useState } from "react";
import { designProjects } from "./data/design-projects";
import { technicalProjects } from "./data/technical-projects";
import { DesignModal } from "./components/DesignModal";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectSection } from "./components/ProjectSection";
import { TechnicalModal } from "./components/TechnicalModal";
import type { DesignProject, TechnicalProject } from "./types";

const SECTION_IDS = ["technical-projects", "design-portfolio"] as const;

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [technicalOpen, setTechnicalOpen] = useState<TechnicalProject | null>(
    null,
  );
  const [designOpen, setDesignOpen] = useState<DesignProject | null>(null);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];

    const hero = document.getElementById("hero");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActiveSection(null);
        }
      },
      { threshold: 0.4 },
    );

    sections.forEach((s) => observer.observe(s));
    if (hero) heroObserver.observe(hero);
    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Nav activeSection={activeSection} />
      <main>
        <Hero />

        <ProjectSection
          id="technical-projects"
          title="Technical Projects"
          subtitle="Coursework, hackathons, and builds — click a card for details."
        >
          {technicalProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tagline={project.tagline}
              accent={project.accent}
              badge={project.timeline}
              thumbnail={project.thumbnail}
              onOpen={() => {
                setDesignOpen(null);
                setTechnicalOpen(project);
              }}
            />
          ))}
        </ProjectSection>

        <ProjectSection
          id="design-portfolio"
          title="Design Portfolio"
          subtitle="UX case studies — click a card to read the full story."
        >
          {designProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tagline={project.tagline}
              accent={project.accent}
              badge={project.badge}
              thumbnail={project.thumbnail}
              onOpen={() => {
                setTechnicalOpen(null);
                setDesignOpen(project);
              }}
            />
          ))}
        </ProjectSection>
      </main>

      <Footer />

      <TechnicalModal
        project={technicalOpen}
        onClose={() => setTechnicalOpen(null)}
      />
      <DesignModal project={designOpen} onClose={() => setDesignOpen(null)} />
    </>
  );
}
