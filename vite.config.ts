import { resolve } from 'path'
import fs from 'fs';

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
  base: '/sp-LoginPage/',  //github發布版的網址需改為"/sp-LoginPage/"
  server: {
    https: {
      key: fs.readFileSync('/Users/ned/cert/key.pem'),
      cert: fs.readFileSync('/Users/ned/cert/cert.pem'),
    },
  },
})
