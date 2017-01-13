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
            "error",
            "always"
        ],
        "indent": ["error", 4],
        "no-unused-vars": 0,
        "no-var":1,
        "no-console":1,
        "no-alert": 1,
        "no-irregular-whitespace": 2,//不能有不规则的空格
    },
    "globals": { // 即插件在执行过程中用到的其它全局变量
        "React":true,
        "ReactDOM":true,
        "$":true
    }

};
