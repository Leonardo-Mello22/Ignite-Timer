import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { ESLint } from 'eslint'

export default {
  root: true,
  extends: [
    js.configs.recommended,
    'plugin:@typescript-eslint/recommended',  // Para configurar as regras do TypeScript
  ],
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: [
        'react-hooks',
        'react-refresh',
        '@typescript-eslint', // Para o TypeScript
      ],
      rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
        // Outras regras específicas do TypeScript podem ser adicionadas aqui
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: globals.browser,
    },
  ],
  ignorePatterns: ['dist'],  // Ignora a pasta 'dist'
}
