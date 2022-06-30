import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
console.log('__dirname', __dirname)
export default defineConfig({
  plugins: [
    vue()
  ],

  server: {
    port: 3101
  },

  // https://cn.vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/tool-men.ts'),
      name: 'ToolMen',
      // the proper extensions will be added
      fileName: 'tool-men'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      // output: {
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //   globals: {
      //     vue: 'Vue'
      //   }
      // }
    }
  }
})
