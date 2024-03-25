import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})


// The vite.config.js file is primarily for configuring the Vite build tool to work with my React project, and it doesn't have a direct relationship with the SVG files. The decision to include or exclude the SVG files would depend more on visual design choices and whether they contribute to the overall presentation and functionality of my portfolio.