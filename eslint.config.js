import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),

  // Node-context config files.
  {
    files: ['*.config.{js,cjs}'],
    languageOptions: { globals: { ...globals.node } },
  },

  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^_', args: 'none' }],
      // This project relies on prop shapes documented via JSDoc, not PropTypes.
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      // react-three-fiber elements use three.js property names that this rule
      // does not know about.
      'react/no-unknown-property': 'off',
    },
  },
])
