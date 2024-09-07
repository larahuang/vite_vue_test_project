import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
    plugins: [
        vue(),
    ],
    test: { 
        include: ['**/*.spec.js'],
       globals: true,
       // environment: 'jsdom',
        environment: 'happy-dom',
        
        coverage: {
            provider: 'v8', // or 'v8'
           // reporter: ['text', 'html'],
          //  reportsDirectory: './tests/unit/coverage',
        },
    },
})