import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { compile } from "svelte/compiler";

describe("public components", () => {
  for (const component of ["ActionLink", "ArrowLink"]) {
    it(`${component} compiles for server rendering`, async () => {
      const filename = new URL(`../src/${component}.svelte`, import.meta.url);
      const source = await readFile(filename, "utf8");
      const result = compile(source, {
        filename: filename.pathname,
        generate: "server",
      });
      expect(result.warnings).toEqual([]);
      expect(result.js.code).toContain("href");
    });
  }
});
