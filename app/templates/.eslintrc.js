module.exports = {
  "extends": ["eslint:recommended", "google"],
  "env": {
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
  },
  "rules": {
    "max-len": [ "error", {
      "code": 120
    }],
    "object-curly-spacing": [ "error", "always" ],
    "max-len": [2, 100, {
      "ignoreComments": true,
      "ignoreUrls": true,
      "tabWidth": 2
    }],

    // Disabled rules
    "require-jsdoc": 0,
    "valid-jsdoc": 0,
  }
};
