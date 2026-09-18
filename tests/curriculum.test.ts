import assert from "node:assert/strict";
import test from "node:test";
import { lessons } from "../src/data/curriculum";
import { validationResult } from "../src/data/validation";

test("the required curriculum contains 45 questions in the intended distribution", () => {
  const distribution = Object.fromEntries(
    lessons.map((lesson) => [lesson.manifest.pierObjectives[0], lesson.questions.length]),
  );
  assert.deepEqual(distribution, {
    "1.1": 6, "1.2": 5, "1.3": 5, "1.4": 8,
    "1.5": 5, "1.6": 4, "1.7": 12,
  });
  assert.equal(lessons.reduce((sum, lesson) => sum + lesson.questions.length, 0), 45);
});

test("every question has four choices, one valid answer, and feedback", () => {
  for (const lesson of lessons) {
    for (const question of lesson.questions) {
      assert.equal(question.choices.length, 4, question.id);
      assert.ok(question.correctIndex >= 0 && question.correctIndex < 4, question.id);
      assert.ok(question.explanation.trim().length > 0, question.id);
    }
  }
});

test("question scoring recognizes correct and unanswered responses", () => {
  const lesson = lessons[0];
  const answers = Object.fromEntries(
    lesson.questions.map((question) => [question.id, question.correctIndex]),
  );
  assert.deepEqual(validationResult(lesson, answers), {
    passed: lesson.questions.length,
    total: lesson.questions.length,
    questions: lesson.questions.map((question) => ({ id: question.id, passed: true })),
  });
  assert.equal(validationResult(lesson, {}).passed, 0);
});
