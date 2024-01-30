import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
  ],
  build: {
    lib: {
      entry: '/src/index.ts',
      name: 'YagroComponentLibrary',
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
