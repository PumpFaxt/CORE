import { defineConfig } from "npm:vite";
import preact from "npm:@preact/preset-vite";
import { VitePWA } from "npm:vite-plugin-pwa";
import manifest from "./manifest.ts";
import { NodeGlobalsPolyfillPlugin } from "npm:@esbuild-plugins/node-globals-polyfill";

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
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  ssr: { target: "node" },
});
