const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: node(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: () => ({
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			plugins: [

				// require('vite-plugin-windicss').default({
				// 	prefixer: true,
				// 	prefix: 'tw-',
				// 	transformGroups:true,
				// 	transformCSS:"pre"
				// })
			],
			// optimizeDeps: {
			// 	exclude: [
			// 		"@urql/svelte",
			// 		"@urql/exchange-multipart-fetch",
			// 		"@stitches/core",
			// 		"graphql-request",
			// 	],
			// },
		}),



	},
	preprocess: [
		require('svelte-windicss-preprocess').preprocess({
			config: "tailwind.config.cjs",
			kit:true,
			//compile:true,
			// prefix: 'tw-',
			 // verbosity: 1,
			  debug: true,
			// devTools: {
			// 	completions: false,
			// },
		})
	],
};
