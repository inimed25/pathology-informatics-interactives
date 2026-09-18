import assert from "node:assert/strict";
import test from "node:test";
import { lessons } from "../src/data/curriculum";
import { validationResult } from "../src/data/validation";
import { supplementalQuestions } from "../src/data/supplementalQuestions";

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

test("the optional bank remains separate from the 45 required questions", () => {
  assert.equal(supplementalQuestions.length, 11);
  assert.equal(lessons.reduce((sum, lesson) => sum + lesson.questions.length, 0), 45);
  assert.equal(new Set(supplementalQuestions.map((question) => question.id)).size, 11);
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

test("the capstone has a balanced correct-answer distribution", () => {
  const capstone = lessons.find((lesson) => lesson.manifest.pierObjectives.includes("1.7"));
  assert.ok(capstone);
  assert.deepEqual(
    [0, 1, 2, 3].map(
      (answerIndex) => capstone.questions.filter((question) => question.correctIndex === answerIndex).length,
    ),
    [3, 3, 3, 3],
  );
});

test("every module uses all four correct-answer positions", () => {
  for (const lesson of lessons) {
    assert.deepEqual(
      new Set(lesson.questions.map((question) => question.correctIndex)),
      new Set([0, 1, 2, 3]),
      lesson.manifest.pierObjectives[0],
    );
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
