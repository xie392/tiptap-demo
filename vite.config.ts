import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "url"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "#": fileURLToPath(new URL("./src/types", import.meta.url)),
      tiptap: fileURLToPath(new URL("./src/tiptap", import.meta.url)),
    },
  },
  define: {
    "process.env": process.env, 
  },
})
