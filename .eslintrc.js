module.exports = {
    "env": {
        "browser": false,
        "node": true,
        "es6": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "space-before-blocks": "error",
        "indent": [ 2, 4 ],
        "space-before-function-paren": [
            "error",
            "always"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "max-len": [
          "error",
          150
        ],
        "no-console": [
          "error",
          { "allow": ["warn", "error"] }
      ],
      "brace-style": "error"
    }
};