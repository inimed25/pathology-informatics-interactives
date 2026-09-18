import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { lessons, topics } from "../src/data/curriculum";

const fail = (message: string): never => {
  throw new Error(message);
};

const expectedQuestionCounts = new Map([
  ["1.1", 6], ["1.2", 5], ["1.3", 5], ["1.4", 8],
  ["1.5", 5], ["1.6", 4], ["1.7", 12],
]);

if (topics.length !== 1) fail(`Expected one curriculum topic; found ${topics.length}`);
if (lessons.length !== 7) fail(`Expected seven modules; found ${lessons.length}`);

const expectedObjectives = new Set(topics.flatMap((topic) => topic.objectives));
const coveredObjectives = new Set(lessons.flatMap((lesson) => lesson.manifest.pierObjectives));
for (const objective of expectedObjectives) {
  if (!coveredObjectives.has(objective)) fail(`Objective ${objective} has no primary module`);
}

const ids = new Set<string>();
const slugs = new Set<string>();
let totalQuestions = 0;

for (const lesson of lessons) {
  const { manifest } = lesson;
  const objective = manifest.pierObjectives[0];
  const expectedCount = expectedQuestionCounts.get(objective);
  if (ids.has(manifest.id)) fail(`Duplicate module id ${manifest.id}`);
  if (slugs.has(manifest.slug)) fail(`Duplicate module slug ${manifest.slug}`);
  ids.add(manifest.id);
  slugs.add(manifest.slug);
  if (!lesson.evidence.length || !lesson.trace.length) fail(`${manifest.slug} lacks evidence or trace data`);
  if (expectedCount === undefined) fail(`Unexpected objective ${objective}`);
  if (lesson.questions.length !== expectedCount) {
    fail(`${objective} should have ${expectedCount} questions; found ${lesson.questions.length}`);
  }

  const questionIds = new Set<string>();
  for (const question of lesson.questions) {
    if (questionIds.has(question.id)) fail(`${manifest.slug} has duplicate question id ${question.id}`);
    questionIds.add(question.id);
    if (question.choices.length !== 4) fail(`${question.id} must have four choices`);
    if (question.correctIndex < 0 || question.correctIndex >= question.choices.length) {
      fail(`${question.id} has an invalid correct answer index`);
    }
    if (!question.explanation.trim()) fail(`${question.id} lacks an explanation`);
  }

  totalQuestions += lesson.questions.length;
  const folder = resolve("content", "lessons", manifest.slug);
  for (const file of ["introduction.mdx", "debrief.mdx", "faculty.mdx"]) {
    if (!existsSync(resolve(folder, file))) fail(`${manifest.slug} is missing ${file}`);
  }
}

if (totalQuestions !== 45) fail(`Expected 45 required questions; found ${totalQuestions}`);

const capstone = lessons.find((lesson) => lesson.manifest.pierObjectives.includes("1.7"));
if (!capstone) throw new Error("Capstone module 1.7 is missing");
const capstoneQuestions = capstone.questions;
const capstoneAnswerDistribution = [0, 1, 2, 3].map(
  (answerIndex) => capstoneQuestions.filter((question) => question.correctIndex === answerIndex).length,
);
if (capstoneAnswerDistribution.some((count) => count !== 3)) {
  fail(`Capstone answer distribution should be 3/3/3/3; found ${capstoneAnswerDistribution.join("/")}`);
}

console.log(`Validated ${lessons.length} modules, ${coveredObjectives.size}/${expectedObjectives.size} objectives, and ${totalQuestions} required questions.`);
