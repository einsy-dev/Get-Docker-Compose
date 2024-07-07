const { cpSync } = require("node:fs");
const { resolve } = require("node:path");

cpSync(resolve(__dirname, "../src/template"), resolve(__dirname, "../bin/template"), { recursive: true })