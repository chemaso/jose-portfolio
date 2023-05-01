module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    window: true,
    document: true
  },
  settings: {
    'import/resolver': {
      browser: ['src']
    },
    react: {
      version: '18.2.0'
    }
  },
  overrides: [
    {
      files: ['*.js', '*.jsx']
    }
  ]
};
