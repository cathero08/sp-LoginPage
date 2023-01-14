import { resolve } from 'path'
import fs from 'fs';
import { createHtmlPlugin }from 'vite-plugin-html';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import pkg from './package.json';

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

dayjs.extend(utc);
dayjs.extend(timezone);

// https://vitejs.dev/config/
export default defineConfig((config) => {
  const env = config.mode;
  return {
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            ver: pkg.version,
            buildTime: dayjs().tz("Asia/Taipei").format('YYYYMMDDHHmmss'),
          },
        },
      }),],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') //路徑別名
      }
    },
    base: '/sp-LoginPage/',  //github發布版的網址需改為"/sp-LoginPage/"
    server: env === 'dev' ? {
      https: {
        key: fs.readFileSync('/Users/ned/cert/key.pem'),
        cert: fs.readFileSync('/Users/ned/cert/cert.pem'),
      },
    } : {},
  }
})
