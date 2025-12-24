import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: 'jh0-0y.github.io',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})