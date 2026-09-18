import { useState } from "react";
import type { LessonDefinition } from "../data/types";

export function GenericExperience({
  lesson,
  onAttempt,
}: {
  lesson: LessonDefinition;
  onAttempt?: (attempted: boolean) => void;
}) {
  const [activeTrace, setActiveTrace] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const answeredCount = Object.keys(answers).length;
  const score = lesson.questions.filter(
    (question) => answers[question.id] === question.correctIndex,
  ).length;
  const complete = answeredCount === lesson.questions.length;
  const isCapstone = lesson.manifest.pierObjectives.includes("1.7");

  const answerQuestion = (questionId: string, choiceIndex: number) => {
    setAnswers((current) => ({
      ...current,
      [questionId]: choiceIndex,
    }));

    onAttempt?.(true);
  };

  const reset = () => {
    setActiveTrace(0);
    setAnswers({});
    onAttempt?.(false);
  };

  return (
    <div className="experience">
      <section
        className="lesson-section evidence-section"
        aria-labelledby="evidence-title"
      >
        <div className="section-heading">
          <span className="section-number">05</span>
          <div>
            <p className="eyebrow">Clinical artifact</p>
            <h2 id="evidence-title">Inspect the evidence</h2>
          </div>
        </div>

        <article className="artifact-card">
          <header>
            <span>Synthetic educational artifact</span>
            <strong>{lesson.artifactTitle}</strong>
          </header>

          <dl className="evidence-grid">
            {lesson.evidence.map((item) => (
              <div
                className={`tone-${item.tone ?? "neutral"}`}
                key={item.label}
              >
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </section>

      <section
        className="lesson-section"
        aria-labelledby="trace-title"
      >
        <div className="section-heading">
          <span className="section-number">04</span>
          <div>
            <p className="eyebrow">Trace</p>
            <h2 id="trace-title">Follow it through the system</h2>
          </div>
        </div>

        <p className="section-guidance">
          Follow the information through the workflow and consider where
          meaning, interpretation, or data quality could change.
        </p>

        <div
          className="trace-tabs"
          role="tablist"
          aria-label="Trace steps"
        >
          {lesson.trace.map((step, index) => (
            <button
              key={`${step.system}-${index}`}
              type="button"
              role="tab"
              aria-selected={activeTrace === index}
              className={activeTrace === index ? "active" : ""}
              onClick={() => setActiveTrace(index)}
            >
              <span>{index + 1}</span>
              {step.system}
            </button>
          ))}
        </div>

        <article className="trace-panel" role="tabpanel" aria-live="polite">
          <div>
            <p className="eyebrow">
              {lesson.trace[activeTrace].role}
            </p>
            <h3>{lesson.trace[activeTrace].system}</h3>
            <p>{lesson.trace[activeTrace].sees}</p>
          </div>

          <aside>
            <strong>Why it matters</strong>
            <p>{lesson.trace[activeTrace].implication}</p>
          </aside>
        </article>
      </section>

      <section
        className="lesson-section decision-section"
        aria-labelledby="questions-title"
      >
        <div className="section-heading">
          <span className="section-number">03</span>
          <div>
            <p className="eyebrow">{isCapstone ? "Final assessment" : "Knowledge check"}</p>
            <h2 id="questions-title">{isCapstone ? "Integrate your reasoning" : "Test your understanding"}</h2>
          </div>
        </div>

        <p className="section-guidance">
          {isCapstone
            ? "Apply concepts across the complete curriculum. Feedback appears after each response."
            : "Select the best answer. Feedback appears after each response."}
        </p>

        <div className="assessment-progress" aria-live="polite">
          <div><strong>{answeredCount} of {lesson.questions.length} answered</strong><span>{complete ? `Score: ${score}/${lesson.questions.length}` : "Complete the set to see your score"}</span></div>
          <progress max={lesson.questions.length} value={answeredCount}>{answeredCount} of {lesson.questions.length}</progress>
        </div>

        <nav className="question-nav" aria-label="Question navigation">
          {lesson.questions.map((question, index) => (
            <a className={answers[question.id] === undefined ? "" : "answered"} href={`#${question.id}-card`} key={question.id}>
              <span className="sr-only">Question </span>{index + 1}
            </a>
          ))}
        </nav>

        <div className="question-list">
          {lesson.questions.map((question, questionIndex) => {
            const selectedIndex = answers[question.id];
            const answered = selectedIndex !== undefined;
            const correct =
              answered && selectedIndex === question.correctIndex;

            return (
              <article
                className="question-card"
                id={`${question.id}-card`}
                key={question.id}
              >
                <header>
                  <span>
                    Question {questionIndex + 1} of{" "}
                    {lesson.questions.length}
                  </span>
                </header>

                <h3>{question.question}</h3>

                <div
                  className="choice-grid"
                  role="radiogroup"
                  aria-label={`Question ${questionIndex + 1} choices`}
                >
                  {question.choices.map((choice, choiceIndex) => {
                    const selected = selectedIndex === choiceIndex;

                    return (
                      <button
                        key={`${question.id}-${choiceIndex}`}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        className={selected ? "selected" : ""}
                        onClick={() =>
                          answerQuestion(question.id, choiceIndex)
                        }
                        aria-describedby={answered ? `${question.id}-feedback` : undefined}
                      >
                        <span className="choice-marker" />
                        <strong>{choice}</strong>
                      </button>
                    );
                  })}
                </div>

                {answered && (
                  <div
                    id={`${question.id}-feedback`}
                    className={`feedback ${
                      correct ? "correct" : "incorrect"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    <strong>
                      {correct ? "Correct." : "Not quite."}
                    </strong>
                    <p>{question.explanation}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {complete && (
          <div className="assessment-summary" role="status">
            <p className="eyebrow">{isCapstone ? "Capstone complete" : "Knowledge check complete"}</p>
            <strong>{score} of {lesson.questions.length} correct</strong>
            <p>Review the feedback above or reset the lesson to try the questions again.</p>
          </div>
        )}
      </section>

      <div className="reset-row">
        <button
          type="button"
          className="text-button"
          onClick={reset}
        >
          Reset lesson interactions
        </button>
      </div>
    </div>
  );
}
