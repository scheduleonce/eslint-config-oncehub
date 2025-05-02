import { test } from "node:test";
import assert from "node:assert/strict";
import { ESLint } from "eslint";
import rulesSnapshot from "./rules-snapshot.json" with { "type": "json" }

test("ESLint config rules should match rules snapshot", async (t) => {
  const eslint = new ESLint({ overrideConfigFile: "index.js" });
  const config = await eslint.calculateConfigForFile("index.js");
  assert.deepEqual(config.rules, rulesSnapshot);
});
