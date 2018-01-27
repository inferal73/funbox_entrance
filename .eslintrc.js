module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: ['airbnb-base'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  globals: {
    "document": true,
    "window": true,
    "navigator": true,
    "appConfig": true,
  },
  rules: {
    "class-methods-use-this": [0],
    "func-names": [0, "never"],
    "max-len": [1, 180, 2, {"ignoreComments": true}],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "new-cap": ["error", { "properties": false }],
    "radix": [0],
    "no-new": [0],
    "no-unused-vars": [1, {"vars": "local", "args": "none"}],
    "no-use-before-define": [0],
    "import/prefer-default-export": [0],
    "import/no-dynamic-require": [0],
    "no-plusplus": [0],
    "no-prototype-builtins": 0,
    "no-underscore-dangle": 0,
    "no-continue": 0,
    'import/extensions': ['error', 'always', {
      js: 'never'
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',
        'e',
        'card',
      ]
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
