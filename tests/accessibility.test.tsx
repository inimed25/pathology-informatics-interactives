import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { GenericExperience } from "../src/components/GenericExperience";
import { lessons } from "../src/data/curriculum";

test("knowledge checks expose labeled semantic controls", () => {
  const html = renderToStaticMarkup(<GenericExperience lesson={lessons[0]} />);
  assert.match(html, /aria-labelledby="questions-title"/);
  assert.match(html, /role="radiogroup"/);
  assert.match(html, /role="radio"/);
  assert.match(html, /aria-label="Question 1 choices"/);
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
