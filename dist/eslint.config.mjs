import eslintConfig from 'orimay-config-eslint';
import tseslint from 'typescript-eslint';
const config = tseslint.config(...eslintConfig, {
    rules: {
        'vue/no-dupe-keys': 'off',
        'vue/no-reserved-keys': 'off',
        'vue/block-order': [
            'error',
            {
                order: ['script:not([setup])', 'script[setup]', 'template', 'style'],
            },
        ],
        // 'vue/component-name-in-template-casing': [
        //   'error',
        //   'PascalCase',
        //   {
        //     ignores: [],
        //     registeredComponentsOnly: false,
        //   },
        // ],
        'vue/html-indent': 'off',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    component: 'always',
                    normal: 'never',
                    void: 'always',
                },
                math: 'always',
                svg: 'always',
            },
        ],
        'vue/multi-word-component-names': 'off',
        'vue/no-mutating-props': 'off',
        'vue/no-ref-as-operand': 'warn',
        'vue/operator-linebreak': [
            'error',
            'after',
            { overrides: { ':': 'before', '?': 'before' } },
        ],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/v-slot-style': [
            'error',
            {
                atComponent: 'shorthand',
                default: 'shorthand',
                named: 'shorthand',
            },
        ],
        'vue/valid-v-slot': ['off'],
        'vue/prefer-use-template-ref': ['error'],
    },
});
export function fromNuxtConfigComposer(withNuxt) {
    const configNew = {};
    for (const cfg of config) {
        configNew.files = [...(configNew.files ?? []), ...(cfg.files ?? [])];
        configNew.ignores = [...(configNew.ignores ?? []), ...(cfg.ignores ?? [])];
        configNew.plugins = { ...configNew.plugins, ...cfg.plugins };
        configNew.rules = { ...configNew.rules, ...cfg.rules };
        configNew.languageOptions = {
            ...configNew.languageOptions,
            ...cfg.languageOptions,
        };
        configNew.linterOptions = {
            ...configNew.linterOptions,
            ...cfg.linterOptions,
        };
    }
    configNew.rules = {
        ...configNew.plugins?.['@stylistic'].rules,
        ...configNew.plugins?.['@typescript-eslint'].rules,
        ...configNew.rules,
    };
    delete configNew.plugins?.['@stylistic'];
    delete configNew.plugins?.['@typescript-eslint'];
    for (const readonlyField of readonlyFields) {
        delete configNew.rules?.[readonlyField];
    }
    const { rules, ...cfg } = configNew;
    return withNuxt({
        ignores: ['.nuxt/**', '.nuxt-storybook/**'],
    })
        .append(cfg)
        .overrideRules(rules ?? {});
}
const readonlyFields = [
    'constructor-super',
    'for-direction',
    'getter-return',
    'no-async-promise-executor',
    'no-case-declarations',
    'no-class-assign',
    'no-compare-neg-zero',
    'no-cond-assign',
    'no-const-assign',
    'no-constant-binary-expression',
    'no-constant-condition',
    'no-control-regex',
    'no-debugger',
    'no-delete-var',
    'no-dupe-args',
    'no-dupe-class-members',
    'no-dupe-else-if',
    'no-dupe-keys',
    'no-duplicate-case',
    'no-empty',
    'no-empty-character-class',
    'no-empty-pattern',
    'no-empty-static-block',
    'no-ex-assign',
    'no-extra-boolean-cast',
    'no-fallthrough',
    'no-func-assign',
    'no-global-assign',
    'no-import-assign',
    'no-invalid-regexp',
    'no-irregular-whitespace',
    'no-loss-of-precision',
    'no-misleading-character-class',
    'no-new-native-nonconstructor',
    'no-nonoctal-decimal-escape',
    'no-obj-calls',
    'no-octal',
    'no-prototype-builtins',
    'no-redeclare',
    'no-regex-spaces',
    'no-self-assign',
    'no-setter-return',
    'no-shadow-restricted-names',
    'no-sparse-arrays',
    'no-this-before-super',
    'no-undef',
    'no-unexpected-multiline',
    'no-unreachable',
    'no-unsafe-finally',
    'no-unsafe-negation',
    'no-unsafe-optional-chaining',
    'no-unused-labels',
    'no-unused-private-class-members',
    'no-unused-vars',
    'no-useless-backreference',
    'no-useless-catch',
    'no-useless-escape',
    'no-with',
    'require-yield',
    'use-isnan',
    'valid-typeof',
];
//# sourceMappingURL=eslint.config.mjs.map