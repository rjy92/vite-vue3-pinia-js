import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...loadEnv(mode, process.cwd()) }
  const packageName = process.env.VITE_APP_PRODUCT
  const url = '/' + packageName
  const port = process.env.VITE_APP_PORT || 65535
  const isDevelopment = process.env.NODE_ENV === 'development'

  const proxy = {
    [url]: {
      target: process.env.VITE_APP_BASE_HOST,
      secure: false,
      changeOrigin: true,
      onProxyReq: proxyReq => {
        const host = process.env.VITE_APP_BASE_HOST.replace(/\/$/, '')
        const referer = `${host}/${process.env.VITE_APP_PRODUCT}/`
        proxyReq.setHeader('origin', process.env.VITE_APP_BASE_HOST) // 检测登录接口安全认证，
        proxyReq.setHeader('referer', referer) // 检测jsp页是否检查请求来源
      }
    }
  }

  console.log('process.env', proxy)
  return {
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
      proxy,
      port,
      server: isDevelopment ? process.env.VITE_APP_BASE_HOST.split('://')[0] : 'https', // 'http' | 'https' | 'spdy'
      client: {
        overlay: {
          warnings: false,
          errors: false
        }
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
})
