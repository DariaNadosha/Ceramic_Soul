import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import FullReload from "vite-plugin-full-reload";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        ViteImageOptimizer({
            includePublic: true,
            cache: true,

            png: {
                quality: 80,
            },

            jpeg: {
                quality: 80,
            },

            webp: {
                quality: 80,
            },

            avif: {
                quality: 60,
            },

            svg: {
                multipass: true,
            },
        }),
        ViteEjsPlugin({
            title: "Ceramic Soul",
        }),
        FullReload(["src/templates/**/*.html"]),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                catalog: resolve(__dirname, "catalog.html"),
                blog: resolve(__dirname, "blog.html"),
                about: resolve(__dirname, "about.html"),
            },
        },
    },
});
