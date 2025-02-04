import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
  },
  define: {
   'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
  }
})