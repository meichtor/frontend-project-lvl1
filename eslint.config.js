import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
  stylistic.configs.recommended,
  js.configs.recommended,
  { files: ['**/*.{js,ts,tsx}'] },
  { ignores: ['dist/'] },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@stylistic/indent': ['error', 2],
    },
  },
]
