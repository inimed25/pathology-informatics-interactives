import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { GenericExperience } from "../src/components/GenericExperience";
import { SupplementalQuestionBank } from "../src/components/SupplementalQuestionBank";
import { BiotechHeroVisual, GenomicsPrimer, LessonLens } from "../src/components/BiotechVisuals";
import { lessons } from "../src/data/curriculum";

test("knowledge checks expose labeled semantic controls", () => {
  const html = renderToStaticMarkup(<GenericExperience lesson={lessons[0]} />);
  assert.match(html, /aria-labelledby="questions-title"/);
  assert.match(html, /role="radiogroup"/);
  assert.match(html, /role="radio"/);
  assert.match(html, /aria-label="Question 1 choices"/);
  assert.match(html, /aria-label="Question navigation"/);
  assert.match(html, /<progress[^>]*max="6"[^>]*value="0"/);
  assert.match(html, /aria-live="polite"/);
  assert.doesNotMatch(html, /<button(?![^>]*type="button")/);
});

test("workflow traces expose tabs and a live panel", () => {
  const html = renderToStaticMarkup(<GenericExperience lesson={lessons[0]} />);
  assert.match(html, /role="tablist"/);
  assert.match(html, /role="tab"/);
  assert.match(html, /aria-selected="true"/);
  assert.match(html, /role="tabpanel"/);
});

test("supplemental questions use labeled radio groups and typed buttons", () => {
  const html = renderToStaticMarkup(<SupplementalQuestionBank />);
  assert.match(html, /aria-label="Optional question 1 choices"/);
  assert.match(html, /aria-label="Optional question navigation"/);
  assert.match(html, /<progress[^>]*max="11"[^>]*value="0"/);
  assert.match(html, /role="radiogroup"/);
  assert.match(html, /role="radio"/);
  assert.doesNotMatch(html, /<button(?![^>]*type="button")/);
});

test("the capstone is framed as the final integrated assessment", () => {
  const capstone = lessons.find((lesson) => lesson.manifest.pierObjectives.includes("1.7"));
  assert.ok(capstone);
  const html = renderToStaticMarkup(<GenericExperience lesson={capstone} />);
  assert.match(html, /Final assessment/);
  assert.match(html, /Integrate your reasoning/);
});

test("biotech visual framing preserves useful accessible labels", () => {
  const hero = renderToStaticMarkup(<BiotechHeroVisual />);
  const lens = renderToStaticMarkup(<LessonLens slug="microbiology-genomics-bioinformatics" />);
  const primer = renderToStaticMarkup(<GenomicsPrimer />);
  assert.match(hero, /aria-hidden="true"/);
  assert.match(lens, /aria-label="Lesson concept map"/);
  assert.match(lens, /Sequence data become evidence/);
  assert.match(primer, /aria-labelledby="genomics-primer-title"/);
  assert.match(primer, /Four layers\. One governed result\./);
});
