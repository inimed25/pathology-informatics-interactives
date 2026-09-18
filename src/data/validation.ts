import type { LessonDefinition } from "./types";

export const validationResult = (
  lesson: LessonDefinition,
  answers: Record<string, number>,
) => {
  const questions = lesson.questions.map((question) => ({
    id: question.id,
    passed: answers[question.id] === question.correctIndex,
  }));

  return {
    passed: questions.filter((question) => question.passed).length,
    total: questions.length,
    questions,
  };
};
