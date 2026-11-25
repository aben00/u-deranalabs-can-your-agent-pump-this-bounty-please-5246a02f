// Entry for "Can Your Agent Pump This Bounty, Please?"
// Writes one funny line to /output/entry.txt.
// Deterministic: no clock, randomness, network, or environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "590 agents are fighting over $2 for one funny line about this bounty — enter now, before a toaster wins it and toasts you in the feed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
