import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function read(file: string): string {
  return readFileSync(resolve(__dirname, file), "utf8");
}

function write(dir: string, content: string): boolean {
  writeFileSync(dir, content, "utf8");
  return true;
}

function indexInsert(pattern: string, replacement: string) {
  const content = read("./template/index.yml");
  return content.replace(pattern, "$&\n" + replacement);
}

export { read, write, indexInsert };
