module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json"
    },
    "plugins": [
        "eslint-plugin-import",
        "sort-keys-fix",
        "@typescript-eslint",
    ],
    "rules": {
        "no-use-before-define": "off",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/indent": [
            "error",
            2
        ],
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/no-use-before-define": ["error", {
            "functions": true,
            "classes": false,
            "variables": true,
            "allowNamedExports": false
        }],
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/return-await": "off",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "import/extensions": [
            "error",
            "never"
        ],
        "import/no-extraneous-dependencies": "off",
        "import/no-useless-path-segments": "off",
        "import/order": ["error", {
            "pathGroupsExcludedImportTypes": ["builtin"],
            "pathGroups": [{
                "pattern": "@app/**",
                "group": "external",
                "position": "after"
            }, {
                "pattern": "@sdk/**",
                "group": "external",
                "position": "after"
            }],
            "alphabetize": {
                "order": "asc"
            }
        }],
        "import/prefer-default-export": "off",
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "default-case": "off",
        "function-paren-newline": "off",
        "implicit-arrow-linebreak": "off",
        "linebreak-style": "off",
        "max-classes-per-file": "off",
        "max-len": "off",
        "newline-per-chained-call": "off",
        "no-else-return": "off",
        "no-mixed-operators": "off",
        "no-nested-ternary": "off",
        "no-param-reassign": "off",
        "no-plusplus": "off",
        "no-prototype-builtins": "off",
        "no-restricted-syntax": "off",
        "object-curly-newline": [
            "error",
            {
                "ObjectExpression": {
                    "consistent": true
                },
                "ObjectPattern": {
                    "consistent": true
                },
                "ImportDeclaration": "never",
                "ExportDeclaration": "never"
            }
        ],
        "operator-linebreak": "off",
        "prefer-destructuring": "off",
        "sort-imports": [
            "error",
            {
                "ignoreCase": true,
                "ignoreDeclarationSort": true
            }
        ],
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
};
