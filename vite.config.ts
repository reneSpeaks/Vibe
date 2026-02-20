import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	server: {
		allowedHosts: true,
		host: '0.0.0.0'
	},
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@components': '/src/components',
			'@hooks': '/src/hooks',
			'@utils': '/src/utils',
			'@assets': '/src/assets',
			'@context': '/src/context',
			'@config': '/src/config',
			'@layouts': '/src/layouts',
			'@pages': '/src/pages'
		}
	},
	build: {
		minify: 'terser',
		terserOptions: {
			compress: true,
			mangle: true
		}
	}
});
