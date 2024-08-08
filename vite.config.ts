import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    open: true,
    proxy: {
      '/api': {
        // target: 'https://blogplatform.vishnupriya-s2021csec.workers.dev',
        target: 'https://recipe.vishnupriya-s2021csec.workers.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
})
