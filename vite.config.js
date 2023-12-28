import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  
  return {
    plugins: [react()],
    server: {
      open: true, 
    },
    base: mode === "development" ? "" : "/your-custom-path/",
    build: {
      outDir: 'docs'
    },
    envDir:"env",
    define: {
      __APP_ENV__: JSON.stringify("TEST"),
    },
  }
})
