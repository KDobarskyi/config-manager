# config-manager

[![build status](https://img.shields.io/travis/KDobarskyi/config-manager.svg)](https://travis-ci.org/KDobarskyi/config-manager)
[![code coverage](https://img.shields.io/codecov/c/github/KDobarskyi/config-manager.svg)](https://codecov.io/gh/KDobarskyi/config-manager)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/KDobarskyi/config-manager.svg)](LICENSE)

> nodejs config manager


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install config-manager
```

[yarn][]:

```sh
yarn add config-manager
```


## Usage

```js
const configManager = require('config-manager');

configManager.localConfigManager.load('agentDriver')

console.log(configManager.agentDriverUpdateProcessor.config);
```


## Contributors

| Name           |
| -------------- |
| **KDobarskyi** |


## License

[MIT](LICENSE) © KDobarskyi


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
