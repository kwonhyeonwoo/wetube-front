import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import svgr from 'vite-plugin-svgr'; // 이 줄 추가
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
})
