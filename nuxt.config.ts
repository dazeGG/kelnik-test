// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: [
		'nuxt-svgo',
		'@pinia/nuxt',
		'@nuxt/eslint',
	],
	css: [
		'~/assets/styles/index.scss',
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/mixins.scss" as *;',
				},
			},
		},
	},
});
