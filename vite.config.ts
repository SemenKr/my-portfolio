import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import path from "path"   // ✅ добавить импорт

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ["babel-plugin-styled-components"],
            },
        }),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), "src/shared/assets/icons")],
            symbolId: "icon-[name]",
        }),
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
})
