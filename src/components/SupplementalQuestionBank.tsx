import { useState } from "react";
import { supplementalQuestions } from "../data/supplementalQuestions";

export function SupplementalQuestionBank() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const answeredCount = Object.keys(answers).length;
  const score = supplementalQuestions.filter(
    (question) => answers[question.id] === question.correctIndex,
  ).length;
  const complete = answeredCount === supplementalQuestions.length;

  return (
    <>
      <div className="assessment-progress" aria-live="polite">
        <div><strong>{answeredCount} of {supplementalQuestions.length} answered</strong><span>{complete ? `Score: ${score}/${supplementalQuestions.length}` : "Optional practice does not affect curriculum completion"}</span></div>
        <progress max={supplementalQuestions.length} value={answeredCount}>{answeredCount} of {supplementalQuestions.length}</progress>
      </div>
      <nav className="question-nav" aria-label="Optional question navigation">
        {supplementalQuestions.map((question, index) => (
          <a className={answers[question.id] === undefined ? "" : "answered"} href={`#${question.id}-card`} key={question.id}>
            <span className="sr-only">Optional question </span>{index + 1}
          </a>
        ))}
      </nav>
      <div className="question-list supplemental-question-list">
      {supplementalQuestions.map((question, questionIndex) => {
        const selectedIndex = answers[question.id];
        const answered = selectedIndex !== undefined;
        const correct = answered && selectedIndex === question.correctIndex;

        return (
          <article className="question-card" id={`${question.id}-card`} key={question.id}>
            <header>
              <span>Optional question {questionIndex + 1} of {supplementalQuestions.length}</span>
              <span>Module {question.module} · {question.moduleTitle}</span>
            </header>
            <h3>{question.question}</h3>
            <div className="choice-grid" role="radiogroup" aria-label={`Optional question ${questionIndex + 1} choices`}>
              {question.choices.map((choice, choiceIndex) => (
                <button
                  aria-checked={selectedIndex === choiceIndex}
                  aria-describedby={answered ? `${question.id}-feedback` : undefined}
                  className={selectedIndex === choiceIndex ? "selected" : ""}
                  key={`${question.id}-${choiceIndex}`}
                  onClick={() => setAnswers((current) => ({ ...current, [question.id]: choiceIndex }))}
                  role="radio"
                  type="button"
                >
                  <span className="choice-marker" />
                  <strong>{choice}</strong>
                </button>
              ))}
            </div>
            {answered && (
              <div id={`${question.id}-feedback`} className={`feedback ${correct ? "correct" : "incorrect"}`} role="status" aria-live="polite">
                <strong>{correct ? "Correct." : "Not quite."}</strong>
                <p>{question.explanation}</p>
              </div>
            )}
          </article>
        );
      })}
      <div className="reset-row">
        <button className="text-button" onClick={() => setAnswers({})} type="button">Reset optional questions</button>
      </div>
      {complete && (
        <div className="assessment-summary" role="status">
          <p className="eyebrow">Optional bank complete</p>
          <strong>{score} of {supplementalQuestions.length} correct</strong>
          <p>Review the feedback above or reset the bank for another attempt.</p>
        </div>
      )}
      </div>
    </>
  );
}
