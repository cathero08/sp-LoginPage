import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') //路徑別名
    }
  },
  base: '/sp-project/', //github發布版的網址需改為"/sp-project/"?????
})
