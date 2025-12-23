import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/young_portfolio_front/',  // ← 본인 저장소명으로 변경
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})