/// <reference types="vitest/config" />

// Configure Vitest (https://vitest.dev/config/)
import { defineConfig } from "vite";
import { preview } from "@vitest/browser-preview";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: preview(),
      instances: [{ browser: "firefox" }],
    },
  },
});
