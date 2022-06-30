import { defineConfig } from 'vite'

const path = require('path')

// https://vitejs.dev/config/
console.log('__dirname', __dirname)
export default defineConfig({
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
  }
})
