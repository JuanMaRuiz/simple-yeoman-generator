module.exports = {
    "extends": "google",
    "env": {
      "node": true,
      "es6": true
    },
    "rules": {
      "max-len": [ "error", {
        "code": 120
      }],
      "object-curly-spacing": [ "error", "always" ],
      "require-jsdoc": ["error", {
        "require": {
            "FunctionDeclaration": false,
            "MethodDefinition": false,
            "ClassDeclaration": false,
            "ArrowFunctionExpression": false,
            "FunctionExpression": false
        }
      }]
    }
};
