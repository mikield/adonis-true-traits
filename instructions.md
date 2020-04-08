
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
