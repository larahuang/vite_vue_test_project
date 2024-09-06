# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

### 安裝Vite專案
Node 版本 18.12.1
### 開發環境啟動
```
npm install
```
### 開發環境啟動
```
npm run dev
```
### 環境變數設定

處理錯誤：修改vite.config.ts配置與安裝 @types/node
安裝@types/node
```
npm install --save-dev @types/node

```
vite.config.ts新增
```
import { fileURLToPath, URL } from "node:url"
import { resolve } from "path"

export default defineConfig({
    base: '/',
    resolve: {
        alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    envDir: resolve(__dirname, './env'),
});
```

### 安裝 Tailwind
