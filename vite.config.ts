import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

export default ({ mode }: any) => {
  const http = loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver({ importStyle: false })]
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dirs: ['src/api/', 'src/components/', 'src/hooks/'],
        dts: 'src/auto-import.d.ts' // 生成 `auto-import.d.ts` 全局声明
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./src/types', import.meta.url)),
        tiptap: fileURLToPath(new URL('./src/tiptap', import.meta.url))
      }
    },
    build: {
      // 生产环境移除console debugger
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  })
}
