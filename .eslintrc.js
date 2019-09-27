module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': ['standard', 'plugin:react/recommended'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  parser: "babel-eslint",
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'semi': [2, "always"], // 语句强制分号结尾
    'react/prop-types': ['error', { 'ignore': ['dispatch', 'form', 'match', 'location'] }], // 屏蔽对dispatch和form的类型验证
    'standard/no-callback-literal': 0,
    'prefer-promise-reject-errors': 0,// 需要定制reject的数据
  }
}
