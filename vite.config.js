import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 增加eslint的配置项,这样在运行时就能检查eslint规范
  // eslint() 或
  // eslint({
  //  指定需要检查的文件
  //    include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
  //   })
  plugins: [vue(), eslintPlugin()],
  server: {
    port: 8080 // 启动端口
  }
})
