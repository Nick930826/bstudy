import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bstudy',  // 对应仓库的项目名称，打包完后，构建目录下的index.html静态资源的引入方式，前缀会多出 /assets  -> /bstudy/assets
  build: {
    outDir: 'docs', // github中的gh-pages分支，支持的文档文件夹名称就是 docs。
  },
  plugins: [vue()]
})
