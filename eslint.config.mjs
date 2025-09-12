// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import js from '@eslint/js'
import nuxtEslintConfig from '@nuxt/eslint-config'

const customRules = {
	rules: {
		curly: ['error', 'all'],
		'indent': ['error', 'tab'],
		'comma-dangle': ['error', 'always-multiline'],
		'vue/multi-word-component-names': 'off',
	},
}

export default withNuxt(
	js.configs.recommended,
	nuxtEslintConfig(),
	customRules,
)
