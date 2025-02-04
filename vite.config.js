import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps:{
    include:['react-i18next']
  },
  rollupOptions: {
    external: ['@fortawesome/react-fontawesome','@fortawesome/free-solid-svg-icons','react-bootstrap']
  }
})
