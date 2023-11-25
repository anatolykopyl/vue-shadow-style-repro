import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { shadowStyle } from 'vite-plugin-shadow-style'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    shadowStyle(),
  ],
})
