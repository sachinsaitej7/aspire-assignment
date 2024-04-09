import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//vite-plugin-svgr
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(),],
  // alias 
  resolve: {
    alias: {
      "@assets": "/src/assets",
    },
  },
})
