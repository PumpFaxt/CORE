import { defineConfig } from "vite";

import preact from "npm:@preact/preset-vite";
import { VitePWA } from "npm:vite-plugin-pwa";
import manifest from "./manifest.ts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: manifest,
    }),
  ],

  resolve: { alias: { "privy": "@privy-io/react-auth" } },

  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
});
