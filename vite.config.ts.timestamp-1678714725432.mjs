// vite.config.ts
import { defineConfig, loadEnv } from "file:///F:/%E5%89%8D%E7%AB%AFdemo/tiptap/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/%E5%89%8D%E7%AB%AFdemo/tiptap/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { fileURLToPath, URL } from "url";
import Components from "file:///F:/%E5%89%8D%E7%AB%AFdemo/tiptap/node_modules/unplugin-vue-components/dist/vite.mjs";
import { AntDesignVueResolver } from "file:///F:/%E5%89%8D%E7%AB%AFdemo/tiptap/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import AutoImport from "file:///F:/%E5%89%8D%E7%AB%AFdemo/tiptap/node_modules/unplugin-auto-import/dist/vite.js";
var __vite_injected_original_import_meta_url = "file:///F:/%E5%89%8D%E7%AB%AFdemo/tiptap/vite.config.ts";
var vite_config_default = ({ mode }) => {
  const http = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver({ importStyle: false })]
      }),
      AutoImport({
        imports: ["vue", "vue-router"],
        dirs: ["src/api/", "src/components/", "src/hooks/"],
        dts: "src/auto-import.d.ts"
        // 生成 `auto-import.d.ts` 全局声明
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
        "#": fileURLToPath(new URL("./src/types", __vite_injected_original_import_meta_url)),
        tiptap: fileURLToPath(new URL("./src/tiptap", __vite_injected_original_import_meta_url))
      }
    },
    build: {
      // 生产环境移除console debugger
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      chunkSizeWarningLimit: 1e3,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
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
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxcdTUyNERcdTdBRUZkZW1vXFxcXHRpcHRhcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcXHU1MjREXHU3QUVGZGVtb1xcXFx0aXB0YXBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6LyVFNSU4OSU4RCVFNyVBQiVBRmRlbW8vdGlwdGFwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAndXJsJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IEFudERlc2lnblZ1ZVJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcblxuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9OiBhbnkpID0+IHtcbiAgY29uc3QgaHR0cCA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSlcblxuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoKSxcbiAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICByZXNvbHZlcnM6IFtBbnREZXNpZ25WdWVSZXNvbHZlcih7IGltcG9ydFN0eWxlOiBmYWxzZSB9KV1cbiAgICAgIH0pLFxuICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgIGltcG9ydHM6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInXSxcbiAgICAgICAgZGlyczogWydzcmMvYXBpLycsICdzcmMvY29tcG9uZW50cy8nLCAnc3JjL2hvb2tzLyddLFxuICAgICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnQuZC50cycgLy8gXHU3NTFGXHU2MjEwIGBhdXRvLWltcG9ydC5kLnRzYCBcdTUxNjhcdTVDNDBcdTU4RjBcdTY2MEVcbiAgICAgIH0pXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICAgJyMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL3R5cGVzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgIHRpcHRhcDogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy90aXB0YXAnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgICAgfVxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIC8vIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1NzlGQlx1OTY2NGNvbnNvbGUgZGVidWdnZXJcbiAgICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpZC50b1N0cmluZygpLnNwbGl0KCdub2RlX21vZHVsZXMvJylbMV0uc3BsaXQoJy8nKVswXS50b1N0cmluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgbGVzczoge1xuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdQLFNBQVMsY0FBYyxlQUFlO0FBQzlSLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWUsV0FBVztBQUNuQyxPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLGdCQUFnQjtBQUxzSCxJQUFNLDJDQUEyQztBQU85TCxJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQVc7QUFDaEMsUUFBTSxPQUFPLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQztBQUV4QyxTQUFPLGFBQWE7QUFBQSxJQUNsQixTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixXQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMscUJBQXFCLEVBQUUsYUFBYSxNQUFNLENBQUMsQ0FBQztBQUFBLE1BQzFELENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFNBQVMsQ0FBQyxPQUFPLFlBQVk7QUFBQSxRQUM3QixNQUFNLENBQUMsWUFBWSxtQkFBbUIsWUFBWTtBQUFBLFFBQ2xELEtBQUs7QUFBQTtBQUFBLE1BQ1AsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsUUFDcEQsS0FBSyxjQUFjLElBQUksSUFBSSxlQUFlLHdDQUFlLENBQUM7QUFBQSxRQUMxRCxRQUFRLGNBQWMsSUFBSSxJQUFJLGdCQUFnQix3Q0FBZSxDQUFDO0FBQUEsTUFDaEU7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUE7QUFBQSxNQUVMLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxRQUNiLFVBQVU7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLGVBQWU7QUFBQSxRQUNqQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLHVCQUF1QjtBQUFBLE1BQ3ZCLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQSxVQUNOLGFBQWEsSUFBSTtBQUNmLGdCQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IscUJBQU8sR0FBRyxTQUFTLEVBQUUsTUFBTSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxTQUFTO0FBQUEsWUFDeEU7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixtQkFBbUI7QUFBQSxRQUNyQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbXQp9Cg==
