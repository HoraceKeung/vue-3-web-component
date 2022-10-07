import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
			customElement: true,
			reactivityTransform: true
		})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
		lib: {
			entry: resolve(__dirname, 'src/main.js'),
			name: 'MyFoo',
			fileName: (format) => format === 'es' ? 'index.js' : `index.${format}.js`
		},
	},
	// https://github.com/vitejs/vite/pull/8090#issuecomment-1184929037
	define: {
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
	},
})
