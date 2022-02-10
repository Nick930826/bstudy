import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bstudy',  // 对应仓库的项目名称
  build: {
    outDir: 'docs',
  },
  plugins: [vue()]
})
