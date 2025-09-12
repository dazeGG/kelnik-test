// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import js from '@eslint/js'
import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'

const tsConfig = {
	files: ['**/*.ts', '**/*.vue'],
	languageOptions: {
		parser: vueParser,
		parserOptions: {
			parser: typescriptParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			extraFileExtensions: ['.vue']
		},
		globals: {
			...globals.browser,
			...globals.node,
			process: 'readonly'
		}
	},
	plugins: {
		'@typescript-eslint': typescriptPlugin
	},
	rules: {
		curly: ['error', 'all'],
		quotes: ['error', 'single', { 'avoidEscape': true }],
		'comma-dangle': ['error', 'always-multiline'],
		semi: ['error', 'always'],
		'indent': ['error', 'tab'],
		'brace-style': 'error',
		'keyword-spacing': ['error', { 'before': true, 'after': true }],
		'space-before-blocks': ['error', 'always'],
		'template-curly-spacing': 'error',
		'object-curly-spacing': ['error', 'always', { 'arraysInObjects': true, 'objectsInObjects': true }],
		'array-bracket-spacing': ['error', 'never'],
		'multiline-ternary': ['error', 'always-multiline'],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'eol-last': ['error', 'always'],
		'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
		'linebreak-style': ['error', 'unix'],
		camelcase: ['error', { properties: 'never' }],
		'no-trailing-spaces': 'error',
		'object-curly-newline': ['error', {
			'ObjectExpression': { 'consistent': true, 'multiline': true },
			'ObjectPattern': { 'multiline': true },
			'ImportDeclaration': { 'multiline': true },
			'ExportDeclaration': 'always'
		}],
		'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
		'max-statements-per-line': ['error', { 'max': 1 }],
		'space-before-function-paren': 'error',

		'vue/multi-word-component-names': 'off',
		'vue/html-self-closing': ['error', {
			'html': {
				'void': 'always',
				'normal': 'never',
				'component': 'always'
			},
			'svg': 'always',
			'math': 'always'
		}],
		'vue/html-closing-bracket-spacing': ['error', {
			'startTag': 'never',
			'endTag': 'never',
			'selfClosingTag': 'always'
		}],
		'vue/html-indent': ['error', 'tab', {
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': []
		}],
		'vue/component-name-in-template-casing': ['error', 'PascalCase', {
			'registeredComponentsOnly': true,
			'ignores': []
		}],
		'vue/attributes-order': ['error', {
			'order': [
				'DEFINITION',
				'CONDITIONALS',
				'LIST_RENDERING',
				'RENDER_MODIFIERS',
				'GLOBAL',
				['UNIQUE', 'SLOT'],
				'TWO_WAY_BINDING',
				'OTHER_DIRECTIVES',
				'OTHER_ATTR',
				'EVENTS',
				'CONTENT'
			],
			'alphabetical': false
		}],
		'vue/attribute-hyphenation': ['error', 'always', {
			'ignore': []
		}],
		'vue/max-attributes-per-line': ['error', {
			'singleline': {
				'max': 5
			},
			'multiline': {
				'max': 1
			}
		}],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				'singleline': 'never',
				'multiline': 'always',
				'selfClosingTag': {
					'singleline': 'never',
					'multiline': 'always'
				}
			}
		],
		'vue/first-attribute-linebreak': ['error', {
			'singleline': 'ignore',
			'multiline': 'below'
		}],
		'vue/multiline-html-element-content-newline': 'error',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-explicit-any': 'warn'
	}
}

export default withNuxt(
	js.configs.recommended,
	tsConfig
)
