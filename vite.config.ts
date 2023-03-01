import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
export default defineConfig({
	plugins: [sveltekit()],
	// option on ip address
	server: {
		host: true,
	},
});
