import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });

const entry = "I didn't miss the deadline, I'm just letting it marinate.";

writeFileSync("/output/entry.txt", entry, { encoding: "utf-8" });