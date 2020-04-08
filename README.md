<h1 align="center">Welcome to Adonis True Traits 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.7-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/mikield/adonis-true-traits#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/mikield/adonis-true-traits/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/mikield/adonis-true-traits/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/mikield/Adonis True Traits" />
  </a>
  <a href="https://twitter.com/AdmiralMiki" target="_blank">
    <img alt="Twitter: AdmiralMiki" src="https://img.shields.io/twitter/follow/AdmiralMiki.svg?style=social" />
  </a>
</p>

> The true traits for AdonisJS Framework (extending the class with native `extend` function)

### 🏠 [Homepage](https://github.com/mikield/adonis-true-traits#readme)

## Install

```sh
adonis install @mikield/adonis-true-traits
```

### Registering provider

Make sure you register the provider inside `start/app.js` file before making use.

```js
const providers = [
  ...,
  '@mikield/adonis-true-traits'
]
```


## Usage
```js
mix(SomeClass).with(SomeTrait, AnotherTrait, ...)
```

##### Mixin a `User` model with `MyTrait` class

```js
"use strict";

const Model = use('Model')
const MyTrait = use('App/Models/Traits/MyTrait')

class User extends Model {
 
}

module.exports = mix(User).with(MyTrait)
```


### A exampole of `MyTrait` class
```js
"use strict";

const Trait = (Model) => class extends Model {
    myFunction(){
      return "Hi from the Trait"
    }

    get myParam(){
      return "The param from Trait"
    }
}

module.exports = Trait;
```

## Author

👤 **Vladyslav Gaysyuk <mikield@icloud.com>**

* Website: https://mikield.rocks
* Twitter: [@AdmiralMiki](https://twitter.com/AdmiralMiki)
* Github: [@mikield](https://github.com/mikield)
* LinkedIn: [@mikield](https://linkedin.com/in/mikield)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/mikield/adonis-true-traits/issues). You can also take a look at the [contributing guide](https://github.com/mikield/adonis-true-traits/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/mikield">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2020 [Vladyslav Gaysyuk <mikield@icloud.com>](https://github.com/mikield).<br />
This project is [MIT](https://github.com/mikield/adonis-true-traits/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_