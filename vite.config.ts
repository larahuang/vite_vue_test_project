import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url"
import { resolve } from "path"
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    Pages({
      dirs: [
        { dir: 'src/views/frontdesk/', baseRoute: '/' },//前台
      ]
    }),
    Layouts(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  envDir: resolve(__dirname, './env'),
})
