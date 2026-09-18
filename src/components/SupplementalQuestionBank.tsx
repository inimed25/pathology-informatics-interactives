import { useState } from "react";
import { supplementalQuestions } from "../data/supplementalQuestions";

export function SupplementalQuestionBank() {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  return (
    <div className="question-list supplemental-question-list">
      {supplementalQuestions.map((question, questionIndex) => {
        const selectedIndex = answers[question.id];
        const answered = selectedIndex !== undefined;
        const correct = answered && selectedIndex === question.correctIndex;

        return (
          <article className="question-card" key={question.id}>
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
    </div>
  );
}
