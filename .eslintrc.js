module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true,
  },
  globals: {
    __DEV__: true,
    __PROD__: true,
  },
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "plugin:react/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
    "react/prefer-stateless-function": 0,
    "no-param-reassign": 0,
    "react/button-has-type": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "no-plusplus": 0, // ++
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react/prop-types": 0,
    "no-shadow": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": 0,
    "react/display-name": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-deprecated": 0,
    "react/destructuring-assignment": 0,
    "import/prefer-default-export": 0,
    "no-restricted-syntax": 0,
  },
};
