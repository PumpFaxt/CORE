import { defineConfig } from "vite";
import devServer from "@hono/vite-dev-server";
import bunAdapter from "@hono/vite-dev-server/bun";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: ["./app/main.tsx"],
            output: {
                entryFileNames: "static/client.js",
                chunkFileNames: "static/assets/[name]-[hash].js",
                assetFileNames: "static/assets/[name].[ext]",
            },
        },
        emptyOutDir: false,
        copyPublicDir: false,
    },
    publicDir: "public",
    plugins: [
        tailwindcss(),
        devServer({
            entry: "server.ts",
            adapter: bunAdapter(),
        }),
    ],
});
