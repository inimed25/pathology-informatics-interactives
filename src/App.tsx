import { useState } from "react";
import { lessonContent } from "./content";
import { GenericExperience } from "./components/GenericExperience";
import { CoverageExplorer } from "./components/CoverageExplorer";
import { ReadContextExplorer } from "./components/ReadContextExplorer";
import { BreakpointExplorer } from "./components/BreakpointExplorer";
import { InterfaceRecoveryExplorer } from "./components/InterfaceRecoveryExplorer";
import { DigitalWorkflowExplorer } from "./components/DigitalWorkflowExplorer";
import { PublicHealthInteropExplorer } from "./components/PublicHealthInteropExplorer";
import { OrganismMappingFigure } from "./components/OrganismMappingFigure";
import { AntibiogramFigure } from "./components/AntibiogramFigure";
import { LabEcosystemFigure } from "./components/LabEcosystemFigure";
import { GenomicsConceptGallery } from "./components/GenomicsConceptGallery";
import { SiteChrome, href } from "./components/SiteChrome";
import { lessonBySlug, lessons, topicBySlug, topics } from "./data/curriculum";
import type { LessonDefinition } from "./data/types";

const routePath = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const pathname = window.location.pathname;
  return base && pathname.startsWith(base) ? pathname.slice(base.length) || "/" : pathname;
};

     function HubPage() {
  const firstLesson = lessons[0];

  return (
    <main>
      <section className="hub-hero">
        <div>
          <p className="eyebrow">
            6 modules · Clinical Microbiology Informatics
          </p>

          <h1>Clinical Microbiology Informatics</h1>

          <p className="hero-lede">
            An interactive curriculum exploring how microbiology data move
            from instruments and laboratory workflows to clinical
            interpretation, surveillance, and decision support.
          </p>

          <div className="hero-actions">
            {firstLesson && (
              <a
                className="primary-button"
                href={href(`lessons/${firstLesson.manifest.slug}/`)}
              >
                Start module 1
              </a>
            )}

            <a className="secondary-button" href="#topics">
              Browse all modules
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <span>Curriculum pathway</span>
          <ol>
            <li>Foundations of microbiology informatics</li>
            <li>AST and antimicrobial decision support</li>
            <li>Instrumentation, interfaces, and automation</li>
            <li>Microbial genomics and bioinformatics</li>
            <li>Digital microbiology and emerging technologies</li>
            <li>Public-health informatics and surveillance</li>
          </ol>
          <small>
            Educational cases, questions, and figures are independently
            authored unless otherwise identified.
          </small>
        </aside>
      </section>

      <section className="catalog-section" id="topics">
        <div className="section-copy">
          <p className="eyebrow">Curriculum modules</p>
          <h2>Six connected areas of clinical microbiology informatics</h2>
          <p>
            Progress from foundational data concepts to laboratory
            interfaces, antimicrobial susceptibility testing, microbial
            genomics, digital workflows, and public-health surveillance.
          </p>
        </div>

        <div className="topic-grid">
          {topics.map((topic) => {
            const count = lessons.filter(
              (lesson) => lesson.manifest.topic === topic.id
            ).length;

            return (
              <a
                className="topic-card"
                href={href(`topics/${topic.slug}/`)}
                key={topic.id}
              >
                <span>Module {topic.id}</span>
                <h3>{topic.title}</h3>
                <p>{topic.summary}</p>

                <footer>
                  <strong>
                    {count} {count === 1 ? "lesson" : "lessons"}
                  </strong>
                  <small>{topic.objectives.join(" · ")}</small>
                </footer>
              </a>
            );
          })}
        </div>
      </section>

      <Coverage />

      <section className="about-section" id="about">
        <div>
          <p className="eyebrow">Evidence and editorial model</p>
          <h2>Evidence-based and independently authored</h2>
        </div>

        <div>
          <p>
            Curriculum content is developed from cited authoritative
            standards, public-health guidance, technical documentation,
            and peer-reviewed literature. Educational frameworks such as
            PIER may inform competency alignment without reproducing
            proprietary educational content.
          </p>

          <p>
            Cases, assessment questions, explanatory text, and original
            figures are created specifically for this curriculum unless
            otherwise identified and attributed.
          </p>
        </div>
      </section>
    </main>
  );
}

