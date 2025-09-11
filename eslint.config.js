import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react' // Добавляем react plugin
import tseslint from 'typescript-eslint'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked, // Заменяем на recommendedTypeChecked
            ...tseslint.configs.stylisticTypeChecked,   // Добавляем стилистические правила
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                React: 'readonly',     // Явно добавляем React глобалы
                JSX: 'readonly',
            },
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'], // Добавляем project для type-aware правил
                tsconfigRootDir: import.meta.dirname,
            },
        },
        settings: { react: { version: '18.3' } }, // Добавляем настройки React
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            react, // Добавляем react plugin
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            ...react.configs.recommended.rules,       // Добавляем recommended правила React
            ...react.configs['jsx-runtime'].rules,    // Добавляем JSX runtime правила
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
)
