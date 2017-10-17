# adonis-laravel-broadcaster
The real traits for AdonisJS. This kind of traits uses native class extend function.

## Registering provider

Make sure you register the provider inside `start/app.js` file before making use.

```js
const providers = [
  ...,
  '@mikield/adonis-true-traits'
]
```

# Usage
```js
  mix(SomeClass).with(SomeTrait, AnotherTrait, ...)
```
As example a Model Trait:

```js
const Model = use('Model')
const MyTrait = use('App/Models/Traits/MyTrait')

class User extends Model {
 
}

module.exports = mix(User).with(MyTrait)
```

### And example of the Trait
```js
"use strict";

const Trait = (BaseClass) => class extends BaseClass { //Or BaseClass can be Model (name it as you want :smile:)
    myFunction(){
      return "Hi from the Trait"
    }

    get myParam(){
      return "The param from Trait"
    }
}
module.exports = Trait;

```