function Coverage() {
  const covered = new Set(
    lessons.flatMap((lesson) => lesson.manifest.pierObjectives)
  );

  const totalObjectives = new Set(
    topics.flatMap((topic) => topic.objectives)
  ).size;

  return (
    <section className="coverage-section" id="coverage">
      <div className="section-copy">
        <p className="eyebrow">Curriculum coverage</p>
        <h2>
          {covered.size} of {totalObjectives} learning objectives mapped
        </h2>
        <p>
          Each module connects defined learning objectives with interactive
          lessons and knowledge-check questions.
        </p>
      </div>

      <div
        className="coverage-table"
        role="table"
        aria-label="Clinical microbiology informatics curriculum coverage"
      >
        <div className="coverage-row coverage-head" role="row">
          <span>Module</span>
          <span>Objectives</span>
          <span>Lessons</span>
        </div>

        {topics.map((topic) => (
          <div className="coverage-row" role="row" key={topic.id}>
            <strong>{String(topic.id).padStart(2, "0")}</strong>

            <span>
              {topic.objectives.map((objective) => (
                <b
                  className={covered.has(objective) ? "covered" : "missing"}
                  key={objective}
                >
                  {objective}
                </b>
              ))}
            </span>

            <span>
              {lessons
                .filter((lesson) => lesson.manifest.topic === topic.id)
                .map((lesson) => lesson.manifest.id)
                .join(", ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TopicPage({ slug }: { slug: string }) {
  const topic = topicBySlug.get(slug);
  if (!topic) return <NotFound/>;
  const topicLessons = lessons.filter((lesson) => lesson.manifest.topic === topic.id);
  return <main className="inner-main"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href={href()}>Curriculum</a><span>→</span><span>Module {topic.id}</span></nav><header className="topic-hero"><p className="eyebrow">Module {topic.id}</p><h1>{topic.title}</h1><p>{topic.summary}</p><div className="objective-row">{topic.objectives.map((objective) => <span key={objective}>{objective}</span>)}</div></header><section className="lesson-list"><h2>{topicLessons.length} interactive lessons</h2>{topicLessons.map((lesson, index) => <LessonListItem key={lesson.manifest.slug} lesson={lesson} index={index}/>)}</section></main>;
}

function LessonListItem({ lesson, index }: { lesson: LessonDefinition; index: number }) {
  const m = lesson.manifest;
  return <article className="lesson-list-item"><span className="lesson-index">{String(index + 1).padStart(2, "0")}</span><div><p>{m.difficulty} · {m.durationMinutes} minutes</p><h3><a href={href(`lessons/${m.slug}/`)}>{m.title}</a></h3><div className="tag-row">{m.pierObjectives.map((objective) => <span key={objective}>{objective}</span>)}{m.pilot && <span className="pilot-tag">Pilot pattern</span>}</div></div><a className="arrow-link" href={href(`lessons/${m.slug}/`)} aria-label={`Open ${m.title}`}>→</a></article>;
}

function LessonPage({ slug }: { slug: string }) {
  const lesson = lessonBySlug.get(slug);
  if (!lesson) return <NotFound/>;
  const [attempted, setAttempted] = useState(false);
  const { Introduction, Debrief } = lessonContent(slug);
  const topic = topics.find((item) => item.id === lesson.manifest.topic)!;
  
  return (
    <main className="lesson-main">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={href()}>Curriculum</a><span>→</span><a href={href(`topics/${topic.slug}/`)}>Module {topic.id}</a><span>→</span><span>Lesson {lesson.manifest.id}</span></nav>
               <header className="lesson-meta">
        <div className="tag-row">
          {lesson.manifest.pierObjectives.map((objective) => (
            <span key={objective}>{objective}</span>
          ))}
        </div>

        <div>
          <span>{lesson.manifest.durationMinutes} minutes</span>
          <span>{lesson.manifest.difficulty}</span>
          <a href={href(`faculty/${slug}/`)}>Faculty guide</a>
        </div>
      </header>
      <section className="lesson-phase-heading" aria-label="Learn">
        <span>01</span>
        <div><p className="eyebrow">Learn</p><strong>Build the concept</strong></div>
      </section>
      <section className="mdx-content introduction-content">{Introduction ? <Introduction/> : <p>Introduction content is missing.</p>}</section>
      <section className="lesson-phase-heading" aria-label="Explore">
        <span>02</span>
        <div><p className="eyebrow">Explore</p><strong>See the informatics concept in action</strong></div>
      </section>
      {slug === "microbiology-informatics" && <OrganismMappingFigure />}
      {slug === "microbiology-decision-support" && (
        <div className="lesson-visual-stack">
          <BreakpointExplorer />
          <AntibiogramFigure />
        </div>
      )}
      {slug === "microbiology-interfaces-automation" && (
        <div className="lesson-visual-stack">
          <LabEcosystemFigure />
          <InterfaceRecoveryExplorer />
        </div>
      )}
      {slug === "microbiology-digital-imaging-telemicrobiology" && <DigitalWorkflowExplorer />}
      {slug === "microbiology-public-health-surveillance" && <PublicHealthInteropExplorer />}
      {slug === "microbiology-genomics-bioinformatics" && (
        <div className="genomics-concept-labs">
          <ReadContextExplorer />
          <CoverageExplorer />
          <GenomicsConceptGallery />
        </div>
      )}
                          <GenericExperience lesson={lesson} onAttempt={setAttempted}/>
      {attempted ? (
        <>
          <section className="lesson-phase-heading" aria-label="Apply">
            <span>06</span>
            <div><p className="eyebrow">Apply</p><strong>Debrief the informatics reasoning</strong></div>
          </section>
          <section className="mdx-content debrief-content" id="lesson-debrief">
            {Debrief ? <Debrief/> : <p>Debrief content is missing.</p>}
          </section>
        </>
      ) : (
        <section className="debrief-locked" aria-label="Debrief locked">
          <span aria-hidden="true">05 → 06</span>
          <div>
            <strong>Answer a knowledge-check question to continue</strong>
            <p>Your debrief will open after you attempt a question.</p>
          </div>
        </section>
      )}

      <nav className="lesson-end-nav" aria-label="Lesson navigation">
        <a href={href(`topics/${topic.slug}/`)}>← Back to Module {topic.id}</a>
        {(() => {
          const index = lessons.findIndex((item) => item.manifest.slug === slug);
          const nextLesson = index >= 0 ? lessons[index + 1] : undefined;
          return nextLesson ? (
            <a className="next-lesson-link" href={href(`lessons/${nextLesson.manifest.slug}/`)}>
              <small>Continue curriculum</small>
              <strong>Lesson {nextLesson.manifest.id} · {nextLesson.manifest.title}</strong>
              <span aria-hidden="true">→</span>
            </a>
          ) : (
            <a className="next-lesson-link" href={href()}>
              <small>Curriculum complete</small>
              <strong>Return to curriculum overview</strong>
              <span aria-hidden="true">→</span>
            </a>
          );
        })()}
        <a href={href(`faculty/${slug}/`)}>Faculty guide →</a>
      </nav>
    </main>
  );
}

function FacultyPage({ slug }: { slug: string }) {
  const lesson = lessonBySlug.get(slug);
  if (!lesson) return <NotFound/>;
  const { Faculty, Practicum } = lessonContent(slug);
  return (
    <main className="inner-main faculty-main">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <a href={href()}>Curriculum</a>
        <span>→</span>
        <a href={href(`lessons/${slug}/`)}>
          {lesson.manifest.title}
        </a>
        <span>→</span>
        <span>Faculty</span>
      </nav>

      <header className="faculty-hero">
        <p className="eyebrow">Faculty guide</p>
        <h1>{lesson.manifest.title}</h1>
        <p>
          Objectives: {lesson.manifest.pierObjectives.join(", ")}
        </p>
      </header>

      <section className="mdx-content faculty-content">
        {Faculty ? <Faculty /> : <p>Faculty guide is missing.</p>}
      </section>

      {Practicum && (
        <section className="mdx-content practicum-content">
          <Practicum />
        </section>
      )}

      <section className="source-panel">
        <h2>Lesson sources</h2>

        {lesson.manifest.sources.map((source) => (
          <article key={source.label}>
            <h3>
              <a href={source.url}>{source.label}</a>
            </h3>
            <p>{source.use}</p>
            <small>{source.license}</small>
          </article>
        ))}
      </section>
    </main>
  );
}

function NotFound() { return <main className="not-found"><p className="eyebrow">404</p><h1>This curriculum route does not exist.</h1><a className="primary-button" href={href()}>Return to the catalog</a></main>; }

export default function App() {
  const parts = routePath().replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  let page = <HubPage/>;
  if (parts[0] === "topics" && parts[1]) page = <TopicPage slug={parts[1]}/>;
  else if (parts[0] === "lessons" && parts[1]) page = <LessonPage slug={parts[1]}/>;
  else if (parts[0] === "faculty" && parts[1]) page = <FacultyPage slug={parts[1]}/>;
  else if (parts.length) page = <NotFound/>;
  return <SiteChrome>{page}</SiteChrome>;
}
