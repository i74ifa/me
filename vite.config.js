import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');

// import { createHtmlPlugin } from 'vite-plu'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: [
      {
        find: '@', replacement: path.resolve(__dirname, 'src')
      }
    ]
  }
})
