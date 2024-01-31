// vite.config.ts
/// <reference types="vitest" />
import process from 'node:process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  test: {
    includeSource: ['src/composables/**/*.{js,ts}'],
  },
  server: {
    // Open the browser in development mode only
    open: process.env.NODE_ENV === 'development',
  },
  define: {
    // This removes the test code from the production build
    'import.meta.vitest': 'undefined',
  },
  plugins: [
    vue(),
    UnoCSS(),
  ],
  build: {
    lib: {
      entry: '/src/index.ts',
      name: 'YagroComposables',
      fileName: format => `yagro-composables.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'unocss'],
      output: {
        globals: {
          vue: 'Vue',
          unocss: 'UnoCSS',
        },
      },
      plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
      ],
    },
  },
})
