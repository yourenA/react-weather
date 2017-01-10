module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "no-unused-vars": 0,
        "no-var":1,
        "no-console":1,
        "no-alert": 1,
        "no-irregular-whitespace": 2,//不能有不规则的空格
    }
};
