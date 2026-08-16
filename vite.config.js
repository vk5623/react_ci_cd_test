import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/react_ci_cd_test/",
  server:{
    open: true,
    port: 5173
  }
})
