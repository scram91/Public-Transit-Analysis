import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import { resolve } from 'dns';

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

//https://vitejs.dev/config
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ],
  server: {
    proxy: {
      "/main/time": "http://localhost:8000"
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        routes: resolve(__dirname, 'routes', 'index.html'),

      }
    }
  }
})
