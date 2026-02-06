import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to repo name for GitHub Pages deployment
  // Change 'trial-project' to your actual GitHub repo name
  base: '/trial-project/',
})
